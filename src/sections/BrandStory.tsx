import { ArrowRight, BadgeCheck, HeartHandshake, MonitorUp } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const attributes = [
  { icon: HeartHandshake, title: 'Enfoque personalizado', text: 'Un proceso construido alrededor de cada persona.' },
  { icon: BadgeCheck, title: 'Acompañamiento profesional', text: 'Orientación cercana durante las distintas etapas.' },
  { icon: MonitorUp, title: 'Recursos modernos', text: 'Tecnología como apoyo a la rehabilitación.' },
]

export function BrandStory() {
  return (
    <section id="fisiolar" className="premium-section brand-story">
      <div className="container brand-story__grid">
        <div className="brand-story__visual" data-reveal>
          <div className="brand-story__image">
            <img src="/images/fisiolar-premium-tech.jpg" alt="Ambiente moderno preparado para fisioterapia y ejercicio terapéutico" width="1536" height="1024" loading="lazy" />
          </div>
          <div className="brand-story__years"><strong>+5</strong><p>años acompañando procesos de recuperación</p></div>
          <div className="brand-story__seal"><i /> Trujillo, Perú</div>
        </div>
        <div className="brand-story__content" data-reveal style={{ '--delay': '110ms' } as CSSProperties}>
          <SectionHeading eyebrow="Somos FISIOLAR" title={<>Más que tratar una molestia, buscamos <em>acompañar tu recuperación</em></>} description="FISIOLAR integra atención profesional, un trato humano y recursos para que cada paciente pueda avanzar con claridad durante su proceso." />
          <div className="brand-attributes">
            {attributes.map(({ icon: Icon, title, text }) => (
              <article key={title}><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
          <a className="text-action" href="#sedes">Conoce nuestras tres sedes <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}
