// Guía para clientes: cómo es trabajar con nosotros, contado desde lo que hace el cliente
// en cada paso. Es el resumen de la guía PDF; si cambia uno, actualizar el otro.
// Los tiempos son estimaciones de referencia, no compromisos.
export type GuideStep = {
  title: string;
  you: string;
  who: string;
  time: string;
  get: string;
};

export const guideSteps: GuideStep[] = [
  {
    title: 'Antes de empezar',
    you: 'Reúnes ejemplos reales del proceso: planillas, formularios, fotos de documentos.',
    who: 'Una persona de contacto',
    time: 'Aprox. 1 hora',
    get: 'Una primera reunión enfocada en tu problema real.',
  },
  {
    title: 'Conocemos tu proceso',
    you: 'Nos dejas acompañar en terreno a quien hace el trabajo todos los días.',
    who: 'Quien opera el proceso',
    time: 'Unas horas',
    get: 'Un mapa de cómo funciona hoy y dónde se pierde tiempo.',
  },
  {
    title: 'Apruebas los escenarios',
    you: 'Lees casos en lenguaje simple, como "si una carga llega sin documento, el sistema avisa", y los apruebas o corriges.',
    who: 'Quien decide',
    time: '1 reunión',
    get: 'Un acuerdo escrito de qué hará el sistema.',
  },
  {
    title: 'Pruebas cada viernes',
    you: 'Pruebas lo nuevo y nos dices "sí, sirve" o "cambien esto".',
    who: 'Quien usará el sistema',
    time: '30 min a la semana',
    get: 'Software funcionando cada semana, no al final.',
  },
  {
    title: 'Puesta en marcha',
    you: 'Tu equipo se capacita y cargamos juntos tus datos.',
    who: 'Todo el equipo usuario',
    time: 'Según el tamaño del equipo',
    get: 'El sistema en uso, con soporte cercano.',
  },
];

// PDF de la guía, en public/. Cambiar `ready` a true cuando el archivo exista: mientras
// esté en false, el botón ofrece pedir la guía por correo en vez de un enlace roto.
export const guidePdf = { file: 'guia-clientes.pdf', ready: true };
