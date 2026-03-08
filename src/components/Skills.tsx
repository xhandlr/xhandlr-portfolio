
import React from 'react';
import { SKILLS } from '../constants';

const CATEGORIES = ["Lenguajes", "Frontend", "Design", "Backend", "Cloud", "Tools"];

/**
 * Sección de tecnologías agrupadas por categoría.
 * Los datos provienen de `constants.tsx`.
 */
const Skills: React.FC = () => (
  <section id="skills" className="py-24 bg-black scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Stack</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Tecnologías</h3>
      </div>

      <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#050505]">
        {CATEGORIES.map((category, idx) => {
          const items = SKILLS.filter(s => s.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className={idx !== 0 ? 'border-t border-white/10' : ''}>
              <div className="grid grid-cols-12 gap-6 p-6 hover:bg-white/5 transition-colors">
                <div className="col-span-12 md:col-span-3">
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">{category}</h4>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex flex-wrap gap-4">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-white/10 transition-all"
                      >
                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
