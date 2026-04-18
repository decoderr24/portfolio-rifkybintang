import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Contact Form Submission
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    console.log(`[BACKEND] New Inquiry Received from ${name} (${email}): ${message}`);

    // Email Delivery Logic
    try {
      // These variables should be set in the platform's Environment Variables settings
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = parseInt(process.env.SMTP_PORT || '587');
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const targetEmail = process.env.TARGET_EMAIL || 'rifkybintang24@gmail.com';

      if (!smtpHost || !smtpUser || !smtpPass) {
        console.warn('[BACKEND] SMTP credentials not configured. Message logged to console only.');
        return res.status(200).json({ 
          success: true, 
          message: 'Inquiry received by server (SMTP not configured for actual delivery).' 
        });
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      } as any);

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0F172A; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">New Portfolio Inquiry</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('[BACKEND] Email sent successfully to', targetEmail);
      res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('[BACKEND] Failed to send email:', error);
      res.status(500).json({ success: false, message: 'Server failed to deliver email.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SERVER] Running at http://localhost:${PORT}`);
    console.log(`[SERVER] Mode: ${process.env.NODE_ENV || 'development'}`);
  });
}

startServer().catch((err) => {
  console.error('[SERVER] Failed to start:', err);
  process.exit(1);
});
