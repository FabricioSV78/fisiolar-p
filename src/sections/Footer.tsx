import { ArrowUp, Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import { Brand } from '../components/Brand'
import { locations, treatmentCategories } from '../data/content'

export function Footer() {
  return (
    <footer className="premium-footer">
      <div className="container premium-footer__top">
        <div className="premium-footer__brand">
          <Brand inverted />
          <p>Fisioterapia y rehabilitación personalizada para acompañarte a recuperar movimiento y bienestar.</p>
          <span><MapPin size={16} /> Trujillo, Perú</span>
        </div>
        <div className="premium-footer__column">
          <h3>Tratamientos</h3>
          {treatmentCategories.slice(0, 4).map((item) => <a href="#tratamientos" key={item.id}>{item.label}</a>)}
        </div>
        <div className="premium-footer__column premium-footer__locations">
          <h3>Sedes</h3>
          {locations.map((location) => <a href={`tel:+${location.phoneDigits}`} key={location.id}><strong>{location.name}</strong><span><Phone size={13} />{location.phone}</span></a>)}
        </div>
        <div className="premium-footer__column">
          <h3>Conecta</h3>
          <a href="https://www.instagram.com/fisiolar.trujillo/" target="_blank" rel="noreferrer"><Instagram size={16} />@fisiolar.trujillo</a>
          <a href="https://www.facebook.com/search/top/?q=FISIOLAR%20Fisioterapia%20y%20Rehabilitaci%C3%B3n" target="_blank" rel="noreferrer"><Facebook size={16} />Facebook</a>
          <a href="#sedes">Agenda tu cita</a>
        </div>
      </div>
      <div className="container premium-footer__bottom">
        <span>© {new Date().getFullYear()} FISIOLAR</span>
        <span>Tu recuperación en corto tiempo</span>
        <a href="#inicio" aria-label="Volver arriba, al inicio">Volver arriba <ArrowUp size={16} /></a>
      </div>
    </footer>
  )
}
