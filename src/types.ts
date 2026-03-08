
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

export interface TimelineEvent {
  start: string;
  finish: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  category: string;
}
