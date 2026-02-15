
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Casos de Estudio</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Proyectos Destacados</h3>
          </div>
          <p className="text-gray-400 max-w-md">
            Una selección de proyectos que van desde sistemas IoT hasta plataformas educativas y procesamiento de imágenes distribuido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-6">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://gitlab.com/xhandlr" 
            target="_blank" 
            className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 transition-all group"
          >
            <span>Explorar todos los repositorios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
