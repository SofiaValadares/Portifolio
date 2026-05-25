import type { FC, ReactNode } from 'react'
import { Activity } from 'lucide-react'
import './linkButton.css'

interface LinkButtonProps {
  label: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const LinkButton: FC<LinkButtonProps> = ({
  label,
  onClick,
  icon,
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={['link-button', className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <span className="link-button__icon" aria-hidden>
        {icon ?? <Activity strokeWidth={2} />}
      </span>
      <span className="link-button__label">{label}</span>
    </button>
  )
}

export default LinkButton
