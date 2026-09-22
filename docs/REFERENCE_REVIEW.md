# Revisión comparativa: Aqua Pro y Michael & Son

Fecha: 2026-09-21 (sesión local, America/Guayaquil). Alcance: auditoría de diseño, contenido y recorrido de solicitud. No se cambia ni despliega la implementación.

Fuentes:
- https://michaelandson.com/alexandria/plumbing
- https://gudrum.github.io/plumbing/en/
- Implementación local: src/components/Site.tsx y src/components/RequestForm.tsx.
- Capturas propias: docs/review-reference/. Chrome con vistas 1440×1000 y 390×844. No equivale a una prueba en dispositivos físicos.

## Dictamen

Es viable mejorar sustancialmente la experiencia y diferenciación de Aqua Pro. No existe evidencia para prometer 300 % de conversión o superioridad comercial: no se dispone de analítica ni investigación con usuarios. El competidor tiene información operativa publicada que Aqua Pro todavía no ha proporcionado. Sus afirmaciones se observaron en su web; no se verificó externamente su cumplimiento.

La referencia comunica localidad, teléfono, reserva, garantía declarada, disponibilidad declarada, precios orientativos y tiempos en determinados servicios. Separa categorías y utiliza acordeones y enlaces específicos. El enfoque es útil para decidir, aunque la cabecera con muchos niveles, la promoción de climatización dentro de plomería, los cupones repetidos y el aviso de privacidad visible añaden competencia por la atención. En la captura móvil el aviso ocupa aproximadamente el cuarto inferior de la pantalla. No se probó una reserva real.

Aqua Pro presenta una jerarquía visual más tranquila y una navegación enfocada en plomería, con idiomas visibles y formulario explicativo. Sin embargo, repite una única fotografía de cocina, emplea ilustraciones de iconos en los servicios y comunica un enfoque genérico sin pruebas específicas de la empresa. La selección por problema aparece tarde en el inicio.

## Hallazgos reproducidos

1. **Severidad 3 — pérdida de formulario al cambiar idioma.** Abrir /en/contact/?service=drain-cleaning&property=residential; avanzar a detalles; escribir descripción y ciudad; cambiar a español. Vuelve a Servicio; al avanzar, descripción vacía. La memoria de React se pierde al navegar a otro documento. Mantener borrador en memoria compartida durante cambio de idioma, sin localStorage, URLs ni analítica con datos personales.
2. **Severidad 2 — contexto de servicio inconsistente.** En /en/services/drain-cleaning/ el CTA del hero y barra móvil llevan service=drain-cleaning; cabecera, cierre y cotización del footer llevan /en/contact/ sin selección. Todos los CTA de la página deben heredar el contexto.
3. **Severidad 2 — datos obligatorios redundantes respecto al canal elegido.** El formulario exige correo y teléfono aunque pide elegir un método preferido. Propuesta de cambio respecto al brief original: exigir únicamente el canal elegido y ofrecer el otro como opcional.
4. **Severidad 2 — servicio y cotización confluyen sin intención diferenciada.** Request a Quote abre el mismo recorrido sin conservar que se solicita cotización. Modelar intención y mostrarla en el resumen.
5. **Severidad 1 — orientación en detalle.** El menú Services no queda activo cuando page=service. Añadir estado activo y breadcrumbs completos.

## Evaluación heurística provisional

Aqua Pro: **6/10 en el recorrido auditado**, no en rendimiento comercial. Base 10; -2 control/recuperación por perder borrador; -1 reconocimiento por perder contexto; -1 claridad/esfuerzo por contacto e intención. Los demás criterios inspeccionados (identidad, CTA, progreso, errores, navegación sin hover y etiquetas principales) son favorables. Búsqueda global no es indispensable para siete servicios; selector por problema sí aporta. Alcanzar 10/10 en esta lista exige corregir los hallazgos y volver a probar; no garantiza perfección ni conversión.

## Propuesta V2 por prioridad

### P0 · Continuidad y solicitud
- Preservar idioma, paso, selección y campos al alternar EN/ES, únicamente en memoria.
- Heredar servicio y propiedad en todos los CTA relevantes.
- Distinguir solicitud de servicio de cotización sin crear dos formularios redundantes.
- Proponer contacto según canal elegido, sujeto a aceptación del ajuste de requisitos.
- Criterios: completar ambos idiomas, cambiar idioma en cualquier paso sin perder datos, editar resumen y regresar sin reintroducir selección; cero datos personales persistidos o enviados en demo.

### P1 · Portada que ayuda a decidir
- Hero con fotografía de trabajo de plomería pertinente y un selector visible: fuga, desagüe, calentador, instalación y no estoy seguro.
- Jerarquía: problema → propiedad → detalles → contacto → revisión. Mostrar una recomendación editable, sin fingir un diagnóstico.
- Reducir altura inicial móvil para mostrar la elección sin recorrer varias secciones.
- Fotografía específica y con permisos por familia de servicio; distinguir stock de trabajos de Aqua Pro.
- Conservar el logo azul y diseñar alrededor de agua, tuberías y espacios reales; evitar copiar marca, tipografía o composición del competidor.

### P1 · Servicios útiles y credibilidad
- Navegador de servicios con filtros claros, imágenes pertinentes, síntomas, qué se revisa y qué información preparar.
- Detalles de servicio con CTA contextual y relacionados por necesidad, no siempre los tres primeros de la lista.
- Incorporar cobertura, equipo, reseñas trazables, credenciales y fotografías de trabajos solo cuando el cliente los proporcione y autorice.
- Preparar componentes opcionales para rangos de precio, horarios y condiciones; ocultarlos hasta su validación. No extrapolar cifras de Michael & Son.

### P2 · Producción y medición
- Backend de solicitudes, estados de entrega/error y confirmación real separada de reserva.
- Analítica mínima sin capturar datos del formulario: selección, inicio, avance, errores y finalización.
- Métricas propuestas: solicitudes válidas / sesiones elegibles; finalizaciones / inicios; abandono por paso; tiempo mediano de finalización; éxito por idioma y dispositivo. Sin línea base no hay resultado porcentual.
- Prueba moderada propuesta: personas que no conozcan la demo eligen un servicio y completan una solicitud; registrar éxito, dudas y tiempo. Objetivos y muestra se acuerdan antes de afirmar una mejora.

## Estado

- Investigación comparativa: aprobado dentro del alcance observado.
- Propuesta V2: preparada, pendiente de implementación.
- Cambios de código y nuevo despliegue: no realizados durante esta auditoría.
- Aceptación comercial y mejora porcentual: pendientes de evidencia.
