import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    const sendGridKey = process.env.SENDGRID_API_KEY;
    const fromAddress = process.env.SENDGRID_FROM || process.env.GMAIL_USER || 'no-reply@example.com';
    const toAddress = process.env.SENDGRID_FROM || process.env.GMAIL_USER || 'no-reply@example.com';

    if (sendGridKey) {
      sgMail.setApiKey(sendGridKey);
      const msg: MailDataRequired = {
        to: toAddress as string,
        from: fromAddress as string,
        subject: 'Test email from Spotlight',
        text: 'This is a test email sent from the Spotlight test route.',
      };
      await sgMail.send(msg);
    } else {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: `"Spotlight Test" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: 'Test email from Spotlight',
        text: 'This is a test email sent from the Spotlight test route.',
      });
    }

    return NextResponse.json({ success: true, message: 'Test email sent (or attempted).' });
  } catch (err: unknown) {
    console.error('Test email error:', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
