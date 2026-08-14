export type IconKey =
  | 'bone'
  | 'dumbbell'
  | 'brain'
  | 'baby'
  | 'heartPulse'
  | 'rotate'
  | 'radio'
  | 'sparkles'
  | 'waves'
  | 'zap'
  | 'magnet'
  | 'activity'

export type TreatmentCategory = {
  id: string
  label: string
  eyebrow: string
  title: string
  description: string
  items: string[]
  motive: string
  icon: IconKey
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'dolor-lesiones',
    label: 'Dolor y lesiones',
    eyebrow: 'Movimiento y función',
    title: 'Recupera seguridad en cada movimiento',
    description: 'Opciones de rehabilitación orientadas a acompañar lesiones, fracturas y molestias musculoesqueléticas según una evaluación profesional.',
    items: ['Rehabilitación física', 'Atención traumatológica', 'Movilidad funcional', 'Fortalecimiento progresivo'],
    motive: 'Fisioterapia general',
    icon: 'bone',
  },
  {
    id: 'deporte',
    label: 'Deporte',
    eyebrow: 'Volver a tu actividad',
    title: 'Muévete con confianza, paso a paso',
    description: 'Acompañamiento terapéutico para deportistas y personas activas durante su proceso de recuperación y retorno progresivo.',
    items: ['Rehabilitación deportiva', 'Recuperación de lesiones', 'Fortalecimiento', 'Retorno progresivo a la actividad'],
    motive: 'Lesión deportiva',
    icon: 'dumbbell',
  },
  {
    id: 'neurologico',
    label: 'Neurológico',
    eyebrow: 'Acompañamiento especializado',
    title: 'Trabajamos capacidades para la vida diaria',
    description: 'Procesos enfocados en movilidad, equilibrio y funcionalidad, adaptados a las necesidades de cada persona.',
    items: ['Rehabilitación neurológica', 'Movilidad', 'Equilibrio', 'Acompañamiento terapéutico'],
    motive: 'Neurología',
    icon: 'brain',
  },
  {
    id: 'ninos',
    label: 'Niños',
    eyebrow: 'Atención cercana',
    title: 'Acompañamos su movimiento y desarrollo',
    description: 'Un entorno amable para abordar objetivos funcionales de niños y familias con orientación profesional.',
    items: ['Rehabilitación pediátrica', 'Terapia de lenguaje', 'Terapia ocupacional', 'Desarrollo funcional'],
    motive: 'Pediatría',
    icon: 'baby',
  },
  {
    id: 'reumatologia',
    label: 'Movilidad y reumatología',
    eyebrow: 'Bienestar cotidiano',
    title: 'Conserva movimiento para lo que disfrutas',
    description: 'Acompañamiento pensado para favorecer la movilidad y la participación en actividades cotidianas.',
    items: ['Rehabilitación reumatológica', 'Movilidad articular', 'Ejercicio terapéutico', 'Autonomía funcional'],
    motive: 'Rehabilitación',
    icon: 'heartPulse',
  },
  {
    id: 'postoperatorio',
    label: 'Pre y postoperatorio',
    eyebrow: 'Proceso progresivo',
    title: 'Una recuperación guiada en cada etapa',
    description: 'Atención fisioterapéutica antes o después de una intervención, siempre de acuerdo con la indicación y evaluación profesional.',
    items: ['Preparación funcional', 'Recuperación postoperatoria', 'Movilidad progresiva', 'Educación para el movimiento'],
    motive: 'Rehabilitación',
    icon: 'rotate',
  },
]

export const therapies: { name: string; description: string; icon: IconKey; index: string }[] = [
  { name: 'Tecaterapia', description: 'Recurso tecnológico utilizado como apoyo dentro de determinados procesos terapéuticos.', icon: 'radio', index: '01' },
  { name: 'Laserterapia', description: 'Técnica complementaria que puede formar parte de un plan indicado por el profesional.', icon: 'sparkles', index: '02' },
  { name: 'Ultrasonido', description: 'Modalidad física empleada como recurso de apoyo durante la rehabilitación.', icon: 'waves', index: '03' },
  { name: 'Electroterapia', description: 'Tecnología terapéutica que se aplica según las necesidades de cada proceso.', icon: 'zap', index: '04' },
  { name: 'Magnetoterapia', description: 'Alternativa complementaria que puede integrarse dentro del proceso de rehabilitación.', icon: 'magnet', index: '05' },
  { name: 'Gimnasio terapéutico', description: 'Espacio para trabajar fuerza, control y movimiento de manera progresiva.', icon: 'activity', index: '06' },
]

export type Location = {
  id: string
  name: string
  address: string
  phone: string
  phoneDigits: string
  short: string
  mapQuery: string
}

export const locations: Location[] = [
  { id: 'america', name: 'América', address: 'Av. América Norte #1811', phone: '969 692 338', phoneDigits: '51969692338', short: 'Trujillo, Perú', mapQuery: 'FISIOLAR Sede América, Av. América Norte 1811, Trujillo, Perú' },
  { id: 'san-andres', name: 'San Andrés', address: 'Pje. San Luis #189', phone: '912 117 321', phoneDigits: '51912117321', short: 'Trujillo 13008, Perú', mapQuery: 'Fisiolar Centro de Fisioterapia Sede San Andres, Pje San Luis 189, Trujillo 13008, Peru' },
  { id: 'la-noria', name: 'La Noria', address: 'Lucio Séneca #266', phone: '921 735 232', phoneDigits: '51921735232', short: 'Trujillo, Perú', mapQuery: 'FISIOLAR Sede La Noria, Lucio Séneca 266, Trujillo, Perú' },
]

export const motives = ['Fisioterapia general', 'Lesión deportiva', 'Rehabilitación', 'Pediatría', 'Neurología', 'Otro']

export const faqs = [
  {
    question: '¿Cómo puedo reservar una cita?',
    answer: 'Selecciona la sede que prefieras y abre WhatsApp. El mensaje llegará preparado con la sede y el motivo de visita que hayas elegido.',
  },
  {
    question: '¿FISIOLAR cuenta con varias sedes?',
    answer: 'Sí. Actualmente puedes encontrar FISIOLAR en las sedes América, San Andrés y La Noria, en Trujillo.',
  },
  {
    question: '¿Cómo sé qué tratamiento necesito?',
    answer: 'El tratamiento adecuado se define a partir de una evaluación profesional, considerando tus necesidades, objetivos y etapa de recuperación.',
  },
  {
    question: '¿Puedo pedir información antes de reservar?',
    answer: 'Sí. Puedes escribir por WhatsApp a la sede más cercana para resolver dudas y coordinar tu atención.',
  },
]
