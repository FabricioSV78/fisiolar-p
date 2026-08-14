import { CalendarCheck, MapPinned, MessageSquareText } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const steps = [
  { number: '01', icon: MapPinned, title: 'Elige tu sede', text: 'Selecciona América, San Andrés o La Noria.' },
  { number: '02', icon: MessageSquareText, title: 'Cuéntanos qué necesitas', text: 'Elige un motivo general y conversa por WhatsApp.' },
  { number: '03', icon: CalendarCheck, title: 'Coordina tu cita', text: 'Acuerda la atención y el horario que mejor se adapten a ti.' },
]

export function Process() {
  return (
    <section id="proceso" className="premium-section process-section">
      <div className="container">
        <SectionHeading eyebrow="Sin complicaciones" title={<>Empezar es <em>sencillo</em></>} align="center" description="Tres pasos para ponerte en contacto con la sede que prefieras." />
        <div className="process-path">
          <div className="process-path__line" aria-hidden="true"><i /></div>
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article data-reveal style={{ '--delay': `${index * 100}ms` } as CSSProperties} key={number}>
              <span className="process-step__number">{number}</span>
              <span className="process-step__icon"><Icon size={27} /></span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
