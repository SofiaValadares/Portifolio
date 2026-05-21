import type {FC, ReactNode} from 'react'
import { Activity } from 'lucide-react'
import './contactButton.css'

interface ContactButtonProps {
  label: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const ContactButton: FC<ContactButtonProps> = ({
  label,
  onClick,
  icon,
  className,
  type = 'button',
}) => {
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

export default ContactButton;