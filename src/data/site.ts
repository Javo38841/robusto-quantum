// Datos de la startup. El nombre es provisional: cambiarlo aquí lo cambia en todo el sitio.
export const company = {
  name: 'Robusto',
  tagline: 'Software para la logística del Corredor Bioceánico',
  region: 'Tarapacá, Chile',
  email: 'jchoque0@gmail.com', // TODO: reemplazar por un correo de la empresa cuando exista
};

// Programa al que postulamos. `status` debe decir "Postulantes" hasta que nos notifiquen
// la selección; recién ahí cambiarlo a "Participantes". No usar logos del programa ni de
// sus aliados sin autorización escrita (bases, punto 10.1).
export const program = {
  name: 'Quantum III – Logistic Innovation Lab',
  short: 'Quantum III',
  via: 'Vía B · Conversión por desafío',
  status: 'Postulantes',
  // Video opcional de máx. 3 min (bonifica hasta 0,3). Pegar aquí la URL de inserción
  // (p. ej. https://www.youtube-nocookie.com/embed/ID) y la sección aparece sola.
  videoUrl: '',
};

// Correo de postulaciones. Mientras no exista uno de la empresa, se usa el mismo con un
// asunto fijo para poder filtrarlo en Gmail.
export const careers = {
  email: 'jchoque0@gmail.com', // TODO: postulaciones@<dominio> cuando exista
  subject: 'Postulación',
};

// Equipo. Para sumar a alguien, agregar un objeto; los que tienen `pending: true`
// se muestran como "por confirmar" (sin nombre) hasta que confirmen.
export type Member = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  skills: string[];
  github?: string;
  pending?: boolean;
};

export const team: Member[] = [
  {
    name: 'Javier Choque',
    initials: 'JC',
    role: 'Arquitectura y plataforma',
    bio: 'Egresado de Ingeniería en Informática (UTFSM), de Alto Hospicio. Analista de soporte TI y software en una importadora de Iquique, donde construyó un sistema de gestión de flota en producción. Diseñó desde cero la arquitectura del LMS.',
    skills: ['NestJS', 'Angular', 'PostgreSQL', 'Docker', 'CI/CD'],
    github: 'https://github.com/Javo38841',
  },

  {
    name: 'Tomás Solar',
    initials: 'TS',
    role: 'Backend & Software Architecture',
    bio: 'Software Engineer Semi Senior en Buk. Experiencia en diseño de arquitecturas backend, desarrollo de sistemas de alta escala y migración de plataformas críticas utilizadas por cerca de un millón de personas. Apasionado por resolver problemas complejos y construir soluciones tecnológicas de impacto.',
    skills: [
      'Ruby on Rails',
      'Java / Spring Boot',
      'PostgreSQL',
      'System Design',
      'RabbitMQ',
      'REST APIs',
    ],
    github: 'https://github.com/tsolarc',
  },

  {
    name: 'Por confirmar',
    initials: '+',
    role: 'Negocio y diseño',
    bio: 'Estamos sumando perfiles de negocio y de diseño para validar cada solución con sus usuarios y llevarla al mercado.',
    skills: [],
    pending: true,
  },
];

// Números reales del caso LMS (conteo manual en el monorepo al 2026-10-16).
export const lmsStats = {
  countedAt: '2026-10-16',
  tests: { unit: 130, integration: 49, e2e: 10 },
  prsMerged: 40,
  environments: 2,
  adrs: 7,
};
