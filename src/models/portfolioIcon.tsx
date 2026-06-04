import type { LucideProps } from 'lucide-react'
import './portfolioIcon.css'

type IconProps = Pick<LucideProps, 'className'>

export function IconPortfolio({ className }: IconProps) {
  return (
    <span
      className={['portfolio-tab-icon', className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <code className="portfolio-tab-icon__code">&lt;S/&gt;</code>
    </span>
  )
}
