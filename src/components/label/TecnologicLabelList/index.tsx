import type { FC } from 'react'
import type { LanguegeModel } from '../../../models/LanguegeModel'
import TecnologicLabel from '../TecnologicLabel'
import './tecnologicLabelList.css'

interface TecnologicLabelListProps {
    technologies: LanguegeModel[]
    ariaLabel?: string
    className?: string
}

const TecnologicLabelList: FC<TecnologicLabelListProps> = (
    {
        technologies,
        ariaLabel = 'Tecnologias',
        className,
    }) => {
    if (technologies.length === 0) return null

    return (
        <ul
            className={['tecnologic-label-list', className].filter(Boolean).join(' ')}
            aria-label={ariaLabel}
        >
            {technologies.map((technology) => (
                <li key={technology.name}>
                    <TecnologicLabel
                        name={technology.name}
                        icon={technology.icon}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TecnologicLabelList
