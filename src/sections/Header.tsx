import { ArrowUpRight, CalendarDays, Instagram, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Brand } from '../components/Brand'

const navItems = [
  ['Inicio', 'inicio'],
  ['Tratamientos', 'tratamientos'],
  ['Tecnología', 'tecnologia'],
  ['FISIOLAR', 'fisiolar'],
  ['Sedes', 'sedes'],
  ['Contacto', 'contacto'],
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [compactNavigation, setCompactNavigation] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuWasOpened = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35)
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -58% 0px' },
    )
    navItems.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1120px)')
    const syncNavigation = () => {
      setCompactNavigation(media.matches)
      if (!media.matches) setMenuOpen(false)
    }
    syncNavigation()
    media.addEventListener('change', syncNavigation)
    return () => media.removeEventListener('change', syncNavigation)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('drawer-open', menuOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [menuOpen])

  useEffect(() => {
    if (navRef.current) navRef.current.inert = compactNavigation && !menuOpen
  }, [compactNavigation, menuOpen])

  useEffect(() => {
    if (menuOpen) {
      menuWasOpened.current = true
      closeButtonRef.current?.focus()
    } else if (menuWasOpened.current) {
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`premium-header ${scrolled ? 'premium-header--scrolled' : ''}`}>
      <div className="container premium-header__inner">
        <Brand inverted={!scrolled} />
        <nav ref={navRef} className={`premium-nav ${menuOpen ? 'premium-nav--open' : ''}`} aria-label="Navegación principal" aria-hidden={compactNavigation && !menuOpen}>
          <div className="premium-nav__mobile-top">
            <Brand />
            <button ref={closeButtonRef} type="button" onClick={close} aria-label="Cerrar menú"><X /></button>
          </div>
          <span className="premium-nav__label">Explora FISIOLAR</span>
          {navItems.map(([label, id]) => (
            <a className={active === id ? 'is-active' : ''} href={`#${id}`} onClick={close} key={id}>
              <span>{label}</span><i /><ArrowUpRight size={17} />
            </a>
          ))}
          <a className="premium-nav__booking" href="#sedes" onClick={close}>
            <CalendarDays size={19} /> Agenda tu cita
          </a>
          <div className="premium-nav__social">
            <Instagram size={17} /> @fisiolar.trujillo
          </div>
        </nav>
        <a className="button button--header" href="#sedes">
          <CalendarDays size={17} /> Agenda tu cita
        </a>
        <button ref={menuButtonRef} className="premium-header__menu" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
          <Menu size={25} />
        </button>
      </div>
      <button className={`drawer-backdrop ${menuOpen ? 'drawer-backdrop--visible' : ''}`} type="button" aria-label="Cerrar menú" aria-hidden={!menuOpen} tabIndex={menuOpen ? 0 : -1} onClick={close} />
    </header>
  )
}
