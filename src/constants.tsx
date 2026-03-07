
import React from 'react';
import { Project, Achievement, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Plataforma Centro de Negocios Temuco",
    description: "Sistema de digitalización para centro de negocios gubernamental con asistente virtual RAG, gestión de recursos educativos y arquitectura serverless.",
    tags: ["Next.js", "Tailwind", "Supabase", "RAG", "Cloudflare"],
    githubUrl: null, 
    liveUrl: "https://cdntemuco.ufro.cl/",
    liveLabel: "Sitio Web",
    startDate: "Enero 2026",
    endDate: "Febrero 2026",
    accentColor: "#3b86f6ff",
    images: [
      "/projects/cdntemuco-1.png", 
      "/projects/cdntemuco-2.png", 
      "/projects/cdntemuco-3.png"
    ]
  },
  {
    title: "Note Forge",
    description: "Plataforma educativa full-stack para organizar material de estudio con soporte LaTeX, internacionalización (i18n) y modo demo interactivo.",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Docker"],
    githubUrl: "https://github.com/xhandlr/note-forge",
    liveUrl: "https://xhandlr.github.io/note-forge/",
    startDate: "Febrero 2025",
    endDate: "Marzo 2026",
    accentColor: "#e91b85ff",
    images: [
      "/projects/note-forge-1.png",
      "/projects/note-forge-2.png",
      "/projects/note-forge-3.png",
      "/projects/note-forge-4.png"
    ]
  },
  {
    title: "Vocación360",
    description: "Diseño UX/UI completo para plataforma de orientación vocacional: investigación de usuarios, wireframes y prototipo de alta fidelidad.",
    tags: ["Figma", "UX Research", "Prototyping", "User Testing"],
    githubUrl: "https://github.com/xhandlr/vocacion360-uxd",
    githubLabel: "Documentación",
    figmaUrl: "https://www.figma.com/proto/4I57N9A64JHSH1Dtd84zdq/Vocaci%C3%B3n360-Oficial",
    startDate: "Mayo 2025",
    endDate: "Junio 2025",
    accentColor: "#501df6ff",
    images: [
      "/projects/vocacion360-1.png",
      "/projects/vocacion360-2.png",
      "/projects/vocacion360-3.png",
      "/projects/vocacion360-4.png"
    ]
  },
  {
    title: "Water Quality Monitoring",
    description: "Sistema IoT de monitoreo en tiempo real integrando sensores físicos (pH, turbidez) con Arduino/MQTT, app móvil Flutter y dashboard React.",
    tags: ["Flutter", "Arduino", "MQTT", "IoT", "React"],
    githubUrl: "https://github.com/xhandlr/water-quality-monitoring",
    liveUrl: "https://xhandlr.github.io/water-quality-monitoring/",
    date: "Enero 2024",
    accentColor: "#06b6d4",
    images: [
      "/projects/aurix-1.png",
      "/projects/aurix-2.png",
      "/projects/aurix-3.png",
      "/projects/aurix-4.png"
    ]
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
  github: "https://github.com/xhandlr",
  linkedin: "https://linkedin.com/in/camille-elgueta",
  email: "."
};
