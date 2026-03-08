import TcmLogo from '../assets/tcm-logo.png';
import { ExternalLink } from 'lucide-react';

/**
 * Componente de la sección "Sobre Mi" que incluye un diseño diagonal con doble
 * línea (gris y roja) y una card destacada de certificación.
 */
const About = () => {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">

      {/* Diagonal con doble línea (gris y roja) */}
      <div className="relative h-32">
        {/* Fondo negro arriba */}
        <div className="absolute inset-0 bg-black"
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 70%)' }}>
        </div>

        {/* Fondo blanco abajo - ahora azul oscuro */}
        <div className="absolute inset-0 bg-[#0a0f1e]"
             style={{ clipPath: 'polygon(0 69%, 100% 30%, 100% 100%, 0 100%)' }}>
        </div>

        {/* Línea diagonal gris */}
        <div className="absolute inset-0"
             style={{ clipPath: 'polygon(0 33%, 100% 0, 100% 20%, 0 51%)' }}>
          <div className="w-full h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
        </div>

        {/* Línea diagonal roja */}
        <div className="absolute inset-0"
             style={{ clipPath: 'polygon(0 51%, 100% 19%, 100% 40%, 0 70%)' }}>
          <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
        </div>
      </div>

      {/* Parte de contenido - Fondo Azul Oscuro */}
      <div className="relative bg-[#0a0f1e] py-24">
        <div className="container mx-auto px-6">
          {/* Texto introductorio */}
          <div className="mb-16">
            <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.3em] mb-4">Sobre Mi</h2>
            <h3 className="text-4xl font-black mb-8 leading-tight text-white">Me interesa la construcción de productos digitales</h3>

            <p className="text-gray-400 leading-relaxed mb-2 text-lg max-w-3xl">
              Hola, soy Camille Elgueta, estudiante de 5° año de Ingeniería Civil Informática en UFRO.
              Me especializo en construir productos digitales completos:
              desde investigación de usuarios hasta implementación técnica.

              Cuando no estoy programando, exploro análisis de malware,
              diseño interfaces en Figma, o ayudo a estudiantes a entender
              matemáticas complejas como tutora académica.
            </p>
          </div>

          {/* Card de certificación */}
          <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 rounded-xl bg-[#050505] border-2 border-white/10 hover:border-red-500 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 max-w-2xl">
            {/* Logo TCM */}
            <div className="flex-shrink-0">
              <img
                src={TcmLogo}
                alt="TCM Security"
                className="w-24 h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-bold text-xl text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                Practical Malware Analysis & Triage
              </h4>
              <p className="text-gray-300 text-sm font-medium mb-3">TCM Security</p>
              <div className="flex flex-col gap-1 mb-5">
                <p className="text-gray-500 text-xs font-mono">Expedición: sept. 2025</p>
                <p className="text-gray-500 text-xs font-mono">ID de la credencial: cert_gtbgnrrh</p>
              </div>
              <a
                href="/credentials/pmat-triage-cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-lg text-white text-sm font-medium transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mostrar credencial</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
