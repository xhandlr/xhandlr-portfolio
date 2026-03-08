# xhandlr — Mi Portafolio Personal

Portafolio personal construido con React + TypeScript + Vite. Muestra proyectos, experiencia laboral y un formulario de contacto funcional.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Estilos | Tailwind CSS |
| Iconos | Lucide React · Simple Icons · Devicons |
| Contacto | Web3Forms |
| Deploy | Cloudflare Pages |

## Estructura

```
src/
├── components/
│   ├── projects/
│   │   ├── ProjectGallery.tsx   # Carrusel de imágenes
│   │   └── ProjectLightbox.tsx  # Visor fullscreen (portal)
│   ├── About.tsx
│   ├── ContactForm.tsx          # Formulario Web3Forms
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Timeline.tsx
├── data/
│   └── tagIcons.ts              # Mapa centralizado de iconos de tecnologías
├── constants.tsx                # Datos: proyectos, timeline, skills
└── types.ts                     # Interfaces TypeScript
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz:

```env
VITE_WEB3FORMS_KEY=tu_access_key_aqui
```

Obtén tu key gratis en [web3forms.com](https://web3forms.com).

## Deploy

Configurado para Cloudflare Pages.

---
