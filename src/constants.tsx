
import React from 'react';
import { Project, Achievement, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Note-Forge",
    description: "Modern educational platform for organizing study materials with LaTeX support, multi-language (i18n), and real-time collaboration. Full-stack refined UX.",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "LaTeX"],
    githubUrl: "https://gitlab.com/xhandlr/note-forge",
    image: "https://picsum.photos/seed/noteforge/800/450"
  },
  {
    title: "Water Quality Monitoring",
    description: "Real-time IoT system integrating physical sensors with Arduino/MQTT, a Flutter mobile app for monitoring, and a React landing page.",
    tags: ["Flutter", "Arduino", "MQTT", "React", "IoT"],
    githubUrl: "https://gitlab.com/xhandlr/water-quality-monitoring",
    image: "https://picsum.photos/seed/iotwater/800/450"
  },
  {
    title: "Vocación360 UX/UI",
    description: "UX/UI case study for a vocational guidance platform. Comprehensive user research, wireframes, and high-fidelity Figma prototypes.",
    tags: ["Figma", "UX Design", "User Research", "Prototyping"],
    githubUrl: "https://gitlab.com/xhandlr/vocacion360-uxd",
    image: "https://picsum.photos/seed/ux360/800/450"
  },
  {
    title: "Coursera NLP Dashboard",
    description: "Data visualization dashboard processing Coursera reviews using Natural Language Processing for sentiment analysis and trend discovery.",
    tags: ["Python", "Pandas", "NLP", "Streamlit"],
    githubUrl: "https://gitlab.com/xhandlr/nlp-dashboard",
    image: "https://picsum.photos/seed/nlp/800/450"
  },
  {
    title: "ML Interactive Platform",
    description: "Educational tool to visualize Machine Learning algorithms like decision trees and reinforcement learning simulations.",
    tags: ["React", "TypeScript", "ML", "TailwindCSS"],
    githubUrl: "https://gitlab.com/xhandlr/ml-website",
    image: "https://picsum.photos/seed/mlweb/800/450"
  },
  {
    title: "Distributed Image Processor",
    description: "High-performance distributed system for image processing using Java and Python connected via ZeroC Ice middleware.",
    tags: ["Java", "Python", "ZeroC Ice", "Distributed Systems"],
    githubUrl: "https://gitlab.com/xhandlr/image-processor",
    image: "https://picsum.photos/seed/dist/800/450"
  }
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "TS" },
  { name: "Java", icon: "JV" },
  { name: "Python", icon: "PY" },
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "RE" },
  { name: "HTML5", icon: "H5" }
];

export const SOCIAL_LINKS = {
  github: "https://gitlab.com/xhandlr",
  linkedin: "https://linkedin.com/in/camille-elgueta",
  email: "."
};
