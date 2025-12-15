# 🌙 Restaurante Lune - Next.js 14

Sitio web minimalista y elegante para el restaurante francés **Lune**, construido con Next.js 14 (App Router), Tailwind CSS v3, GSAP y Lenis.

## ✨ Características

- **Next.js 14** con App Router
- **Server & Client Components** (composición inteligente)
- **Tailwind CSS v3** (tema personalizado)
- **GSAP + Lenis** para animaciones fluidas y smooth scrolling
- **SSG + ISR** para máximo rendimiento
- **SEO optimizado** (metadata, OpenGraph, JSON-LD)
- **Responsive** mobile-first
- **TypeScript** para type safety
- **Formulario de reservas** (UI mock sin backend)

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18+
- pnpm (instalado globalmente)

### Instalación

```bash
# Clonar el repositorio (si aplica)
cd lune-restaurant

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linter ESLint
pnpm format       # Formatear código con Prettier
```

## 📁 Estructura del Proyecto

```
lune-restaurant/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx                # Root layout (metadata, providers)
│   ├── page.tsx                  # HomePage (SSG)
│   ├── menu/page.tsx             # MenuPage (ISR 1h)
│   ├── historia/page.tsx         # HistoriaPage (SSG)
│   ├── vinos/page.tsx            # VinosPage (ISR 1h)
│   ├── reservas/page.tsx         # ReservasPage (SSG + Client form)
│   ├── politica-privacidad/      # Página legal
│   └── terminos-condiciones/     # Página legal
├── components/                   # Componentes React
│   ├── layout/                   # Navbar, Footer
│   ├── ui/                       # Modal, Button, Card
│   ├── animations/               # SmoothScroll, RevealText
│   ├── sections/                 # Hero, Philosophy, Stats, etc.
│   └── forms/                    # ReservaForm
├── lib/                          # Utilidades y constantes
│   ├── animations/               # Configuración GSAP
│   ├── constants/                # Datos (menu, vinos)
│   └── utils/                    # Helpers (cn)
├── hooks/                        # Custom hooks
│   ├── useScrollAnimation.ts
│   └── useMediaQuery.ts
└── public/images/                # Imágenes (estructura creada)
    ├── home/
    ├── menu/
    ├── historia/
    ├── vinos/
    ├── reservas/
    └── common/
```

## 🖼️ Agregar Imágenes

El proyecto tiene **placeholders** donde irán las imágenes. Agrega tus imágenes siguiendo esta estructura:

### Imágenes necesarias:

**Home (/):**
- `/public/images/home/hero.jpg` (1920x1080) - Hero principal
- `/public/images/home/philosophy.jpg` (800x1000) - Sección filosofía

**Menú (/menu):**
- `/public/images/menu/hero.jpg` (1920x1080) - Hero de menú
- `/public/images/menu/chef-plating.jpg` (1600x900) - Chef emplatando
- `/public/images/menu/entrees-1.jpg` a `entrees-4.jpg` (800x600) - Platos
- `/public/images/menu/plats-1.jpg` a `plats-4.jpg` (800x600) - Platos principales
- `/public/images/menu/desserts-1.jpg` a `desserts-3.jpg` (800x600) - Postres

**Historia (/historia):**
- `/public/images/historia/hero.jpg` (1920x1080) - Hero historia
- `/public/images/historia/vintage.jpg` (800x1000) - Foto vintage restaurante
- `/public/images/historia/chef.jpg` (1000x1000) - Retrato chef

**Vinos (/vinos):**
- `/public/images/vinos/hero.jpg` (1920x1080) - Hero vinos
- `/public/images/vinos/sommelier.jpg` (800x600) - Sommelier

**Reservas (/reservas):**
- `/public/images/reservas/hero.jpg` (1920x1080) - Mesa elegante

**Común:**
- `/public/images/common/logo.svg` - Logo (opcional)
- `/public/images/common/favicon.ico` - Favicon
- `/public/images/common/og-image.jpg` (1200x630) - OpenGraph
- `/public/images/common/apple-touch-icon.png` (180x180)

> **Nota:** Los componentes muestran placeholders con las rutas esperadas. Una vez agregues las imágenes, se cargarán automáticamente.

## 🎨 Paleta de Colores

```css
--color-cream: #F9F8F4  /* Fondo principal */
--color-black: #1A1A1A  /* Texto principal */
--color-gold: #D4AF37   /* Acentos */
```

## 📊 Estrategia de Rendering

| Página | Tipo | Revalidación |
|--------|------|--------------|
| `/` | SSG | - |
| `/menu` | ISR | 1 hora |
| `/historia` | SSG | - |
| `/vinos` | ISR | 1 hora |
| `/reservas` | SSG + Client | - |
| `/politica-privacidad` | SSG | - |
| `/terminos-condiciones` | SSG | - |

- **SSG**: Generación estática en build time
- **ISR**: Regeneración incremental (ideal para menú/vinos que pueden cambiar)

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.15
- **React:** 19.2.0
- **Styling:** Tailwind CSS 3.4.18
- **Animations:** GSAP 3.13.0 + Lenis 1.3.15
- **Icons:** Lucide React 0.555.0
- **TypeScript:** 5.9.3
- **Package Manager:** pnpm 10.19.0

## 📝 Notas Importantes

1. **Formulario de Reservas:** Es un mock UI. No envía datos a ningún backend. Para implementar funcionalidad real, necesitarás crear API Routes en `/app/api/reservas/route.ts`.

2. **Animaciones:** GSAP y Lenis están configurados para funcionar solo en el cliente. Los componentes que los usan tienen `'use client'`.

3. **Smooth Scrolling:** Lenis está integrado en el Root Layout y sincronizado con GSAP ScrollTrigger.

4. **SEO:** Cada página tiene metadata específica + JSON-LD structured data para Google.

## 🚢 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

### Otros servicios

El proyecto es compatible con cualquier servicio que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- etc.

## 📄 Licencia

Este proyecto fue creado para **Restaurante Lune**. Todos los derechos reservados.

---

Desarrollado con ❤️ usando Next.js 14 y Claude Code
