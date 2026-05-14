import type { ReactNode } from 'react'
import './pagePortifolioFormat.css'

export type PagePortifolioFormatProps = {
  /** `id` da secção (âncora `#...`) */
  sectionId: string
  title: ReactNode
  children: ReactNode
  className?: string
}

export default function PagePortifolioFormat({
  sectionId,
  title,
  children,
  className,
}: PagePortifolioFormatProps) {
  return (
    <section
      id={sectionId}
      className={['page-portfolio-format', className].filter(Boolean).join(' ')}
    >
      <header className="page-portfolio-format__header">{title}</header>
      <div className="page-portfolio-format__body">{children}</div>
    </section>
  )
}
