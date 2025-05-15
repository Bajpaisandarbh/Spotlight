'use server';

import connectDB from '@/lib/mongodb';
import ProjectModel, { type IProject } from '@/models/Project';
import type { Project } from '@/lib/types';

// Data that was previously in ProjectsSection.tsx, used for seeding.
// Note: Mongoose will generate _id, so the 'id' field here is illustrative.
// It won't be stored in the DB schema if not explicitly defined.
const initialProjectsData: Omit<Project, 'id'>[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with robust product management, user authentication, and payment integration. Built with modern technologies for scalability and performance.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveDemoUrl: 'https://www.youtube.com/watch?v=d0NZ4z9wzgo',
    githubUrl: 'https://github.com/Bajpaisandarbh/Recruitify',
    caseStudyUrl: '#',
  },
  {
    title: 'Recruitify',
    description: 'A collaborative task management application designed to improve team productivity. Features include drag-and-drop boards, real-time updates, and notification systems.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Python', 'Ollama', 'Gradio', 'OpenSource', 'NLP', 'MachineLearning'],
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects in a visually appealing and interactive manner. Focus on clean design and responsiveness.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: '#',
    caseStudyUrl: '#',
  },
];

async function seedProjects() {
  await connectDB();
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
      const project = doc.toObject({ virtuals: true }) as IProject & {_id: any};
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
    console.error('Error fetching projects:', error);
    // In a real app, you might want to throw a more specific error or handle it differently
    return []; // Return empty array on error to prevent breaking the page
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    await connectDB();
    const projectFromDB: IProject | null = await ProjectModel.findById(id);

    if (!projectFromDB) {
      return null;
    }
    
    const project = projectFromDB.toObject({ virtuals: true }) as IProject & {_id: any};
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
    
    const project = savedProject.toObject({ virtuals: true }) as IProject & {_id: any};
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
