// Demo 04 · Asistente de documentación. Manual de operación FICTICIO de un terminal
// de carga inventado. La búsqueda es real (en el navegador); las respuestas a las
// preguntas sugeridas están redactadas a mano a partir de los fragmentos que citan.
export const docTitle = 'Manual de operación · Terminal de Carga Norte (ficticio)';

export type Chunk = { id: number; section: string; text: string };

export const chunks: Chunk[] = [
  {
    id: 1,
    section: '2.1 Horario de recepción',
    text: 'La recepción de carga funciona de lunes a viernes de 07:00 a 21:00 y los sábados de 08:00 a 14:00. Los camiones sin turno agendado se atienden solo si hay capacidad disponible en el bloque horario.',
  },
  {
    id: 2,
    section: '2.2 Agendamiento de turnos',
    text: 'Todo camión debe agendar un turno con al menos 12 horas de anticipación. El turno se puede modificar hasta 2 horas antes del bloque reservado. Llegar con más de 30 minutos de atraso libera el turno.',
  },
  {
    id: 3,
    section: '3.1 Documentos de ingreso',
    text: 'Para ingresar, el conductor presenta su cédula de identidad, licencia profesional vigente, guía de despacho y el código del turno. Las cargas internacionales agregan la documentación aduanera correspondiente.',
  },
  {
    id: 4,
    section: '3.2 Pesaje en báscula',
    text: 'Todo camión pasa por la báscula al entrar y al salir. Si la diferencia con el peso declarado supera el 2%, la carga queda retenida hasta que la jefatura de turno autorice su revisión.',
  },
  {
    id: 5,
    section: '4.1 Velocidad y circulación en patio',
    text: 'La velocidad máxima dentro del patio es de 20 km/h y de 10 km/h en zonas de carga. Está prohibido adelantar y estacionar fuera de las zonas demarcadas.',
  },
  {
    id: 6,
    section: '4.2 Elementos de protección personal',
    text: 'Fuera de la cabina es obligatorio usar casco, chaleco reflectante, zapatos de seguridad y lentes de protección. Quien no cuente con sus elementos de protección no puede bajar del camión.',
  },
  {
    id: 7,
    section: '5.1 Carga peligrosa',
    text: 'La carga peligrosa requiere aviso previo de 24 horas, hoja de datos de seguridad y rotulación según su clase. Se descarga solo en la zona de carga peligrosa y con supervisor presente.',
  },
  {
    id: 8,
    section: '5.2 Derrames y emergencias',
    text: 'Ante un derrame, detenga el motor, aléjese contra el viento y avise a la central de emergencias por radio o al anexo 100. No intente contener sustancias peligrosas sin el equipo adecuado.',
  },
  {
    id: 9,
    section: '6.1 Reclamos por daño',
    text: 'Los reclamos por daño en la carga se presentan dentro de las 48 horas siguientes a la entrega, con fotografías y la guía de despacho. La respuesta se entrega en un máximo de 5 días hábiles.',
  },
  {
    id: 10,
    section: '6.2 Contacto',
    text: 'La mesa de ayuda atiende por correo y teléfono en horario de recepción. Las emergencias se informan siempre a la central por radio o al anexo 100, a cualquier hora.',
  },
];

export const suggested: { q: string; answer: string; cites: number[] }[] = [
  {
    q: '¿Con cuánta anticipación tengo que agendar el turno?',
    answer:
      'Con al menos 12 horas de anticipación. Puedes modificarlo hasta 2 horas antes del bloque, y si llegas con más de 30 minutos de atraso se libera el turno.',
    cites: [2],
  },
  {
    q: '¿Qué documentos necesito para entrar al terminal?',
    answer:
      'Cédula de identidad, licencia profesional vigente, guía de despacho y el código del turno. Si la carga es internacional, también la documentación aduanera.',
    cites: [3],
  },
  {
    q: '¿Qué hago si hay un derrame de carga peligrosa?',
    answer:
      'Detén el motor, aléjate contra el viento y avisa a la central de emergencias por radio o al anexo 100. No intentes contener la sustancia sin el equipo adecuado. Recuerda que la carga peligrosa se descarga solo en su zona y con supervisor presente.',
    cites: [8, 7],
  },
  {
    q: '¿Cuál es el sueldo de un operador de grúa?',
    answer: '',
    cites: [],
  },
];

// Palabras que no aportan a la búsqueda.
export const stopwords = new Set(
  'a al algo con como cual cuales cuando de del el en es esta este hay la las lo los me mi no o para por que qué se si sin su sus te tengo un una y yo hago puedo debo cuánto cuánta cuántas cuántos'.split(' '),
);
