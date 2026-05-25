import type { FC, ReactNode } from 'react'
import './tecnologicLabel.css'

interface TecnologicLabelProps {
    name: string
    icon: ReactNode
    className?: string
}

const TecnologicLabel: FC<TecnologicLabelProps> = (
    {
        name,
        icon,
        className,
    }) => {
    return (
        <span
            className={['tecnologic-label', className].filter(Boolean).join(' ')}
            data-tooltip={name}
            tabIndex={0}
            aria-label={name}
        >
            {icon}
        </span>
    )
}

export default TecnologicLabel
