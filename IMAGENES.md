# 📸 Guía de Imágenes - Restaurante Lune

## Estructura de Carpetas Creada

```
public/images/
├── home/         ← Página principal
├── menu/         ← Página de menú
├── historia/     ← Página de historia
├── vinos/        ← Página de vinos
├── reservas/     ← Página de reservas
└── common/       ← Logo, favicon, og-image
```

## Imágenes por Página

### 🏠 Página Principal (/)

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Hero | `/public/images/home/hero.jpg` | 1920x1080 | Interior minimalista oscuro, ambiente elegante |
| Philosophy | `/public/images/home/philosophy.jpg` | 800x1000 | Plato gourmet en detalle, desde ángulo cenital |

### 🍽️ Página Menú (/menu)

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Hero | `/public/images/menu/hero.jpg` | 1920x1080 | Cocina detalle, preparación |
| Chef Plating | `/public/images/menu/chef-plating.jpg` | 1600x900 | Chef emplatando con precisión |
| Entrées 1-4 | `/public/images/menu/entrees-[1-4].jpg` | 800x600 | Fotos de entrantes franceses |
| Plats 1-4 | `/public/images/menu/plats-[1-4].jpg` | 800x600 | Fotos de platos principales |
| Desserts 1-3 | `/public/images/menu/desserts-[1-3].jpg` | 800x600 | Fotos de postres |

**Nota:** Las imágenes de platos aparecerán en hover en desktop (ya está programado, solo falta agregar las imágenes).

### 📖 Página Historia (/historia)

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Hero | `/public/images/historia/hero.jpg` | 1920x1080 | París antiguo, restaurante vintage |
| Vintage | `/public/images/historia/vintage.jpg` | 800x1000 | Interior histórico del restaurante |
| Chef | `/public/images/historia/chef.jpg` | 1000x1000 | Retrato profesional de Lune Dessendre |

### 🍷 Página Vinos (/vinos)

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Hero | `/public/images/vinos/hero.jpg` | 1920x1080 | Bodega oscura con botellas de vino |
| Sommelier | `/public/images/vinos/sommelier.jpg` | 800x600 | Sommelier sirviendo vino |

### 🪑 Página Reservas (/reservas)

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Hero | `/public/images/reservas/hero.jpg` | 1920x1080 | Mesa elegante preparada, comedor |

### 🎨 Imágenes Comunes

| Imagen | Ruta | Dimensiones | Descripción |
|--------|------|-------------|-------------|
| Logo | `/public/images/common/logo.svg` | SVG | Logo "LUNE" (opcional) |
| Favicon | `/public/favicon.ico` | 32x32 | Icono del sitio |
| OG Image | `/public/og-image.jpg` | 1200x630 | Para compartir en redes sociales |
| Apple Touch Icon | `/public/apple-touch-icon.png` | 180x180 | Icono para iOS |

## 🎨 Estilo Fotográfico Recomendado

Para mantener la coherencia visual del sitio:

### Características:
- ✅ **Minimalista y elegante**
- ✅ **Paleta de colores neutros** (cremas, negros, dorados)
- ✅ **Iluminación suave y natural**
- ✅ **Alta resolución** (calidad profesional)
- ✅ **Enfoque en detalles**

### Evitar:
- ❌ Fondos muy coloridos o saturados
- ❌ Iluminación dura o artificial
- ❌ Composiciones caóticas
- ❌ Baja resolución

## 📐 Dimensiones y Formatos

### Formatos aceptados:
- **JPG** (preferido para fotos)
- **PNG** (para gráficos con transparencia)
- **SVG** (para logos)
- **WEBP** (Next.js convierte automáticamente)

### Peso recomendado:
- Hero images (grandes): **< 500KB**
- Imágenes medianas: **< 300KB**
- Thumbnails: **< 150KB**

> **Tip:** Next.js optimiza automáticamente las imágenes, pero es mejor empezar con archivos razonablemente comprimidos.

## 🚀 Cómo Agregar las Imágenes

1. **Descarga o prepara tus imágenes**
2. **Renómbralas** según las rutas indicadas
3. **Colócalas** en las carpetas correspondientes:
   ```bash
   public/
   └── images/
       ├── home/hero.jpg
       ├── menu/hero.jpg
       └── ...
   ```
4. **¡Listo!** El sitio detectará automáticamente las imágenes

## 📝 Placeholders Actuales

Mientras no agregues las imágenes, el sitio muestra:
- **Fondos grises** con texto indicando la ruta esperada
- **Dimensiones recomendadas**
- **Sugerencias** de contenido

Esto te permite:
- ✅ Ver el sitio funcionando completamente
- ✅ Identificar qué imágenes faltan
- ✅ Conocer las especificaciones exactas

## ⚡ Optimización Automática

Next.js optimiza automáticamente todas las imágenes:
- ✅ Conversión a **WebP** y **AVIF**
- ✅ Responsive (múltiples tamaños)
- ✅ Lazy loading (carga diferida)
- ✅ Blur placeholder (opcional)

## 🔍 Dónde Conseguir Imágenes

### Opción 1: Fotografía Profesional
Contrata un fotógrafo profesional para:
- Sesión de fotos del restaurante
- Fotos de platos (food styling)
- Retratos del chef y equipo

### Opción 2: Stock Photos (Temporal)
Mientras consigues fotos propias:
- [Unsplash](https://unsplash.com) - Gratuito
- [Pexels](https://pexels.com) - Gratuito
- [Adobe Stock](https://stock.adobe.com) - Premium

**Búsquedas recomendadas:**
- "fine dining restaurant"
- "french cuisine"
- "gourmet food plating"
- "wine cellar"
- "minimalist restaurant interior"

---

¿Necesitas ayuda para seleccionar o editar imágenes? ¡Pregunta!
