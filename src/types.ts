
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface Achievement {
  title: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}
