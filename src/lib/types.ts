export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
    caseStudyUrl?: string;
  }
  
  export interface Skill {
    name: string;
    proficiency: number; // Percentage from 0 to 100
    icon?: React.ComponentType<{ className?: string }>; // Optional icon component
  }
  
  export interface PersonalDetail {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
  
  export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    company?: string;
    avatarUrl?: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string; // Consider using Date type if more manipulation is needed
    excerpt: string;
    imageUrl?: string;
    tags: string[];
  }
  
  export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
  