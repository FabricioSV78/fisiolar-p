import { CalendarDays } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ScrollProgress } from './components/ScrollProgress'
import { useReveal } from './hooks/useReveal'
import { BrandStory } from './sections/BrandStory'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { LocationSelector } from './sections/LocationSelector'
import { Process } from './sections/Process'
import { Specialists } from './sections/Specialists'
import { Technology } from './sections/Technology'
import { TreatmentExplorer } from './sections/TreatmentExplorer'
import { ValueJourney } from './sections/ValueJourney'

function App() {
  const [selectedMotive, setSelectedMotive] = useState('Fisioterapia general')
  const [showMobileBooking, setShowMobileBooking] = useState(true)
  useReveal()

  useEffect(() => {
    const visibleSections = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visibleSections.add(entry.target) : visibleSections.delete(entry.target))
      setShowMobileBooking(visibleSections.size === 0)
    }, { threshold: 0.05 })

    const targets = [document.getElementById('inicio'), document.getElementById('sedes'), document.getElementById('contacto'), document.querySelector('footer')].filter(Boolean) as Element[]
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const handleTreatmentSelect = (motive: string) => {
    setSelectedMotive(motive)
    document.getElementById('sedes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <ScrollProgress />
      <Header />
      <div id="contenido">
        <Hero />
        <ValueJourney />
        <TreatmentExplorer onSelect={handleTreatmentSelect} />
        <Technology />
        <BrandStory />
        <Specialists />
        <Process />
        <LocationSelector selectedMotive={selectedMotive} onMotiveChange={setSelectedMotive} />
        <Faq />
        <FinalCta />
      </div>
      <Footer />
      <a className={`mobile-booking ${showMobileBooking ? '' : 'mobile-booking--hidden'}`} href="#sedes"><CalendarDays size={19} /> Agendar cita</a>
    </>
  )
}

export default App
