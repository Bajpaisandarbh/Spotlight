import mongoose, { Document, Schema, Model } from 'mongoose';
import type { Project as ProjectType } from '@/lib/types';

// Interface for Mongoose document, extending our ProjectType
// We don't need 'id' here as Mongoose uses '_id'.
export interface IProject extends Omit<ProjectType, 'id'>, Document {}

const ProjectSchema: Schema<IProject> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: [{ type: String, required: true }],
  liveDemoUrl: { type: String },
  githubUrl: { type: String },
  caseStudyUrl: { type: String },
}, {
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

// Prevent model recompilation in Next.js dev environment
const ProjectModel: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default ProjectModel;
