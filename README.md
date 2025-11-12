# Node Solutions - Web Corporativa

## 📋 Descripción del Proyecto

Web corporativa moderna para **Node Solutions**, una empresa especializada en implementación de soluciones de Inteligencia Artificial para empresas. El proyecto está desarrollado con Next.js 16 y React 19, utilizando TypeScript y Tailwind CSS para crear una experiencia visual atractiva y completamente responsive.

## 🚀 Tecnologías Utilizadas

### Core
- **Next.js 16.0.1** - Framework de React con App Router
- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3.4.18** - Framework CSS utility-first

### Herramientas de Desarrollo
- **ESLint 9** - Linter de código
- **PostCSS 8.5.6** - Procesador CSS
- **Autoprefixer 10.4.22** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
node-solutions-web/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Estilos globales y animaciones personalizadas
│   ├── layout.tsx           # Layout raíz de la aplicación
│   └── page.tsx             # Página principal
├── components/
│   ├── AnimatedBackground.tsx  # Canvas animado con partículas y grid
│   ├── Contact.tsx            # Formulario de contacto
│   ├── Footer.tsx             # Pie de página
│   ├── Hero.tsx               # Sección hero principal
│   ├── Navbar.tsx             # Barra de navegación responsive
│   ├── ScrollReveal.tsx       # HOC para animaciones al scroll
│   └── Services.tsx           # Grid de servicios
├── public/
│   ├── isotipo.png           # Logo isotipo para navbar
│   ├── logo.png              # Logo completo con nombre
│   └── ...                   # Otros assets
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json              # Configuración de despliegue en Vercel
```

## 🎨 Componentes Principales

### 1. AnimatedBackground
**Ubicación**: `components/AnimatedBackground.tsx`

Componente que renderiza un canvas animado de fondo con:
- Grid de puntos interactivo que reacciona al movimiento del mouse
- Partículas flotantes con efecto glow
- Conexiones dinámicas entre puntos cercanos
- Optimizado para no causar overflow horizontal

**Características técnicas**:
- Usa `useRef` para acceder al canvas
- `useEffect` para manejar la animación y eventos
- `requestAnimationFrame` para animaciones fluidas
- Física simple para movimiento de partículas

### 2. Navbar
**Ubicación**: `components/Navbar.tsx`

Barra de navegación fija con:
- Diseño responsive con menú hamburguesa en móvil
- Cambio de estilo al hacer scroll (backdrop blur y border)
- Logo adaptativo según tamaño de pantalla
- z-index: 50 para estar siempre visible
- Transiciones suaves entre estados

**Breakpoints**:
- Móvil: Menú hamburguesa desplegable
- Desktop (md+): Menú horizontal con enlaces y botón CTA

### 3. Hero
**Ubicación**: `components/Hero.tsx`

Sección principal con:
- Logo completo visible en móvil, oculto en desktop
- Logo decorativo con efecto glow solo en desktop
- Título principal con texto destacado en color brand
- Descripción de servicios
- 2 botones CTA (Consulta y Servicios)
- Estadísticas (100+ Proyectos, 50+ Clientes, 98% Satisfacción)
- Indicador de scroll animado

**Responsive**:
- Móvil: Layout vertical, centrado, logo encima del texto
- Desktop: Grid de 2 columnas con logo decorativo a la derecha

### 4. Services
**Ubicación**: `components/Services.tsx`

Grid de servicios con:
- 6 tarjetas de servicios con iconos SVG personalizados
- Efectos hover con transformación, shadow y glow
- Lista de características por servicio
- Botón CTA al final

**Servicios mostrados**:
1. Agentes de IA
2. Automatización Inteligente
3. Integración de Sistemas
4. Agentes de Voz
5. RAG & Conocimiento
6. Soluciones a Medida

**Responsive**:
- Móvil: 1 columna
- Tablet (sm): 2 columnas
- Desktop (lg): 3 columnas

### 5. Contact
**Ubicación**: `components/Contact.tsx`

Sección de contacto con:
- Grid de 2 columnas (información + formulario)
- 3 tarjetas informativas (Email, Horario, Respuesta rápida)
- Formulario funcional con validación
- Estados de carga y éxito
- Efecto glow en el formulario

**Campos del formulario**:
- Nombre completo *
- Email corporativo *
- Empresa
- Teléfono
- Mensaje *

**Responsive**:
- Móvil: Layout vertical (información arriba, formulario abajo)
- Desktop (lg): Layout horizontal (2 columnas)

### 6. Footer
**Ubicación**: `components/Footer.tsx`

Pie de página con:
- Grid de información corporativa
- Enlaces rápidos de navegación
- Información de contacto
- Copyright dinámico con año actual
- Enlaces a políticas

**Responsive**:
- Móvil: Layout vertical
- Tablet (sm): 2 columnas
- Desktop (lg): 4 columnas

### 7. ScrollReveal
**Ubicación**: `components/ScrollReveal.tsx`

HOC (Higher Order Component) para animaciones al scroll:
- Usa Intersection Observer API
- 4 direcciones: left, right, up, fade
- Delay configurable
- Se activa cuando el elemento es visible en viewport
- Animaciones CSS optimizadas

## 🎭 Animaciones y Efectos

### Animaciones CSS Personalizadas
Definidas en `app/globals.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
```

### Clases de Reveal
- `.reveal` - Estado inicial (opacity: 0)
- `.reveal-left` - Entra desde la izquierda
- `.reveal-right` - Entra desde la derecha
- `.reveal-up` - Entra desde abajo
- `.reveal-fade` - Fade con escala
- `.reveal-active` - Estado final visible

## 🎨 Diseño y Paleta de Colores

### Colores Brand
Definidos en `globals.css`:
```css
:root {
  --node-blue: #0099cc;      /* Azul principal */
  --chip-blue: #206880;      /* Azul secundario */
  --light-violet: #c1d9ff;   /* Violeta claro */
}
```

### Estilo Visual
- **Fondo**: Negro profundo (#0a0a0a)
- **Glassmorphism**: Efectos de backdrop-blur en tarjetas
- **Glow effects**: Sombras con color brand
- **Gradientes**: De transparente a color con opacidad
- **Border**: Bordes sutiles con opacidad baja

## 📱 Responsive Design

### Breakpoints de Tailwind
- **sm**: 640px (Tablet pequeña)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Desktop grande)

### Estrategia Mobile-First
1. Diseño base para móvil (< 640px)
2. Ajustes progresivos con prefijos sm:, md:, lg:, xl:
3. Componentes que se ocultan/muestran según tamaño
4. Tipografía escalable
5. Espaciado adaptativo

### Características Responsive
- ✅ Menú hamburguesa funcional en móvil
- ✅ Grid adaptativo en Services (1→2→3 columnas)
- ✅ Layout vertical en móvil para Contact
- ✅ Logo móvil visible solo en pantallas pequeñas
- ✅ Tipografía escalable (text-3xl → text-7xl)
- ✅ Padding y margin adaptativos
- ✅ Botones full-width en móvil

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js 20+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/andresredondo1093/web-node.git

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:3000
```

### Producción
```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

### Linter
```bash
# Ejecutar ESLint
npm run lint
```

## 🌐 Despliegue en Vercel

El proyecto incluye `vercel.json` con la configuración óptima:

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Pasos para desplegar:
1. Hacer commit de todos los archivos
2. Push al repositorio de GitHub
3. Conectar el repo en Vercel
4. Vercel detectará automáticamente Next.js
5. Deploy automático en cada push a main

## 🔧 Optimizaciones Implementadas

### Performance
- ✅ Componentes de Next.js Image optimizados
- ✅ Lazy loading automático de imágenes
- ✅ CSS-in-JS evitado (usando Tailwind)
- ✅ Componentes 'use client' solo donde es necesario
- ✅ IntersectionObserver para animaciones eficientes

### UX
- ✅ Scroll suave (scroll-behavior: smooth)
- ✅ Scrollbar personalizado
- ✅ Estados de hover en todos los elementos interactivos
- ✅ Feedback visual en formularios
- ✅ Animaciones no invasivas
- ✅ Tiempos de transición optimizados (300ms)

### SEO
- ✅ Metadata en layout.tsx
- ✅ Alt text en todas las imágenes
- ✅ Estructura semántica HTML
- ✅ Navegación con enlaces anchor (#)

### Accesibilidad
- ✅ aria-label en botones sin texto
- ✅ Labels asociados a inputs
- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado funcional

## 🐛 Problemas Resueltos

### 1. Overflow Horizontal
**Problema**: Div negro a la derecha causando scroll horizontal
**Solución**: 
- `overflow-x: hidden` en html, body y main
- `max-w-full` en imágenes
- `maxWidth: '100vw'` en canvas

### 2. Botón Hamburguesa No Visible
**Problema**: z-index conflicto con otros componentes
**Solución**: 
- Reorganizar estructura de z-index
- Navbar fuera del contenedor con z-10
- Botón con z-50 relativo

### 3. Logo Móvil
**Problema**: Logo no visible en versión móvil
**Solución**: 
- Logo adicional con `lg:hidden` en Hero
- Logo con efecto glow centrado
- Posicionado encima del texto

## 📊 Estructura de z-index

```
z-0   : AnimatedBackground (canvas)
z-10  : Contenido general (Hero, Services, Contact, Footer)
z-50  : Navbar (fijo)
z-50  : Botón hamburguesa (relativo dentro de Navbar)
```

## 🎯 Características Destacadas

1. **Fondo Animado Interactivo**: Canvas con física de partículas
2. **Menú Responsive Completo**: Con transiciones suaves
3. **Animaciones al Scroll**: Entrada progresiva de secciones
4. **Diseño Glassmorphism**: Efectos modernos de cristal
5. **Formulario Funcional**: Con validación y feedback
6. **100% Responsive**: Optimizado para todos los dispositivos
7. **Performance Optimizada**: Carga rápida y fluida
8. **TypeScript**: Código tipado y mantenible

## 📝 Notas Técnicas

- **App Router**: Usando la nueva estructura de Next.js 13+
- **Client Components**: Marcados con 'use client' donde se usa estado o efectos
- **CSS Variables**: Para colores brand reutilizables
- **Tailwind Extend**: Colores personalizados en tailwind.config.ts
- **Image Optimization**: Next.js Image component con priority en hero

## 👨‍💻 Mantenimiento

### Añadir un nuevo servicio:
1. Editar `components/Services.tsx`
2. Crear el ícono SVG correspondiente
3. Añadir al array `services` con título, descripción y features

### Cambiar colores brand:
1. Editar variables CSS en `app/globals.css`
2. Actualizar `tailwind.config.ts` si se usan en clases

### Añadir nueva sección:
1. Crear componente en `components/`
2. Importar en `app/page.tsx`
3. Envolver con `<ScrollReveal>` si necesita animación

## 📄 Licencia

© 2025 Node Solutions. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
