import { Project, TimelineEvent, SkillItem } from './types';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

/** Tecnologías mostradas en la sección Skills, agrupadas por categoría. */
export const SKILLS: SkillItem[] = [
  // Lenguajes
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg`, category: "Lenguajes" },
  { name: "Python",     icon: `${CDN}/python/python-original.svg`,          category: "Lenguajes" },
  { name: "Dart",       icon: `${CDN}/dart/dart-original.svg`,              category: "Lenguajes" },
  // Frontend
  { name: "React",      icon: `${CDN}/react/react-original.svg`,            category: "Frontend" },
  { name: "Angular",    icon: `${CDN}/angular/angular-original.svg`,        category: "Frontend" },
  { name: "Next.js",    icon: `${CDN}/nextjs/nextjs-original.svg`,          category: "Frontend" },
  { name: "Flutter",    icon: `${CDN}/flutter/flutter-original.svg`,        category: "Frontend" },
  { name: "TailwindCSS",icon: `${CDN}/tailwindcss/tailwindcss-original.svg`,category: "Frontend" },
  // Diseño
  { name: "Figma",      icon: `${CDN}/figma/figma-original.svg`,            category: "Design" },
  // Backend
  { name: "Laravel",    icon: `${CDN}/laravel/laravel-original.svg`,        category: "Backend" },
  { name: "Node.js",    icon: `${CDN}/nodejs/nodejs-original.svg`,          category: "Backend" },
  { name: "MySQL",      icon: `${CDN}/mysql/mysql-original.svg`,            category: "Backend" },
  { name: "Supabase",   icon: `${CDN}/supabase/supabase-original.svg`,      category: "Backend" },
  // Cloud
  { name: "Netlify",    icon: `${CDN}/netlify/netlify-original.svg`,        category: "Cloud" },
  { name: "Cloudflare", icon: `${CDN}/cloudflare/cloudflare-original.svg`,  category: "Cloud" },
  // Herramientas
  { name: "Git",        icon: `${CDN}/git/git-original.svg`,                category: "Tools" },
  { name: "GitHub",     icon: "https://cdn.simpleicons.org/github/white",   category: "Tools" },
  { name: "Docker",     icon: `${CDN}/docker/docker-original.svg`,          category: "Tools" },
  { name: "Insomnia",   icon: `${CDN}/insomnia/insomnia-original.svg`,      category: "Tools" },
  { name: "SonarQube",  icon: `${CDN}/sonarqube/sonarqube-original.svg`,    category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    title: "Plataforma Centro de Negocios Temuco",
    description: "Sistema de digitalización para centro de negocios gubernamental con asistente virtual RAG, gestión de recursos educativos y arquitectura serverless. Cuenta con un total de 6 herramientas financieras, portal de links y biblioteca digital para los clientes del centro de negocios.",
    tags: ["Next.js", "Tailwind", "Supabase", "SonarQube", "Cloudflare"],
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
    description: "Aplicación web full-stack para centralizar material de estudio: permite almacenar ejercicios, organizarlos por asignatura y dificultad, y armar guías exportables en LaTeX.",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Docker"],
    githubUrl: "https://github.com/xhandlr/note-forge",
    liveUrl: "https://xhandlr.github.io/note-forge/",
    startDate: "Febrero 2025",
    endDate: "Marzo 2026",
    accentColor: "#e91b5cff",
    images: [
      "/projects/note-forge-1.png",
      "/projects/note-forge-2.png",
      "/projects/note-forge-3.png",
      "/projects/note-forge-4.png"
    ]
  },
  {
    title: "Vocación360",
    description: "Diseño UX/UI completo para plataforma de orientación vocacional: investigación de usuarios, wireframes y prototipo de alta fidelidad. El diseño incluye dos tipos de tests vocacionales, gamificación para ampliar perspectivas y comparador de carreras.",
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
    description: "Sistema IoT de monitoreo de calidad de agua en tiempo real. Integra sensores físicos (pH, turbidez) con Arduino/MQTT, app móvil Flutter y dashboard React. Inspirado en la iniciativa Smart Temuco.",
    tags: ["Flutter", "Arduino", "Python", "React"],
    githubUrl: "https://github.com/xhandlr/water-quality-monitoring",
    liveUrl: "https://xhandlr.github.io/water-quality-monitoring/",
    date: "Noviembre 2025 - Enero 2026",
    accentColor: "#01afceff",
    images: [
      "/projects/aurix-1.png",
      "/projects/aurix-2.png",
      "/projects/aurix-3.png",
      "/projects/aurix-4.png"
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    start: "Dic 2025",
    finish: "Actualidad",
    title: "Desarrolladora Frontend",
    org: "CEOsim",
    desc: "Rediseño de interfaces para plataforma educativa SaaS con Angular.",
    tags: ["Angular", "TypeScript", "Laravel", "MySQL", "Figma"],
  },
  {
    start: "Mar 2024",
    finish: "Actualidad",
    title: "Tutora Académica",
    org: "Universidad de La Frontera",
    desc: "Llevo más de un año apoyando a estudiantes de diferentes carreras en áreas como Fundamentos de Matemáticas, Cálculo y Física.",
    tags: ["LaTeX"],
  },
  {
    start: "Ene 2026",
    finish: "Feb 2026",
    title: "Práctica II - Full-Stack",
    org: "Centro de Negocios Sercotec Temuco",
    desc: "Desarrollo de plataforma web con Next.js y Supabase para digitalización de servicios empresariales.",
    tags: ["Next.js", "Tailwind", "Supabase", "SonarQube", "Cloudflare"],
  },
  {
    start: "Jul 2025",
    finish: "Ago 2025",
    title: "Práctica I - Full-Stack",
    org: "CEOSim",
    desc: "Desarrollo de nuevas funcionalidades para plataforma SaaS bajo metodología ágil (Jira). Incluyendo un sistema de logros completos y optimización de rendimiento con la reducción de 74% en peso de assets.",
    tags: ["Angular", "TypeScript", "Laravel", "MySQL", "Figma"],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/xhandlr",
  linkedin: "https://linkedin.com/in/camille-elgueta"
};
