import type { LucideProps } from 'lucide-react'
import './portfolioIcon.css'

type IconProps = Pick<LucideProps, 'className'>

export function IconPortfolio({ className }: IconProps) {
  return (
    <span
      className={['portfolio-tab-icon', className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <img
        className="portfolio-tab-icon__image"
        src="/favicon-32x32.png?v=2"
        alt=""
        width={16}
        height={16}
        decoding="async"
      />
    </span>
  )
}
