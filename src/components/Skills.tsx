
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    // Lenguajes
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Lenguajes" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Lenguajes" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", category: "Lenguajes" },
    
    // Frontend
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", category: "Frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Frontend" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
    
    // Design
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Design" },
    
    // Backend & Cloud
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "Backend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Backend" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: "Backend" },

    // Cloud
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", category: "Cloud" },
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", category: "Cloud" },
    
    // Tools
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", category: "Tools" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools" },
    { name: "Insomnia", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg", category: "Tools" },
    { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", category: "Tools" }
  ];

  const categories = ["Lenguajes", "Frontend", "Design", "Backend", "Cloud", "Tools"];


  return (
    <section id="skills" className="py-24 bg-black scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Stack</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Tecnologías</h3>
        </div>

        {/* Tabla de Skills */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#050505]">
          {categories.map((category, idx) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category} className={`${idx !== 0 ? 'border-t border-white/10' : ''}`}>
                {/* Fila de categoría */}
                <div className="grid grid-cols-12 gap-6 p-6 hover:bg-white/5 transition-colors">
                  {/* Columna de categoría */}
                  <div className="col-span-12 md:col-span-3">
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                      {category}
                    </h4>
                  </div>
                  
                  {/* Columna de iconos */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="flex flex-wrap gap-4">
                      {categorySkills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-white/10 transition-all"
                        >
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                          />
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
};

export default Skills;
