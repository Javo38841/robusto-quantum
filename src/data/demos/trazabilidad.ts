// Demo 02 · Cadena de custodia. Cargas, lugares y personas ficticias.
export type TraceEvent = {
  place: string;
  actor: string;
  at: string; // fecha y hora local
  action: string;
  doc: string;
  weightKg: number;
};

export type Shipment = { code: string; description: string; route: string; events: TraceEvent[] };

export const shipments: Shipment[] = [
  {
    code: 'CG-0142',
    description: 'Pallet de repuestos mineros',
    route: 'Bodega Alto Hospicio → Faena ficticia "Cerro Norte"',
    events: [
      { place: 'Bodega Alto Hospicio', actor: 'Encargada de bodega · M. Soto', at: '2026-10-13 08:10', action: 'Despacho', doc: 'guia-despacho-4412.pdf', weightKg: 820 },
      { place: 'Báscula de salida', actor: 'Operador báscula · R. Díaz', at: '2026-10-13 08:32', action: 'Pesaje de salida', doc: 'ticket-bascula-8831.pdf', weightKg: 820 },
      { place: 'Control Pozo Almonte', actor: 'Conductor · J. Ramos', at: '2026-10-13 09:20', action: 'Paso por control en ruta', doc: 'foto-sellos-1.jpg', weightKg: 820 },
      { place: 'Garita faena Cerro Norte', actor: 'Guardia · P. Lagos', at: '2026-10-13 12:05', action: 'Ingreso a faena', doc: 'registro-garita-2207.pdf', weightKg: 820 },
      { place: 'Bodega faena Cerro Norte', actor: 'Recepción · C. Muñoz', at: '2026-10-13 12:40', action: 'Recepción conforme', doc: 'acta-recepcion-0913.pdf', weightKg: 820 },
    ],
  },
  {
    code: 'CG-0157',
    description: 'Tambores de lubricante (4 unidades)',
    route: 'Bodega Alto Hospicio → Faena ficticia "Cerro Norte"',
    events: [
      { place: 'Bodega Alto Hospicio', actor: 'Encargada de bodega · M. Soto', at: '2026-10-14 07:45', action: 'Despacho', doc: 'guia-despacho-4420.pdf', weightKg: 760 },
      { place: 'Báscula de salida', actor: 'Operador báscula · R. Díaz', at: '2026-10-14 08:02', action: 'Pesaje de salida', doc: 'ticket-bascula-8850.pdf', weightKg: 760 },
      { place: 'Control Pozo Almonte', actor: 'Conductor · L. Herrera', at: '2026-10-14 08:55', action: 'Paso por control en ruta', doc: 'foto-sellos-2.jpg', weightKg: 760 },
      { place: 'Garita faena Cerro Norte', actor: 'Guardia · P. Lagos', at: '2026-10-14 11:48', action: 'Ingreso a faena', doc: 'registro-garita-2219.pdf', weightKg: 760 },
      { place: 'Bodega faena Cerro Norte', actor: 'Recepción · C. Muñoz', at: '2026-10-14 12:30', action: 'Recepción con diferencia', doc: 'acta-recepcion-0921.pdf', weightKg: 571 },
    ],
  },
];

// Diferencia de peso que dispara una alerta entre un punto y el anterior.
export const weightTolerance = 0.02;
