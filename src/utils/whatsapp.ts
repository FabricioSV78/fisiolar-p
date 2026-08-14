import type { Location } from '../data/content'

export function whatsappUrl(location: Location, motive?: string) {
  const selectedMotive = motive || 'Por definir'
  const message = `Hola FISIOLAR 👋 Quisiera solicitar información para agendar una cita.\n\nSede: ${location.name}\n\nMotivo de visita: ${selectedMotive}`
  return `https://wa.me/${location.phoneDigits}?text=${encodeURIComponent(message)}`
}
