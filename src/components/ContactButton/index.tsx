import { Activity } from 'lucide-react'
import type { ReactNode } from 'react'
import './contactButton.css'

interface ContactButtonProps {
  label: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

export function ContactButton({
  label,
  onClick,
  icon,
  className,
  type = 'button',
}: ContactButtonProps) {
  return (
    <button
      type={type}
      className={['contactButton', className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <span className="contactButton__icon" aria-hidden>
        {icon ?? <Activity strokeWidth={2} />}
      </span>
      <span className="contactButton__label">{label}</span>
    </button>
  )
}
