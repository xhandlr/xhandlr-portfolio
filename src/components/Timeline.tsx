
import React, { useEffect, useRef } from 'react';
import { Calendar, Award, Code, GraduationCap } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      year: "Actualidad",
      title: "Ingeniería Civil Informática",
      org: "Universidad de La Frontera",
      desc: "Enfocado en Arquitectura de Software.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Desarrollo Fullstack",
      org: "Proyectos Académicos",
      desc: "Desarrollé",
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Proyecto Académico",
      org: "Proyecto Vocación360",
      desc: "Caso de estudio.",
      icon: <Award className="w-5 h-5" />
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
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal">
            <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Journey</h2>
            <h3 className="text-4xl font-black mb-12">Academic & Career Path</h3>
            
            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {events.map((event, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 p-1 bg-[#050505] border-2 border-red-500 rounded-full text-red-500 group-hover:scale-125 transition-transform z-10">
                    {event.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">{event.year}</span>
                  <h4 className="text-xl font-bold mb-1 text-white group-hover:text-red-500 transition-colors">{event.title}</h4>
                  <p className="text-blue-400 text-sm font-medium mb-3 italic">{event.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">{event.desc}</p>
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
