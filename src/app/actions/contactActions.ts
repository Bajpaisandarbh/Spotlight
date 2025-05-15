'use server';

import connectDB from '@/lib/mongodb';
import ContactMessageModel, { type IContactMessage } from '@/models/ContactMessage';
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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong><br/>${formData.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

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
