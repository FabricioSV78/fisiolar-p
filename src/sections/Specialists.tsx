import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const specialistProfiles = [
  {
    image: '/images/especialista-fisiolar-01.jpg',
    title: 'Fisioterapia integral',
    text: 'Evaluación, movilidad y recuperación funcional.',
    alt: 'Retrato referencial de una profesional de fisioterapia',
  },
  {
    image: '/images/especialista-fisiolar-02.jpg',
    title: 'Rehabilitación deportiva',
    text: 'Movimiento, fortalecimiento y retorno progresivo.',
    alt: 'Retrato referencial de un profesional de rehabilitación deportiva',
  },
  {
    image: '/images/especialista-fisiolar-03.jpg',
    title: 'Rehabilitación pediátrica',
    text: 'Atención cercana para niños y sus familias.',
    alt: 'Retrato referencial de una profesional de rehabilitación pediátrica',
  },
]

export function Specialists() {
  return (
    <section className="premium-section specialists-section">
      <div className="container specialists-section__grid">
        <div className="specialists-section__copy" data-reveal>
          <SectionHeading eyebrow="Equipo FISIOLAR" title={<>Profesionales que <em>te acompañan</em></>} description="Una atención cercana y profesional que combina criterio clínico, experiencia y seguimiento para ayudarte a recuperar movimiento y bienestar." />
          <a className="text-action" href="#proceso">Conoce cómo empezar <ArrowUpRight size={18} /></a>
        </div>
        <div className="profile-slots" data-reveal style={{ '--delay': '100ms' } as CSSProperties}>
          {specialistProfiles.map(({ image, title, text, alt }, index) => (
            <article className={`profile-slot profile-slot--${index + 1}`} key={title}>
              <div className="profile-slot__portrait">
                <img src={image} alt={alt} width="720" height="900" loading="lazy" />
              </div>
              <div className="profile-slot__content">
                <div className="profile-slot__line" />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
