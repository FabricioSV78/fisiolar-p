type BrandProps = {
  inverted?: boolean
  compact?: boolean
}

export function Brand({ inverted = false, compact = false }: BrandProps) {
  return (
    <a className={`brand ${inverted ? 'brand--inverted' : ''} ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="FISIOLAR, volver al inicio">
      <svg className="brand__mark" viewBox="0 0 54 54" aria-hidden="true">
        <rect width="54" height="54" rx="20" />
        <path d="M10 28h9l3.5-9 6 18 4-9H44" />
        <circle cx="44" cy="28" r="2" />
      </svg>
      <span className="brand__text">
        <strong>FISIOLAR</strong>
        <small>Fisioterapia &amp; Rehabilitación</small>
      </span>
    </a>
  )
}
