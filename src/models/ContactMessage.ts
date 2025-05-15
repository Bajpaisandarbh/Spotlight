
import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IContactMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactMessageSchema: Schema<IContactMessage> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

// Prevent model recompilation in Next.js dev environment
const ContactMessageModel: Model<IContactMessage> = mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessageModel;
