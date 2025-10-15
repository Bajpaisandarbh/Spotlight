'use server';

import connectDB from '@/lib/mongodb';
import ProjectModel, { type IProject } from '@/models/Project';
import { Types } from 'mongoose';
import type { Project } from '@/lib/types';

// Data that was previously in ProjectsSection.tsx, used for seeding.
// Note: Mongoose will generate _id, so the 'id' field here is illustrative.
// It won't be stored in the DB schema if not explicitly defined.
const initialProjectsData: Omit<Project, 'id'>[] = [
  {
    title: 'Infinite Runner Game: My Endless Adventure Game',
    description: 'This is an endless running game I created where you control a speedy cube! The goal is to navigate through a constantly changing world, dodging obstacles for as long as you can.',
  imageUrl: '/assets/projects/runner.png',
    tags: ['WebGL', 'Unity', 'HTML5', '3D', 'C#', 'GamePhysics'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Recruitify: An AI-Automated Recruitment Platform',
    description: 'Recruitify is an AI project I developed to automate and improve the recruitment workflow. It can automatically read candidate information from resumes, score how well they match a job, and provide insights.',
  imageUrl: '/assets/projects/recruitify.png',
    tags: ['Python', 'Ollama', 'NLP', 'Gradio', 'OpenSource', 'Machine Learning'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/Bajpaisandarbh/Recruitify',
  },
  {
    title: 'HIREZ - AI hiring platform',
    description: 'Hirez can take tests of candidates on behalf of HR and also eliminate by using our trained AI model which we have used. Candidate can upload their resume on the website and...',
  imageUrl: '/assets/projects/hirez.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];

async function seedProjects() {
  try {
    await connectDB();
  } catch (err) {
    // If we can't connect to the DB, skip seeding during builds or offline runs
    console.warn('Skipping project seeding because DB connection failed:', err);
    return;
  }

  const count = await ProjectModel.countDocuments();
  if (count === 0) {
    console.log('No projects found, seeding initial data...');
    try {
      await ProjectModel.insertMany(initialProjectsData);
      console.log('Initial projects seeded successfully.');
    } catch (error) {
      console.error('Error seeding projects:', error);
      // Rethrow or handle as appropriate for your application
      throw new Error('Failed to seed projects.');
    }
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    await connectDB();
    await seedProjects(); // Seed if database is empty

    const projectsFromDB: IProject[] = await ProjectModel.find({}).sort({ createdAt: -1 });
    
    // Map Mongoose documents to plain objects and transform _id to id
    const projects: Project[] = projectsFromDB.map(doc => {
      const project = doc.toObject({ virtuals: true }) as IProject & {_id: Types.ObjectId};
      return {
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        tags: project.tags,
        liveDemoUrl: project.liveDemoUrl,
        githubUrl: project.githubUrl,
        caseStudyUrl: project.caseStudyUrl,
      };
    });
    return projects;
  } catch (error) {
    // If fetching projects fails (for example during build due to DNS issues with MongoDB Atlas),
    // fall back to the local initialProjectsData so the site can still render static content.
    console.warn('Error fetching projects; falling back to local seed data:', error);
    const fallback: Project[] = initialProjectsData.map((p, i) => ({
      id: `local-${i + 1}`,
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      tags: p.tags,
      liveDemoUrl: p.liveDemoUrl,
      githubUrl: p.githubUrl || '#',
      caseStudyUrl: p.caseStudyUrl || '#',
    }));
    return fallback;
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    await connectDB();
    const projectFromDB: IProject | null = await ProjectModel.findById(id);

    if (!projectFromDB) {
      return null;
    }
    
  const project = projectFromDB.toObject({ virtuals: true }) as IProject & {_id: Types.ObjectId};
    return {
      id: project._id.toString(),
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      tags: project.tags,
      liveDemoUrl: project.liveDemoUrl,
      githubUrl: project.githubUrl,
      caseStudyUrl: project.caseStudyUrl,
    };
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    return null;
  }
}

export async function createProject(projectData: Omit<Project, 'id'>): Promise<Project> {
  try {
    await connectDB();
    const newProjectDoc = new ProjectModel(projectData);
    const savedProject = await newProjectDoc.save();
    
  const project = savedProject.toObject({ virtuals: true }) as IProject & {_id: Types.ObjectId};
    return {
      id: project._id.toString(),
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      tags: project.tags,
      liveDemoUrl: project.liveDemoUrl,
      githubUrl: project.githubUrl,
      caseStudyUrl: project.caseStudyUrl,
    };
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project.');
  }
}

// Add updateProject and deleteProject actions as needed
// export async function updateProject(id: string, projectData: Partial<Omit<Project, 'id'>>): Promise<Project | null> { ... }
// export async function deleteProject(id: string): Promise<{ success: boolean }> { ... }
