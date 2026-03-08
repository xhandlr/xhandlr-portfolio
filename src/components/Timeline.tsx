
import React from 'react';
import { Award, Code, GraduationCap } from 'lucide-react';
import { TIMELINE_EVENTS } from '../constants';
import { TAG_ICONS } from '../data/tagIcons';

const EVENT_ICONS = [
  <GraduationCap className="w-5 h-5" />,
  <Code className="w-5 h-5" />,
  <Award className="w-5 h-5" />,
  <Code className="w-5 h-5" />,
];

/**
 * Componente de línea de tiempo que muestra la experiencia laboral y tecnologías asociadas.
 */
const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal">
            <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Trayectoria</h2>
            <h3 className="text-5xl font-black mb-12 text-white">Experiencia</h3>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 p-1 bg-[#0a0f1e] border-2 border-red-500 rounded-full text-red-500 group-hover:scale-125 transition-transform z-10">
                    {EVENT_ICONS[idx] ?? <Code className="w-5 h-5" />}
                  </div>
                  <span className="text-sm font-mono text-gray-300 uppercase tracking-widest mb-2 block">{event.start} - {event.finish}</span>
                  <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{event.title}</h4>
                  <p className="text-blue-400 text-base font-medium mb-3 italic">{event.org}</p>
                  <p className="text-gray-200 text-base leading-relaxed max-w-md">{event.desc}</p>

                  {event.tags.length > 0 && (
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
