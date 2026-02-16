import BugImage from '../assets/bug.png';
import SoftwareImage from '../assets/software.png';
import HeartImage from '../assets/heart.png';

/**
 * About Component
 * 
 * Muestra información personal, intereses y estadísticas clave.
 * Cuenta con una imagen de perfil con efectos hover y elementos de fondo animados.
 * 
 * @returns La sección "About" del portafolio
 */
const About = () => {
  const interests = [
    { image: BugImage, title: "Análisis de Malware", desc: "Certificada en Curso de Practical Malware Analysis & Triage (TCM Security)." },
    { image: HeartImage, title: "Diseño UX/UI", desc: "Creo interfaces pensando en usuarios reales." },
    { image: SoftwareImage, title: "Desarrollo de Software", desc: "Construyo aplicaciones escalables con arquitecturas limpias." },
  ];

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

          {/* Cards de intereses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-[#050505] border-2 border-white/10 hover:border-red-500 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20">

                {/* Contenido */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-16 h-16 mb-6 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-3 text-white transition-colors duration-300 group-hover:text-red-500">{item.title}</h4>
                  <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
