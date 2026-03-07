
import React, { useEffect, useRef } from 'react';
import { Award, Code, GraduationCap } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      start: "Dic 2025",
      finish: "Actualidad",
      title: "Desarrolladora Frontend",
      org: "CEOsim",
      desc: "Rediseño de interfaces para plataforma educativa SaaS con Angular.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      start: "Mar 2024",
      finish: "Actualidad",
      title: "Tutora Académica",
      org: "Universidad de La Frontera",
      desc: "Llevo más de un año apoyando a estudiantes de diferentes carreras en áreas como Fundamentos de Matemáticas, Cálculo y Física.",
      icon: <Code className="w-5 h-5" />
    },
    {
      start: "Ene 2026",
      finish: "Feb 2026",
      title: "Práctica II - Full-Stack",
      org: "Centro de Negocios Sercotec Temuco",
      desc: "Desarrollo de plataforma web con Next.js y Supabase para digitalización de servicios empresariales.",
      icon: <Award className="w-5 h-5" />
    },
    {
      start: "Ene 2024",
      finish: "Ene 2024",
      title: "Práctica I - Full-Stack",
      org: "CEOSim",
      desc: "Desarrollo de nuevas funcionalidades para plataforma SaaS bajo metodología ágil (Jira). Incluyendo un sistema de logros completos y optimización de rendimiento con la reducción de 74% en peso de assets.",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
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
