import type { FC, ReactNode } from 'react'
import './iconButton.css'

interface IconButtonProps {
  icon: ReactNode
  ariaLabel: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  ariaPressed?: boolean
  disabled?: boolean
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  onClick,
  className,
  type = 'button',
  ariaPressed,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={['icon-button', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="icon-button__icon" aria-hidden>
        {icon}
      </span>
    </button>
  )
}

export default IconButton
