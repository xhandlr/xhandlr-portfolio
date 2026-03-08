
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Calendar, PenTool } from 'lucide-react';
import { PROJECTS } from '../constants';
import { TAG_ICONS } from '../data/tagIcons';
import { Project } from '../types';
import ProjectGallery from './projects/ProjectGallery';
import ProjectLightbox from './projects/ProjectLightbox';

/** Estado del lightbox: qué proyecto/imagen está abierta. */
interface LightboxState {
  images: string[];
  initialIdx: number;
  title: string;
}

/** Retorna la etiqueta de fecha formateada del proyecto. */
const getDateLabel = (project: Project): string | null => {
  if (project.startDate && project.endDate) return `${project.startDate} – ${project.endDate}`;
  if (project.startDate) return project.startDate;
  if (project.date) return project.date;
  return null;
};

/**
 * Sección de proyectos destacados.
 * Alterna el layout galería/info en filas pares e impares.
 */
const Projects: React.FC = () => {
  const [currentIdxs, setCurrentIdxs] = useState<Record<number, number>>(
    PROJECTS.reduce((acc, _, i) => ({ ...acc, [i]: 0 }), {})
  );
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const nextImage = (projIdx: number, total: number) =>
    setCurrentIdxs((prev: Record<number, number>) => ({ ...prev, [projIdx]: (prev[projIdx] + 1) % total }));

  const prevImage = (projIdx: number, total: number) =>
    setCurrentIdxs((prev: Record<number, number>) => ({ ...prev, [projIdx]: (prev[projIdx] - 1 + total) % total }));

  return (
    <section id="projects" className="scroll-mt-20 bg-[#0a0f1e]">
      {/* Header */}
      <div className="min-h-[30vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Casos de Estudio</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight">Proyectos Destacados</h3>
        </div>
      </div>

      {/* Lista de proyectos */}
      <div>
        {PROJECTS.map((project, idx) => {
          const images = project.images ?? (project.image ? [project.image] : []);
          const currentIdx = currentIdxs[idx] ?? 0;
          const dateLabel = getDateLabel(project);
          const isEven = idx % 2 === 0;
          const accentRaw = project.accentColor ?? '#ef4444';
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

                {/* Galería */}
                <div className={`lg:col-span-3 ${!isEven ? 'lg:order-2' : ''}`}>
                  <ProjectGallery
                    images={images}
                    currentIdx={currentIdx}
                    accentColor={accentRaw}
                    title={project.title}
                    onPrev={() => prevImage(idx, images.length)}
                    onNext={() => nextImage(idx, images.length)}
                    onDotClick={(dotIdx: number) => setCurrentIdxs((prev: Record<number, number>) => ({ ...prev, [idx]: dotIdx }))}
                    onOpenLightbox={(imgIdx: number) => setLightbox({ images, initialIdx: imgIdx, title: project.title })}
                  />
                </div>

                {/* Info */}
                <div className={`lg:col-span-2 space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  {/* Número + fecha */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded"
                      style={{ backgroundColor: `${accent}20`, color: accent }}
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

                  {/* Título */}
                  <div className="pl-4 border-l-2" style={{ borderColor: accent }}>
                    <h4 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                      {project.title}
                    </h4>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-white/10 transition-all"
                      >
                        {TAG_ICONS[tag] && (
                          <img src={TAG_ICONS[tag]} alt={tag} className="w-6 h-6 object-contain" />
                        )}
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-200 text-base leading-relaxed">{project.description}</p>

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
                        style={{ backgroundColor: accentRaw }}
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
                        style={{ backgroundColor: accentRaw }}
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

      {/* Lightbox */}
      {lightbox && (
        <ProjectLightbox
          images={lightbox.images}
          initialIdx={lightbox.initialIdx}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
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
