import { ArrowUpRight, Check, ChevronDown, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { useState } from 'react'
import { locations, motives } from '../data/content'
import { whatsappUrl } from '../utils/whatsapp'

type LocationSelectorProps = {
  selectedMotive: string
  onMotiveChange: (motive: string) => void
}

export function LocationSelector({ selectedMotive, onMotiveChange }: LocationSelectorProps) {
  const [selectedId, setSelectedId] = useState(locations[0].id)
  const selected = locations.find((location) => location.id === selectedId) ?? locations[0]
  const encodedMapQuery = encodeURIComponent(selected.mapQuery)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedMapQuery}&z=17&output=embed&hl=es`
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`

  return (
    <section id="sedes" className="premium-section location-selector">
      <div className="location-selector__texture" aria-hidden="true" />
      <div className="container">
        <div className="location-selector__heading" data-reveal>
          <span className="section-eyebrow section-eyebrow--light"><i />Encuéntranos en Trujillo</span>
          <h2>Elige dónde comenzar <em>tu recuperación</em></h2>
          <p>Selecciona una sede y el motivo de tu visita. El mensaje se prepara automáticamente para que reserves por WhatsApp.</p>
        </div>
        <div className="location-experience" data-reveal>
          <div className="location-tabs" role="tablist" aria-label="Sedes FISIOLAR">
            {locations.map((location, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={selected.id === location.id}
                aria-controls="location-panel"
                className={selected.id === location.id ? 'is-active' : ''}
                onClick={() => setSelectedId(location.id)}
                key={location.id}
              >
                <span>0{index + 1}</span>{location.name}<i />
              </button>
            ))}
          </div>
          <div className="location-panel" id="location-panel" role="tabpanel" key={selected.id}>
            <div className="location-panel__info">
              <span className="location-panel__status"><i /> Sede FISIOLAR</span>
              <h3>FISIOLAR<br /><em>{selected.name}</em></h3>
              <div className="location-panel__details">
                <div><span><MapPin size={19} /></span><p><small>Dirección</small><strong>{selected.address}</strong><em>{selected.short}</em></p></div>
                <a href={`tel:+${selected.phoneDigits}`}><span><Phone size={18} /></span><p><small>WhatsApp y llamadas</small><strong>{selected.phone}</strong></p></a>
              </div>
              <label className="motive-select">
                <span>Motivo de tu visita</span>
                <div><select id="motivo-consulta" name="motivo-consulta" aria-label="Motivo general de la visita" value={selectedMotive} onChange={(event) => onMotiveChange(event.target.value)}>{motives.map((motive) => <option key={motive}>{motive}</option>)}</select><ChevronDown size={18} /></div>
              </label>
              <a className="button button--whatsapp" href={whatsappUrl(selected, selectedMotive)} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> Reservar en esta sede <ArrowUpRight size={18} />
              </a>
              <p className="location-panel__privacy"><Check size={14} /> No solicitamos ni almacenamos datos médicos.</p>
            </div>
            <div className="location-map">
              <iframe
                src={mapEmbedUrl}
                title={`Mapa de FISIOLAR sede ${selected.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a className="location-map__open" href={mapExternalUrl} target="_blank" rel="noreferrer">
                <Navigation size={18} />
                <span><small>Cómo llegar a</small><strong>FISIOLAR {selected.name}</strong></span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
