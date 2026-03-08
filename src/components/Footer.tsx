
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import ContactForm from './ContactForm';

const GitHubIcon = () => <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="w-6 h-6" />;
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/** Footer con sección de contacto y links sociales. */
const Footer: React.FC = () => (
  <footer id="contact" className="pt-24 pb-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
        {/* Texto izquierdo */}
        <div>
          <h2 className="text-sm text-red-500 uppercase tracking-[0.3em] mb-4">Contáctame</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 leading-snug">
            ¿Encontraste algo<br />
            interesante?{' '}
            <span className="text-red-500">Hablemos.</span>
          </h3>
          <p className="text-gray-300 text-lg mb-10 max-w-md">
            Estoy disponible para discutir nuevos proyectos o ideas creativas.
          </p>

          <div className="flex items-center space-x-6 mt-12">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white border border-white/5 hover:border-blue-500/50">
              <GitHubIcon />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white border border-white/5 hover:border-red-500/50">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 shadow-2xl">
          <ContactForm />
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-mono">
        <div className="flex items-center space-x-2">
          <span>&copy; {new Date().getFullYear()} xhandlr</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span>Camille Elgueta</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center gap-2 hover:text-red-500 transition-colors uppercase tracking-widest group">
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
