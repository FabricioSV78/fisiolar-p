import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'

export function FinalCta() {
  return (
    <section id="contacto" className="final-cta-premium">
      <img src="/images/fisiolar-premium-cta.jpg" alt="Paciente realizando un ejercicio de movilidad con acompañamiento" width="1746" height="900" loading="lazy" />
      <div className="final-cta-premium__overlay" />
      <div className="container final-cta-premium__inner">
        <div className="final-cta-premium__content" data-reveal>
          <span className="section-eyebrow section-eyebrow--light"><i />Tu próximo paso</span>
          <h2>Da el primer paso hacia <em>tu recuperación</em></h2>
          <p>Encuentra tu sede más cercana y reserva tu atención por WhatsApp.</p>
          <div><a className="button button--coral" href="#sedes"><CalendarDays size={19} /> Agendar cita</a><a className="button button--glass" href="#sedes"><MapPin size={19} /> Ver sedes <ArrowRight size={18} /></a></div>
        </div>
      </div>
    </section>
  )
}
