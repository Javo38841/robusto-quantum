// Datos REALES del monorepo del LMS (repo privado), copiados a mano al 2026-10-16.
// Fuentes: issues #29 y #31, PRs #72–#78 y #84, CI del PR #90 y el acta del 16-10-2026.
export const snapshotDate = '2026-10-16';

type Pr = { n: number; branch: string; title: string };

const rf01 = {
  rf: 'RF-01',
  issue: 29,
  story: 'Como superadmin, quiero crear una organización con su admin inicial.',
  prs: [
    { n: 72, branch: 'feat/organizations-db', title: 'feat(db): Organization, Membership e isSuperadmin' },
    { n: 73, branch: 'feat/organizations-endpoint', title: 'feat(backend): crear organización con admin inicial' },
  ] as Pr[],
};
const rf02 = {
  rf: 'RF-02',
  issue: 31,
  story: 'Como usuario, quiero iniciar sesión y elegir mi organización si pertenezco a varias.',
  prs: [
    { n: 74, branch: 'feat/login-organizations', title: 'feat(backend): login con membresías y JWT con orgId' },
    { n: 77, branch: 'feat/login-organizations', title: 'feat(backend): usuario demo con dos organizaciones para el e2e' },
    { n: 78, branch: 'feat/select-organization-ui', title: 'feat(frontend): selección de organización tras el login' },
  ] as Pr[],
};

export type TraceCase = {
  id: string;
  layer: string;
  criterion: string;
  test: string;
  file: string;
  story: typeof rf01;
};

export const cases: TraceCase[] = [
  {
    id: 'CP-01-04',
    layer: 'Integración · límite',
    criterion: 'Dado que el slug ya existe, cuando intento crear otra organización con ese slug, entonces recibo un 409 con un mensaje claro.',
    test: "it('CP-01-04: un slug repetido devuelve 409 con mensaje claro')",
    file: 'apps/backend/test/organizations.e2e-spec.ts:152',
    story: rf01,
  },
  {
    id: 'CP-01-07',
    layer: 'Integración · límite',
    criterion: 'Dado que no soy superadmin, cuando intento crear una organización, entonces recibo un 403.',
    test: "it('CP-01-07: un usuario que no es superadmin recibe 403')",
    file: 'apps/backend/test/organizations.e2e-spec.ts:162',
    story: rf01,
  },
  {
    id: 'CP-02-03',
    layer: 'E2E',
    criterion: 'Dado el mismo usuario, cuando elijo "Organización demo 2", entonces entro como STUDENT: el rol depende de la organización elegida.',
    test: "test('CP-02-03: con varias organizaciones pide elegir y entra con el rol de la elegida')",
    file: 'e2e/tests/organizations.spec.ts:22',
    story: rf02,
  },
  {
    id: 'CP-02-04',
    layer: 'E2E · límite',
    criterion: 'Dado una password incorrecta, cuando inicio sesión, entonces veo "Email o password incorrectos." y no entro.',
    test: "test('CP-02-04: login con password incorrecta muestra error y no navega')",
    file: 'e2e/tests/auth.spec.ts:16',
    story: rf02,
  },
  {
    id: 'CP-02-05',
    layer: 'Integración · límite',
    criterion: 'Dado un email que no existe, cuando inicio sesión, entonces recibo el mismo 401 y el mismo mensaje que con una password incorrecta: no se revela si el email existe.',
    test: "it('CP-02-05: credenciales inválidas devuelven 401 con el mismo mensaje exista o no el email')",
    file: 'apps/backend/test/login-organizations.e2e-spec.ts:169',
    story: rf02,
  },
];

// Estado real de las etapas que no son iguales para todos los casos.
export const ci = { pr: 90, jobs: ['Backend', 'Frontend', 'E2E'], result: 'SUCCESS' };
export const review =
  'Pendiente. Estos PRs se mergearon sin revisión de otro integrante mientras adoptábamos el proceso; el acta del 16-10-2026 lo registra y la revisión queda como tarea.';
export const acceptance = 'En la demo del viernes 16-10-2026: el Cliente valida en el ambiente de prueba y el acta registra el resultado de cada caso.';

// Tablero Kanban: historias reales del LMS en su columna al 2026-10-16.
export const board = [
  { col: 'Backlog', cards: ['#32 Ver y editar mi perfil', '#33 Asignar rol en la organización', '#36 Crear curso con fechas'] },
  { col: 'En progreso', cards: [] as string[] },
  { col: 'En revisión', cards: [] as string[] },
  { col: 'Hecho', cards: ['#29 Crear organización con admin inicial', '#31 Iniciar sesión y elegir organización'] },
];

// Entregables de ISO/IEC 29110 perfil Entrada (adopción liviana), con su estado real.
// `phase` es la etapa del proyecto en que el cliente lo recibe.
export type Deliverable = {
  code: string;
  name: string;
  what: string;
  status: string;
  phase: Phase['name'];
};

// Etapas del proyecto, en orden, con lo que pasa en cada una (línea de tiempo de /por-dentro).
export type Phase = { name: 'Inicio' | 'Diseño' | 'Cada semana' | 'Cierre'; summary: string };

export const phases: Phase[] = [
  { name: 'Inicio', summary: 'Acordamos qué se construye y qué no.' },
  { name: 'Diseño', summary: 'Decidimos cómo se construye y cómo se prueba.' },
  { name: 'Cada semana', summary: 'Demo el viernes: aceptas o pides cambios.' },
  { name: 'Cierre', summary: 'Entrega formal del sistema y de su operación.' },
];

export const deliverables: Deliverable[] = [
  { code: 'PM.1', name: 'Plan de proyecto', what: 'Alcance, fases, riesgos y calendario acordados al inicio.', status: 'Hecho', phase: 'Inicio' },
  { code: 'SI.2', name: 'Especificación de requisitos', what: 'Qué debe hacer el sistema, validado por el Cliente.', status: 'Validada el 12-10-2026', phase: 'Inicio' },
  { code: 'SI.3', name: 'Arquitectura y decisiones (ADR)', what: 'Por qué el sistema está construido así, decisión por decisión.', status: '7 ADR', phase: 'Diseño' },
  { code: 'SI.3', name: 'Casos de prueba', what: 'Criterios "dado… cuando… entonces…" escritos antes de programar.', status: 'En cada historia', phase: 'Diseño' },
  { code: 'PM.3', name: 'Actas semanales', what: 'Demo, aceptación de cada historia y resultado de cada caso de prueba.', status: 'Primera acta: 16-10-2026', phase: 'Cada semana' },
  { code: 'SI.2–5', name: 'Matriz de trazabilidad', what: 'Requisito → historia → PR → casos de prueba → evidencia.', status: 'En uso', phase: 'Cada semana' },
  { code: 'SI.6', name: 'Manual de operación', what: 'Uso, despliegue y respaldo del sistema.', status: 'Borrador', phase: 'Cierre' },
  { code: 'PM.4', name: 'Acta de aceptación', what: 'Cierre formal: qué se entregó y qué aceptó el Cliente.', status: 'Al lanzar el MVP', phase: 'Cierre' },
];

// Subagentes de Claude Code del monorepo: alcance acotado por diseño.
export const agents = [
  { name: 'database', can: 'Modelo de datos y migraciones', cannot: 'No toca services, frontend ni CI' },
  { name: 'backend', can: 'API NestJS y sus tests por caso de prueba', cannot: 'No toca frontend, docker ni CI' },
  { name: 'frontend', can: 'Angular y tests E2E', cannot: 'No toca backend, docker ni CI' },
  { name: 'devops', can: 'Docker y pipelines de CI/CD', cannot: 'No ejecuta comandos: propone y una persona corre' },
  { name: 'reviewer', can: 'Revisa cada PR contra sus casos de prueba', cannot: 'Solo lectura: no modifica nada' },
  { name: 'server-auditor', can: 'Diagnostica el servidor', cannot: 'Solo lectura: nunca despliega ni instala' },
  { name: 'acta', can: 'Prepara el borrador del acta semanal desde GitHub', cannot: 'No cierra issues, no comenta, no commitea' },
];
