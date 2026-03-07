
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string | null;
  githubLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
  figmaUrl?: string;
  image?: string;
  images?: string[];
  startDate?: string;
  endDate?: string;
  date?: string;
  accentColor?: string;
}

export interface Achievement {
  title: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}
