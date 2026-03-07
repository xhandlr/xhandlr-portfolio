
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight, Calendar, PenTool, X, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../constants';

const TAG_ICONS: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "Cloudflare": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
};

const Projects: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<number, number>>(
    PROJECTS.reduce((acc, _, idx) => ({ ...acc, [idx]: 0 }), {})
  );
  const [lightbox, setLightbox] = useState<{ images: string[]; idx: number; title: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(prev => prev ? { ...prev, idx: (prev.idx + 1) % prev.images.length } : null);
      if (e.key === 'ArrowLeft') setLightbox(prev => prev ? { ...prev, idx: (prev.idx - 1 + prev.images.length) % prev.images.length } : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  const nextImage = (projectIdx: number, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectIdx]: prev[projectIdx] === totalImages - 1 ? 0 : prev[projectIdx] + 1
    }));
  };

  const prevImage = (projectIdx: number, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectIdx]: prev[projectIdx] === 0 ? totalImages - 1 : prev[projectIdx] - 1
    }));
  };

  const getDateLabel = (project: (typeof PROJECTS)[0]) => {
    if (project.startDate && project.endDate) return `${project.startDate} – ${project.endDate}`;
    if (project.startDate) return project.startDate;
    if (project.date) return project.date;
    return null;
  };

  return (
    <section id="projects" className="scroll-mt-20 bg-[#0a0f1e]">
      {/* Header */}
      <div className="min-h-[30vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Casos de Estudio</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight">Proyectos Destacados</h3>
        </div>
      </div>

      {/* Proyectos */}
      <div>
        {PROJECTS.map((project, idx) => {
          const projectImages = project.images || (project.image ? [project.image] : []);
          const currentIdx = currentImageIndexes[idx] || 0;
          const dateLabel = getDateLabel(project);
          const isEven = idx % 2 === 0;
          const accentRaw = project.accentColor || '#ef4444';
          // Normalizar a hex de 6 dígitos (recortar alpha si viene como #rrggbbaa)
          const accent = accentRaw.length > 7 ? accentRaw.slice(0, 7) : accentRaw;

          return (
            <div
              key={idx}
              className="px-6 lg:px-16 py-40"
              style={{
                background: `linear-gradient(180deg,
                  #0a0f1e 0%,
                  ${accent}18 30%,
                  ${accent}2e 50%,
                  ${accent}18 70%,
                  #0a0f1e 100%)`
              }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Galería — alterna lado */}
                <div className={`lg:col-span-3 relative flex items-center gap-4 ${!isEven ? 'lg:order-2' : ''}`}>
                  {projectImages.length > 1 && (
                    <button
                      onClick={() => prevImage(idx, projectImages.length)}
                      className="text-white p-3 rounded-lg transition-all shadow-lg flex-shrink-0 hover:scale-110"
                      style={{ backgroundColor: project.accentColor || '#ef4444' }}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}

                  <div className="flex-1 relative">
                    {/* Borde de acento */}
                    <div
                      className="absolute -inset-px rounded-xl opacity-30 pointer-events-none z-10"
                      style={{ boxShadow: `0 0 0 1px ${project.accentColor || '#ef4444'}` }}
                    />
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/40 shadow-2xl">
                      <div className="relative w-full h-full group/img">
                      <img
                        src={projectImages[currentIdx]}
                        alt={`${project.title} - ${currentIdx + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => setLightbox({ images: projectImages, idx: currentIdx, title: project.title })}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/20 cursor-zoom-in pointer-events-none"
                      >
                        <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      </div>
                      {projectImages.length > 1 && (
                        <>
                          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {projectImages.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setCurrentImageIndexes(prev => ({ ...prev, [idx]: dotIdx }))}
                                className={`h-2 rounded-full transition-all hover:bg-white ${dotIdx === currentIdx ? 'w-8' : 'w-2 bg-white/40'}`}
                                style={dotIdx === currentIdx ? { backgroundColor: project.accentColor || '#ef4444' } : {}}
                                aria-label={`Ir a imagen ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-white">
                            {currentIdx + 1} / {projectImages.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {projectImages.length > 1 && (
                    <button
                      onClick={() => nextImage(idx, projectImages.length)}
                      className="text-white p-3 rounded-lg transition-all shadow-lg flex-shrink-0 hover:scale-110"
                      style={{ backgroundColor: project.accentColor || '#ef4444' }}
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Info */}
                <div className={`lg:col-span-2 space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  {/* Número + fecha */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded"
                      style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor || '#ef4444' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {dateLabel && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{dateLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Título con acento izquierdo */}
                  <div
                    className="pl-4 border-l-2"
                    style={{ borderColor: project.accentColor || '#ef4444' }}
                  >
                    <h4 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                      {project.title}
                    </h4>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
                      >
                        {TAG_ICONS[tag] && (
                          <img src={TAG_ICONS[tag]} alt={tag} className="w-4 h-4 object-contain" />
                        )}
                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-200 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>{project.githubLabel ?? 'Código'}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                        style={{ backgroundColor: project.accentColor || '#ef4444' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{project.liveLabel ?? 'Demo'}</span>
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                        style={{ backgroundColor: project.accentColor || '#ef4444' }}
                      >
                        <PenTool className="w-4 h-4" />
                        <span>Prototipo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox portal */}
      {lightbox && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Barra superior */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/60 to-transparent"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <span className="text-white/80 text-sm font-medium">{lightbox.title} — {lightbox.idx + 1} / {lightbox.images.length}</span>
            <div className="flex items-center gap-2">
              <a
                href={lightbox.images[lightbox.idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir original</span>
              </a>
              <button
                onClick={() => setLightbox(null)}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Imagen */}
          <img
            src={lightbox.images[lightbox.idx]}
            alt={`${lightbox.title} - ${lightbox.idx + 1}`}
            className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />

          {/* Flechas de navegación */}
          {lightbox.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); setLightbox(prev => prev ? { ...prev, idx: (prev.idx - 1 + prev.images.length) % prev.images.length } : null); }}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); setLightbox(prev => prev ? { ...prev, idx: (prev.idx + 1) % prev.images.length } : null); }}
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots */}
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-5 flex gap-2" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              {lightbox.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(prev => prev ? { ...prev, idx: i } : null)}
                  className={`h-2 rounded-full transition-all ${i === lightbox.idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>,
        document.body
      )}

      {/* Footer */}
      <div className="min-h-[20vh] flex items-center justify-center border-t border-white/5">
        <a
          href="https://github.com/xhandlr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all group"
        >
          <span>Explorar todos los repositorios</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
