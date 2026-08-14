import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/content'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="premium-section faq-section">
      <div className="container faq-section__grid">
        <div className="faq-section__heading" data-reveal>
          <SectionHeading eyebrow="Preguntas frecuentes" title={<>Información clara <em>antes de empezar</em></>} description="Encuentra respuestas rápidas sobre las sedes, la reserva y el inicio de tu atención." />
          <a className="button button--dark" href="#sedes">Elegir una sede</a>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <article className={isOpen ? 'is-open' : ''} key={faq.question}>
                <h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}><span><i>0{index + 1}</i>{faq.question}</span>{isOpen ? <Minus size={20} /> : <Plus size={20} />}</button></h3>
                <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}><p>{faq.answer}</p></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
