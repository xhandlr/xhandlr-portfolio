
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación.
 * @returns JSX.Element
 */
const App: React.FC = () => {
  useEffect(() => {
    // Observador de intersección para animaciones de revelado
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-red-500/30">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><About /></div>
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
