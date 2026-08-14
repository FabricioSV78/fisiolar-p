import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { TreatmentIcon } from '../components/TreatmentIcon'
import { therapies } from '../data/content'

export function Technology() {
  return (
    <section id="tecnologia" className="premium-section technology-section">
      <div className="technology-section__wave" aria-hidden="true" />
      <div className="container">
        <div className="technology-section__top">
          <SectionHeading inverted eyebrow="Recursos terapéuticos" title={<>Tecnología que acompaña <em>tu recuperación</em></>} description="Cada recurso se integra de manera responsable según la evaluación y el plan de atención indicado por el profesional." />
          <a className="button button--outline-light" href="#tratamientos">Conocer tratamientos <ArrowUpRight size={18} /></a>
        </div>
        <div className="technology-grid">
          {therapies.map((therapy, index) => (
            <article className="technology-card" data-reveal style={{ '--delay': `${index * 65}ms` } as CSSProperties} key={therapy.name}>
              <span className="technology-card__index">{therapy.index}</span>
              <span className="technology-card__icon"><TreatmentIcon name={therapy.icon} size={28} /></span>
              <h3>{therapy.name}</h3>
              <p>{therapy.description}</p>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
