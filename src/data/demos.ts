// Los seis ejes temáticos de la convocatoria, cada uno con su prueba de concepto.
// `ready: false` muestra la tarjeta como "Próximamente" y no enlaza.
export type Axis = {
  n: string;
  slug: string;
  axis: string;
  demo: string;
  summary: string;
  ready: boolean;
};

export const axes: Axis[] = [
  {
    n: '01',
    slug: 'puertos',
    axis: 'Logística y puertos',
    demo: 'Demo por definir',
    summary: 'Soluciones para accesos portuarios, coordinación de camiones y operación en terminales.',
    ready: false,
  },
  {
    n: '02',
    slug: 'trazabilidad',
    axis: 'Trazabilidad',
    demo: 'Cadena de custodia de una carga',
    summary: 'Cada punto de control queda registrado: quién, dónde, cuándo y con qué documento.',
    ready: true,
  },
  {
    n: '03',
    slug: 'transporte',
    axis: 'Transporte y comex',
    demo: 'Demo por definir',
    summary: 'Soluciones para comercio exterior, trámites y conectividad en los corredores clave.',
    ready: false,
  },
  {
    n: '04',
    slug: 'ia',
    axis: 'IA y automatización',
    demo: 'Asistente de documentación',
    summary: 'Preguntas en lenguaje natural sobre un manual de operación, con respuestas que citan su fuente.',
    ready: true,
  },
  {
    n: '05',
    slug: 'mineria',
    axis: 'Minería y supply chain',
    demo: 'Demo por definir',
    summary: 'Soluciones para la cadena de suministro de la minería y sus proveedores.',
    ready: false,
  },
  {
    n: '06',
    slug: 'sostenibilidad',
    axis: 'Sostenibilidad',
    demo: 'Demo por definir',
    summary: 'Innovación verde y operación responsable en la cadena logística.',
    ready: false,
  },
];

export const axisBySlug = (slug: string): Axis => {
  const axis = axes.find((a) => a.slug === slug);
  if (!axis) throw new Error(`Eje desconocido: ${slug}`);
  return axis;
};
