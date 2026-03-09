
import React from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Props {
  images: string[];
  currentIdx: number;
  accentColor: string;
  title: string;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (idx: number) => void;
  onOpenLightbox: (idx: number) => void;
}

/**
 * Carrusel de imágenes de un proyecto con navegación por flechas y dots.
 * Al hacer clic en la imagen se abre el lightbox.
 */
const ProjectGallery: React.FC<Props> = ({
  images, currentIdx, accentColor, title,
  onPrev, onNext, onDotClick, onOpenLightbox,
}) => (
  <div className="relative flex items-center gap-4">
    {images.length > 1 && (
      <button
        onClick={onPrev}
        className="text-white p-3 rounded-lg transition-all shadow-lg flex-shrink-0 hover:scale-110"
        style={{ backgroundColor: accentColor }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    )}

    <div className="flex-1 relative">
      {/* Borde de acento */}
      <div
        className="absolute -inset-px rounded-xl opacity-30 pointer-events-none z-10"
        style={{ boxShadow: `0 0 0 1px ${accentColor}` }}
      />

      <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/40 shadow-2xl">
        <div className="relative w-full h-full group/img">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={idx === currentIdx ? `${title} - ${idx + 1}` : ''}
              aria-hidden={idx !== currentIdx}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                idx === currentIdx ? 'opacity-100 cursor-zoom-in' : 'opacity-0 pointer-events-none'
              }`}
              onClick={idx === currentIdx ? () => onOpenLightbox(idx) : undefined}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/20 cursor-zoom-in pointer-events-none">
            <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
        </div>

        {images.length > 1 && (
          <>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => onDotClick(dotIdx)}
                  className={`h-2 rounded-full transition-all hover:bg-white ${dotIdx === currentIdx ? 'w-8' : 'w-2 bg-white/40'}`}
                  style={dotIdx === currentIdx ? { backgroundColor: accentColor } : {}}
                  aria-label={`Ir a imagen ${dotIdx + 1}`}
                />
              ))}
            </div>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-white">
              {currentIdx + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>

    {images.length > 1 && (
      <button
        onClick={onNext}
        className="text-white p-3 rounded-lg transition-all shadow-lg flex-shrink-0 hover:scale-110"
        style={{ backgroundColor: accentColor }}
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    )}
  </div>
);

export default ProjectGallery;
