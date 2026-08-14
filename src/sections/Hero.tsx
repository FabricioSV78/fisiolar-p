import { ArrowDownRight, ArrowRight, CalendarDays, MapPin, MoveUpRight } from 'lucide-react'

export function Hero() {
  return (
    <main id="inicio" className="premium-hero">
      <div className="premium-hero__media">
        <img src="/images/fisiolar-premium-hero.jpg" alt="Paciente realizando un ejercicio funcional con orientación fisioterapéutica" width="1536" height="1024" fetchPriority="high" />
      </div>
      <div className="premium-hero__rings" aria-hidden="true"><i /><i /><i /></div>
      <div className="premium-hero__line" aria-hidden="true" />
      <div className="container premium-hero__grid">
        <div className="premium-hero__content" data-reveal>
          <div className="hero-kicker"><span>Movimiento que transforma</span><i /></div>
          <p className="hero-label">Fisioterapia y rehabilitación en Trujillo</p>
          <h1>Recupera el movimiento.<br /><em>Recupera tu bienestar.</em></h1>
          <p className="premium-hero__lead">Tratamientos personalizados, profesionales especializados y tecnología para acompañarte durante tu recuperación.</p>
          <div className="premium-hero__actions">
            <a className="button button--coral" href="#sedes"><CalendarDays size={19} /> Agendar evaluación</a>
            <a className="button button--glass" href="#tratamientos">Explorar tratamientos <ArrowRight size={18} /></a>
          </div>
          <div className="premium-hero__signature">
            <span className="signature-icon"><MoveUpRight size={20} /></span>
            <div><small>Nuestra forma de acompañarte</small><strong>Tu recuperación en corto tiempo</strong></div>
          </div>
        </div>

        <a className="hero-location-pill" href="#sedes">
          <span><MapPin size={21} /></span>
          <div><strong>3 sedes</strong><small>en Trujillo</small></div>
          <ArrowDownRight size={18} />
        </a>
      </div>
      <div className="container premium-hero__foot">
        <span>Atención personalizada</span><i /><span>Profesionales especializados</span><i /><span>Tecnología aplicada</span>
      </div>
    </main>
  )
}
