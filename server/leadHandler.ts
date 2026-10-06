/**
 * Server-side lead submission handler for 28 Labs
 * Validates, rate-limits, formats, and delivers incoming project inquiries.
 */
import https from 'https';
import dns from 'dns';

try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {
  // Ignore if permissions or environment don't permit custom DNS servers
}

function customDnsLookup(hostname: string, options: any, callback: any) {
  const cb = typeof options === 'function' ? options : callback;
  const opts = typeof options === 'object' ? options : {};

  dns.resolve4(hostname, (err, addresses) => {
    if (!err && addresses && addresses.length > 0) {
      if (opts.all) {
        return cb(null, addresses.map((addr) => ({ address: addr, family: 4 })));
      }
      return cb(null, addresses[0], 4);
    }
    dns.lookup(hostname, opts, cb);
  });
}

export interface LeadRequestData {
  projectType?: unknown;
  ideaDescription?: unknown;
  timeline?: unknown;
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  source?: unknown;
  honeypot?: unknown;
}

export interface LeadHandlerResult {
  statusCode: number;
  body: {
    success: boolean;
    message?: string;
    error?: string;
    delivered?: boolean;
    simulated?: boolean;
  };
}

export const ALLOWED_PROJECT_TYPES = [
  'Website',
  'Mobile App',
  'Web Application',
  'AI Automation',
  'Custom Software',
  'Not sure — help me figure it out',
] as const;

export const ALLOWED_TIMELINES = [
  'ASAP',
  'This month',
  '1–3 months',
  'Just exploring',
] as const;

// In-memory rate limiting: max 5 requests per 10 minutes per IP/email
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(key) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(key, validTimestamps);
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function processLeadSubmission(
  rawBody: LeadRequestData,
  clientIp = 'unknown'
): Promise<LeadHandlerResult> {
  // 1. Anti-spam honeypot check
  if (rawBody.honeypot && String(rawBody.honeypot).trim().length > 0) {
    console.warn(`[Anti-Spam] Honeypot triggered from IP: ${clientIp}`);
    // Silently return success to bot without sending email
    return {
      statusCode: 200,
      body: {
        success: true,
        message: "Thanks — we've received your idea.",
      },
    };
  }

  // 2. Extract and sanitize fields
  const fullName = typeof rawBody.fullName === 'string' ? rawBody.fullName.trim() : '';
  const email = typeof rawBody.email === 'string' ? rawBody.email.trim() : '';
  const projectType = typeof rawBody.projectType === 'string' ? rawBody.projectType.trim() : '';
  const ideaDescription = typeof rawBody.ideaDescription === 'string' ? rawBody.ideaDescription.trim() : '';
  const timeline = typeof rawBody.timeline === 'string' ? rawBody.timeline.trim() : '';
  const company = typeof rawBody.company === 'string' ? rawBody.company.trim() : '';
  const phone = typeof rawBody.phone === 'string' ? rawBody.phone.trim() : '';
  const source = typeof rawBody.source === 'string' ? rawBody.source.trim() : 'Project Starter';

  // 3. Server-side validation
  if (!fullName || fullName.length < 2) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Please provide your full name (at least 2 characters).',
      },
    };
  }

  if (fullName.length > 100) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Full name is too long (maximum 100 characters).',
      },
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Please enter a valid email address.',
      },
    };
  }

  if (!ALLOWED_PROJECT_TYPES.includes(projectType as any)) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: `Invalid project type. Allowed options: ${ALLOWED_PROJECT_TYPES.join(', ')}`,
      },
    };
  }

  if (!ALLOWED_TIMELINES.includes(timeline as any)) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: `Invalid timeline. Allowed options: ${ALLOWED_TIMELINES.join(', ')}`,
      },
    };
  }

  if (!ideaDescription || ideaDescription.length < 10) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Please describe what you want to build in a little more detail (at least 10 characters).',
      },
    };
  }

  if (ideaDescription.length > 5000) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Project description is too long (maximum 5,000 characters).',
      },
    };
  }

  if (company.length > 150) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Company name is too long (maximum 150 characters).',
      },
    };
  }

  if (phone.length > 50) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Phone number is too long (maximum 50 characters).',
      },
    };
  }

  // 4. Rate-limiting by IP and email
  const rateLimitKey = `${clientIp}_${email.toLowerCase()}`;
  if (!checkRateLimit(rateLimitKey)) {
    return {
      statusCode: 429,
      body: {
        success: false,
        error: 'Too many submissions received. Please wait a few minutes before submitting another request.',
      },
    };
  }

  // 5. Build clean email content
  const submissionDate = new Date();
  const formattedDate = submissionDate.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'UTC',
  });

  const subject = `New 28 Labs Project Inquiry — ${projectType}`;

  const textBody = [
    'New Project Inquiry',
    '==================',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    `Phone / WhatsApp: ${phone || 'Not provided'}`,
    `Project type: ${projectType}`,
    `Timeline: ${timeline}`,
    `Source: ${source}`,
    `Date/Time: ${formattedDate} (UTC)`,
    '',
    'Project description:',
    '--------------------',
    ideaDescription,
  ].join('\n');

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 24px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 32px; }
    .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .field-table td { padding: 8px 0; font-size: 14px; vertical-align: top; }
    .field-label { width: 150px; font-weight: 600; color: #64748b; }
    .field-value { color: #0f172a; font-weight: 500; }
    .desc-box { background: #f1f5f9; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; word-break: break-word; }
    .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New 28 Labs Project Inquiry</h1>
      <p>${escapeHtml(projectType)} • Submitted ${escapeHtml(formattedDate)} (UTC)</p>
    </div>
    <div class="content">
      <table class="field-table">
        <tr>
          <td class="field-label">Full Name:</td>
          <td class="field-value"><strong>${escapeHtml(fullName)}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Email Address:</td>
          <td class="field-value"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="field-label">Company:</td>
          <td class="field-value">${escapeHtml(company || 'Not provided')}</td>
        </tr>
        <tr>
          <td class="field-label">Phone / WhatsApp:</td>
          <td class="field-value">${escapeHtml(phone || 'Not provided')}</td>
        </tr>
        <tr>
          <td class="field-label">Project Type:</td>
          <td class="field-value">${escapeHtml(projectType)}</td>
        </tr>
        <tr>
          <td class="field-label">Desired Timeline:</td>
          <td class="field-value">${escapeHtml(timeline)}</td>
        </tr>
        <tr>
          <td class="field-label">Submission Source:</td>
          <td class="field-value">${escapeHtml(source)}</td>
        </tr>
      </table>

      <div style="font-weight: 600; font-size: 14px; color: #0f172a; margin-top: 16px;">Project Description:</div>
      <div class="desc-box">${escapeHtml(ideaDescription)}</div>
    </div>
    <div class="footer">
      Delivered via 28 Labs Lead Pipeline • Destination: ${escapeHtml(process.env.CONTACT_EMAIL || 'hello@28labs.net')}
    </div>
  </div>
</body>
</html>
`;

interface ResendApiResponse {
  statusCode: number;
  data: any;
}

function callResendApi(apiKey: string, payload: any): Promise<ResendApiResponse> {
  return new Promise((resolve, reject) => {
    const dataString = JSON.stringify(payload);
    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dataString),
      },
      lookup: customDnsLookup,
      timeout: 15000,
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        let parsed: any = {};
        try {
          parsed = body ? JSON.parse(body) : {};
        } catch {
          parsed = { message: body };
        }
        resolve({
          statusCode: res.statusCode || 500,
          data: parsed,
        });
      });
    });

    req.on('timeout', () => {
      req.destroy(new Error('Connection to api.resend.com timed out'));
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(dataString);
    req.end();
  });
}

  // 6. Deliver email or log locally
  const destinationEmail = process.env.CONTACT_EMAIL || 'hello@28labs.net';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || '28 Labs Inquiries <onboarding@resend.dev>';
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey && resendApiKey.trim().length > 0) {
    try {
      const resendResult = await callResendApi(resendApiKey, {
        from: fromEmail,
        to: [destinationEmail],
        reply_to: email,
        subject: subject,
        text: textBody,
        html: htmlBody,
      });

      if (resendResult.statusCode < 200 || resendResult.statusCode >= 300) {
        console.error('[Resend Error]', resendResult.statusCode, resendResult.data);
        const providerMsg = resendResult.data?.message ? ` (${resendResult.data.message})` : '';
        return {
          statusCode: 502,
          body: {
            success: false,
            error: `Email provider error${providerMsg}. Please contact us directly at ${destinationEmail}`,
          },
        };
      }

      console.log(`[Lead Delivered] Resend ID: ${resendResult.data?.id} -> ${destinationEmail}`);

      return {
        statusCode: 200,
        body: {
          success: true,
          delivered: true,
          message: "Thanks — we've received your idea.",
        },
      };
    } catch (err: any) {
      console.error('[Resend Connection Exception]', err?.message || err);
      return {
        statusCode: 500,
        body: {
          success: false,
          error: 'An unexpected error occurred while delivering your inquiry. Please reach out to ' + destinationEmail,
        },
      };
    }
  } else {
    // RESEND_API_KEY is not configured
    // Log the lead details prominently on server for development/staging
    console.log('\n=============================================================');
    console.log('[28 LABS LEAD RECEIVED] (RESEND_API_KEY not configured)');
    console.log('-------------------------------------------------------------');
    console.log(`Date:     ${formattedDate}`);
    console.log(`Name:     ${fullName}`);
    console.log(`Email:    ${email}`);
    console.log(`Company:  ${company || 'Not provided'}`);
    console.log(`Phone:    ${phone || 'Not provided'}`);
    console.log(`Need:     ${projectType}`);
    console.log(`Timeline: ${timeline}`);
    console.log(`Source:   ${source}`);
    console.log('Idea:');
    console.log(ideaDescription);
    console.log('-------------------------------------------------------------');
    console.log(`Notice: Configure RESEND_API_KEY in .env to send real emails to ${destinationEmail}`);
    console.log('=============================================================\n');

    return {
      statusCode: 200,
      body: {
        success: true,
        delivered: false,
        simulated: true,
        message: "Thanks — we've received your idea.",
      },
    };
  }
}
