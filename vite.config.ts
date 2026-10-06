import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { processLeadSubmission } from './server/leadHandler.ts';

// Load local environment variables
dotenv.config();

function leadsApiPlugin() {
  return {
    name: 'leads-api-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/leads', async (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const parsed = body ? JSON.parse(body) : {};
            const clientIp =
              req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
              req.socket.remoteAddress ||
              '127.0.0.1';

            const result = await processLeadSubmission(parsed, clientIp);
            res.statusCode = result.statusCode;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.body));
          } catch (err: any) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), leadsApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

