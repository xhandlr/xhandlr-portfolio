
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fullText = 'Camille Elgueta';
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setInterval(() => setShowCursor(prev => !prev), 530);
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          
          {/* Texto principal con efecto typewriter */}
          <div className="mb-16">
            <h1 className="text-8xl font-bold leading-tight tracking-tight text-white">
              {displayText}
              {showCursor && <span className="text-red-500 ml-1">|</span>}
            </h1>
            <p className="text-red-500 text-3xl mt-6 font-bold tracking-wide">
              Desarrolladora Full Stack
            </p>
            <p className="text-gray-300 text-lg mt-2 font-mono">
              Construyo productos digitales que resuelven problemas reales.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a href={SOCIAL_LINKS.github} target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm font-mono tracking-wider">GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-mono tracking-wider">LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.email} className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-mono tracking-wider">Email</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#projects" className="group relative px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded overflow-hidden transition-all transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center">
                EXPLORAR PROYECTOS
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#contact" className="px-10 py-5 bg-white/5 border border-white/10 hover:border-red-500/50 text-white font-bold rounded transition-all hover:bg-white/10">
              CONTACTARME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
