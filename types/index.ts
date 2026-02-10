// types/project.ts

/* ---------- Shared Enums ---------- */

export type Category =
  | 'AI/ML'
  | 'Web Dev'
  | 'Cybersecurity'
  | 'Data Science'
  | 'Mobile'
  | 'DevOps';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProjectStatus = 'Active' | 'Help Wanted' | 'Archived';

/* ---------- Core Project (Detail Page / API) ---------- */

export interface Project {
  id: string;
  title: string;
  slug: string;

  shortDescription: string; // Card hook
  fullDescription: string;
  problemStatement: string;

  techStack: string[];
  tags: Category[];
  difficulty: Difficulty;

  upvotes: number;

  author: {
    name: string;
    avatarUrl?: string;
  };

  status: ProjectStatus;

  githubUrl?: string;
  demoUrl?: string;

  createdAt: string;
  image: string;
}

/* ---------- Project Card (UI-optimized) ---------- */

export interface ProjectCardData {
  id: string; // slug
  title: string;
  description: string;
  tags: Category[];

  author: {
    name: string;
    avatar?: string;
  };

  likes: number;
  image?: string;

  difficulty: Difficulty;
  status: ProjectStatus;
}

/* ---------- Mapper ---------- */

export function toProjectCard(project: Project): ProjectCardData {
  return {
    id: project.slug,
    title: project.title,
    description: project.shortDescription,
    tags: project.tags,

    author: {
      name: project.author.name,
      avatar: project.author.avatarUrl,
    },

    likes: project.upvotes,
    image: project.image,

    difficulty: project.difficulty,
    status: project.status,
  };
}
