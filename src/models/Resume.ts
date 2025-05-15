
import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IResume extends Document {
  filename: string;
  contentType: string;
  data: Buffer;
  uploadedAt: Date;
}

const ResumeSchema: Schema<IResume> = new Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true, default: 'application/pdf' },
  data: { type: Buffer, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

// Index for faster querying of the latest resume
ResumeSchema.index({ uploadedAt: -1 });

const ResumeModel: Model<IResume> = mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);

export default ResumeModel;
