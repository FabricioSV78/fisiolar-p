import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', inverted = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${inverted ? 'section-heading--inverted' : ''} ${className}`}>
      <span className="section-eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
