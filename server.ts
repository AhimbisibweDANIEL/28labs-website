import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { processLeadSubmission } from './server/leadHandler.ts';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// API endpoint for lead submissions
app.post('/api/leads', async (req, res) => {
  const clientIp = 
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
    req.socket.remoteAddress || 
    'unknown';

  try {
    const result = await processLeadSubmission(req.body, clientIp);
    res.status(result.statusCode).json(result.body);
  } catch (err) {
    console.error('[API /api/leads error]', err);
    res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred. Please try again or email hello@28labs.net',
    });
  }
});

// Serve production static assets from dist
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback for SPA client routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Only start listening if executed directly as entrypoint
const isDirectEntry = process.argv[1] && (process.argv[1].endsWith('server.ts') || process.argv[1].endsWith('server.js'));
if (isDirectEntry && process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`28 Labs production server running on http://localhost:${PORT}`);
  });
}

export default app;
