# Aqua Pro V2 · Validación

Fecha: 2026-09-21, America/Guayaquil. Autorización: actualizar demo con mejoras de la revisión comparativa y publicar en GitHub Pages.

## Alcance implementado

- Portada con selector por problema y propiedad, recomendación editable sin diagnóstico.
- Contexto de servicio/propiedad heredado por los CTA de cabecera, contenido, cierre, cotización y móvil. La selección de portada también se propaga a sus CTA.
- Intención de cotización diferenciada, editable y visible en revisión.
- Cambio de idioma en contacto sin perder estado: detalles, contacto, revisión y confirmación; historial atrás/adelante conserva el idioma y borrador en memoria.
- Contacto obligatorio solo por el canal elegido; el otro canal es opcional y se valida si se completa.
- Servicios con fotos ilustrativas, filtros, preparación específica, relaciones pertinentes y navegación activa.
- Imágenes optimizadas a WebP. Cuatro escenas generadas son ilustrativas, no equipo ni trabajos de la empresa. Fuentes/prompts en ASSETS.md.
- Preparación de contenido comercial verificado en config.ts; no se muestran bloques vacíos, cifras, reseñas ni personas inventadas como pruebas comerciales.

## Evidencia local

Entorno: macOS, Node 26.8.1, Next.js 15.5.25, Google Chrome headless mediante Playwright. Export estático servido bajo /plumbing en 127.0.0.1:4173.

- Aprobado: `NEXT_PUBLIC_BASE_PATH=/plumbing npm run build`, 34 páginas generadas, compilación y tipos correctos.
- Aprobado: `node scripts/check-v2.mjs`, regresiones de idioma, historial, filtros, selección, cotización, correo solo/teléfono solo y confirmación.
- Aprobado: `node scripts/check.mjs`, enlaces localizados HTTP 200, navegación móvil, validaciones, resumen editable y flujos EN/ES.
- Aprobado: comprobación de ancho 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal en páginas verificadas.
- Aprobado: ausencia de POST en solicitudes de demo, almacenamiento únicamente de idioma en localStorage, sessionStorage vacío, sin errores de navegador.
- Aprobado: revisión visual de capturas de portada, selector móvil, detalle con cámara y filtro de calentadores/bombas. Imágenes descargadas/decodificadas antes de inspeccionar capturas completas; la carga diferida inicialmente produjo un falso positivo del test anterior, corregido en el procedimiento de prueba.

## Límites y release

- Publicación: pendiente hasta comprobar la ejecución de GitHub Actions y el sitio público.
- Dispositivos físicos: no probados; tamaños emulados en Chrome.
- Producción, envío real, analítica y mejora porcentual de conversión: no aplica a la demo.
- Datos pendientes del cliente: contacto, cobertura, horarios, equipo, reseñas, credenciales, precios y condiciones cuando se deseen publicar.
- Recuperación: redesplegar el commit anterior 425d2dc (documentación) / 92bfccd (implementación previa).
