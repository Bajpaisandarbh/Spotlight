'use server';

import connectDB from '@/lib/mongodb';
import ContactMessageModel, { type IContactMessage } from '@/models/ContactMessage';
import sgMail from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import nodemailer from 'nodemailer';

export interface SubmitContactFormInput {
  name: string;
  email: string;
  message: string;
}

export interface SubmitContactFormResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  } | null;
}

export async function submitContactForm(
  formData: SubmitContactFormInput
): Promise<SubmitContactFormResponse> {
  try {
    // 1. Save to MongoDB
    await connectDB();
    const newContactMessage = new ContactMessageModel({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    const savedMessage = await newContactMessage.save() as IContactMessage & { _id: string };

    // 2. Send Email Notification
    // Use Gmail (nodemailer + app password) as the primary (free) sender.
    // Use SendGrid only if SENDGRID_API_KEY is set and SENDGRID_PRIMARY=true.
    const sendGridKey = process.env.SENDGRID_API_KEY;
    const useSendGridPrimary = (process.env.SENDGRID_PRIMARY || '').toLowerCase() === 'true';

    const mailSubject = `New Contact Form Submission from ${formData.name}`;
    const mailText = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const mailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong><br/>${formData.message.replace(/\n/g, "<br/>")}</p>
    `;

    if (sendGridKey && useSendGridPrimary) {
      // If explicitly configured to use SendGrid as primary
      sgMail.setApiKey(sendGridKey);
      const msg: MailDataRequired = {
        to: (process.env.SENDGRID_FROM || process.env.GMAIL_USER) as string,
        from: {
          email: (process.env.SENDGRID_FROM || process.env.GMAIL_USER) as string,
          name: formData.name,
        },
        replyTo: {
          email: formData.email,
          name: formData.name,
        },
        subject: mailSubject,
        text: mailText,
        html: mailHtml,
      };
      await sgMail.send(msg);
    } else {
      // Primary path: nodemailer using Gmail app password (free)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      // Use the sender's name as the display name but send from the verified account
      const fromAddress = process.env.GMAIL_USER;
      await transporter.sendMail({
        from: `"${formData.name}" <${fromAddress}>`,
        to: process.env.GMAIL_USER,
        replyTo: `${formData.name} <${formData.email}>`,
        subject: mailSubject,
        text: mailText,
        html: mailHtml,
      });
    }

    return {
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: savedMessage._id.toString(),
        name: savedMessage.name,
        email: savedMessage.email,
        message: savedMessage.message,
        createdAt: savedMessage.createdAt,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    
    // Improved error handling
    let errorMessage = 'Failed to send message. Please try again later.';
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        errorMessage = 'Validation Error: Please check your input.';
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Database connection failed. Try again later.';
      }
    }

    return {
      success: false,
      message: errorMessage,
      data: null,
    };
  }
}
