import { Crosshair, ScanLine, Sparkles } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const values = [
  { number: '01', icon: Crosshair, title: 'Evaluación personalizada', text: 'Cada proceso comienza entendiendo tus necesidades, objetivos y forma de moverte.' },
  { number: '02', icon: ScanLine, title: 'Tratamiento especializado', text: 'Diferentes áreas de rehabilitación para acompañarte de acuerdo con una evaluación profesional.' },
  { number: '03', icon: Sparkles, title: 'Tecnología como aliada', text: 'Recursos y técnicas modernas como apoyo a una atención cercana y progresiva.' },
]

export function ValueJourney() {
  return (
    <section className="value-journey" aria-labelledby="value-title">
      <div className="container value-journey__shell">
        <SectionHeading eyebrow="Nuestra manera de cuidarte" title={<span id="value-title">Una recuperación pensada <em>alrededor de ti</em></span>} align="center" description="Un proceso claro, humano y construido paso a paso contigo." />
        <div className="value-path" data-reveal>
          <svg viewBox="0 0 960 120" preserveAspectRatio="none" aria-hidden="true"><path d="M20 70C210 0 300 125 480 62S745 5 940 66" /></svg>
          {values.map(({ number, icon: Icon, title, text }, index) => (
            <article className={`value-node value-node--${index + 1}`} key={title}>
              <div className="value-node__marker"><Icon size={24} /><span>{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
