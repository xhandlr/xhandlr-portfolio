
import React from 'react';
import { Github, Linkedin, Mail, Send, Heart, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-sm text-red-500 uppercase tracking-[0.3em] mb-4">Contáctame</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter italic">
              Puedo ayudarte a construir <br />
              <span className="text-red-500">algo nuevo.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Estoy siempre disponible para discutir nuevos proyectos o ideas creativas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Temuco, Chile</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg text-red-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">.</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 mt-12">
              <a href={SOCIAL_LINKS.github} target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white border border-white/5 hover:border-blue-500/50">
                <Github className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white border border-white/5 hover:border-red-500/50">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Nombre</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Correo Electrónico</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Mensaje</label>
                <textarea rows={4} placeholder="Hola, me gustaría hablar sobre..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500/50 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]">
                <Send className="w-4 h-4" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-mono">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} xhandlr</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="flex items-center">
              Camille Elgueta
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-red-500 transition-colors uppercase tracking-widest">Volver arriba</a>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="uppercase tracking-widest text-[10px]">Activo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
