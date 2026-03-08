
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

interface Props {
  images: string[];
  initialIdx: number;
  title: string;
  onClose: () => void;
}

/**
 * Visor de imagen a pantalla completa (portal sobre document.body).
 * Navega con flechas de teclado y cierra con Escape.
 */
const ProjectLightbox: React.FC<Props> = ({ images, initialIdx, title, onClose }) => {
  const [idx, setIdx] = useState(initialIdx);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images.length, onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/92 backdrop-blur-sm cursor-default"
      onClick={onClose}
    >
      {/* Barra superior */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-black"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <span className="text-white/80 text-sm font-medium">
          {title} — {idx + 1} / {images.length}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={images[idx]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Abrir original</span>
          </a>
          <button
            onClick={onClose}
            className="text-white bg-black/70 hover:bg-black/90 border border-white/30 hover:border-white/60 rounded-full p-2.5 transition-all"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Imagen */}
      <img
        src={images[idx]}
        alt={`${title} - ${idx + 1}`}
        className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      />

      {/* Flechas */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-5 flex gap-2" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};

export default ProjectLightbox;
