import type { PagePortifolioSectionProps } from './types'
import './pagePortifolioFormat.css'

export type { BrowserWindowControls, PagePortifolioShellProps } from './types'
export { default as PagePortifolioShell } from './PagePortifolioShell'

export default function PagePortifolioFormat({
  sectionId,
  title,
  children,
  className,
}: PagePortifolioSectionProps) {
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
