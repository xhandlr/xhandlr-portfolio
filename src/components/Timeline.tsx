
import React, { useEffect, useRef } from 'react';
import { Award, Code, GraduationCap } from 'lucide-react';

const TAG_ICONS: Record<string, string> = {
  "Angular":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Laravel":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "MySQL":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Figma":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Next.js":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Supabase":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "SonarQube":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
  "Cloudflare": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
};

const Timeline: React.FC = () => {
  const events = [
    {
      start: "Dic 2025",
      finish: "Actualidad",
      title: "Desarrolladora Frontend",
      org: "CEOsim",
      desc: "Rediseño de interfaces para plataforma educativa SaaS con Angular.",
      icon: <GraduationCap className="w-5 h-5" />,
      tags: ["Angular", "TypeScript", "Laravel", "MySQL", "Figma"],
    },
    {
      start: "Mar 2024",
      finish: "Actualidad",
      title: "Tutora Académica",
      org: "Universidad de La Frontera",
      desc: "Llevo más de un año apoyando a estudiantes de diferentes carreras en áreas como Fundamentos de Matemáticas, Cálculo y Física.",
      icon: <Code className="w-5 h-5" />,
      tags: ["LaTeX"],
    },
    {
      start: "Ene 2026",
      finish: "Feb 2026",
      title: "Práctica II - Full-Stack",
      org: "Centro de Negocios Sercotec Temuco",
      desc: "Desarrollo de plataforma web con Next.js y Supabase para digitalización de servicios empresariales.",
      icon: <Award className="w-5 h-5" />,
      tags: ["Next.js", "Tailwind", "Supabase", "SonarQube", "Cloudflare"],
    },
    {
      start: "Ene 2024",
      finish: "Ene 2024",
      title: "Práctica I - Full-Stack",
      org: "CEOSim",
      desc: "Desarrollo de nuevas funcionalidades para plataforma SaaS bajo metodología ágil (Jira). Incluyendo un sistema de logros completos y optimización de rendimiento con la reducción de 74% en peso de assets.",
      icon: <Code className="w-5 h-5" />,
      tags: ["Angular", "TypeScript", "Laravel", "MySQL", "Figma"],
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal">
            <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Trayectoria</h2>
            <h3 className="text-5xl font-black mb-12 text-white">Experiencia</h3>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {events.map((event, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 p-1 bg-[#0a0f1e] border-2 border-red-500 rounded-full text-red-500 group-hover:scale-125 transition-transform z-10">
                    {event.icon}
                  </div>
                  <span className="text-sm font-mono text-gray-300 uppercase tracking-widest mb-2 block">{event.start} - {event.finish}</span>
                  <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{event.title}</h4>
                  <p className="text-blue-400 text-base font-medium mb-3 italic">{event.org}</p>
                  <p className="text-gray-200 text-base leading-relaxed max-w-md">{event.desc}</p>

                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {event.tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-white/10 transition-all"
                        >
                          {TAG_ICONS[tag] ? (
                            <img src={TAG_ICONS[tag]} alt={tag} className="w-6 h-6 object-contain" />
                          ) : (
                            <span className="text-cyan-400 text-sm font-bold">∂</span>
                          )}
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tag}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
