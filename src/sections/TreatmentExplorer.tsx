import { ArrowRight, Check, MapPin } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { TreatmentIcon } from '../components/TreatmentIcon'
import { treatmentCategories } from '../data/content'

type TreatmentExplorerProps = {
  onSelect: (motive: string) => void
}

export function TreatmentExplorer({ onSelect }: TreatmentExplorerProps) {
  const [selectedId, setSelectedId] = useState(treatmentCategories[0].id)
  const selected = treatmentCategories.find((item) => item.id === selectedId) ?? treatmentCategories[0]

  return (
    <section id="tratamientos" className="premium-section treatment-explorer">
      <div className="treatment-explorer__orb" aria-hidden="true" />
      <div className="container">
        <SectionHeading eyebrow="Explorador interactivo" title={<>¿Cómo podemos <em>ayudarte?</em></>} description="Conoce las áreas de atención y encuentra un punto de partida para tu recuperación." />
        <div className="treatment-interface" data-reveal>
          <div className="treatment-tabs" role="tablist" aria-label="Áreas de tratamiento">
            <span className="treatment-tabs__label">Selecciona un área</span>
            {treatmentCategories.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={selected.id === item.id}
                aria-controls="treatment-panel"
                className={selected.id === item.id ? 'is-active' : ''}
                onClick={() => setSelectedId(item.id)}
                key={item.id}
              >
                <span className="treatment-tabs__number">0{index + 1}</span>
                <span className="treatment-tabs__icon"><TreatmentIcon name={item.icon} size={21} /></span>
                <span>{item.label}</span>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
          <div className="treatment-panel" id="treatment-panel" role="tabpanel" key={selected.id}>
            <div className="treatment-panel__photo">
              <img src="/images/fisiolar-premium-detail.jpg" alt="Detalle de un ejercicio de estabilidad acompañado" width="1536" height="1024" loading="lazy" />
              <span><TreatmentIcon name={selected.icon} size={23} /> {selected.label}</span>
            </div>
            <div className="treatment-panel__content">
              <span className="treatment-panel__eyebrow">{selected.eyebrow}</span>
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <ul>{selected.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
              <button className="button button--dark" type="button" onClick={() => onSelect(selected.motive)}>
                <MapPin size={19} /> Elegir sede
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
