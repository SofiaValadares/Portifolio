import type { FC, ReactNode } from 'react'
import type { LanguegeModel } from '../../../../../../models/LanguegeModel.ts'
import './expertisesCard.css'

interface ExpertisesCardProps {
  icon: ReactNode
  title: string
  description: string
  languegesList: LanguegeModel[]
}

const ExpertisesCard: FC<ExpertisesCardProps> = ({
  icon,
  title,
  description,
  languegesList,
}) => {
  return (
    <article className="expertisesCard__conteiner">
      <header className="expertisesCard__header">
        <span className="expertisesCard__header-icon" aria-hidden>
          {icon}
        </span>
        <h3 className="expertisesCard__title">{title}</h3>
      </header>

      <p className="expertisesCard__description">{description}</p>

      <ul className="expertisesCard__languages" aria-label="Tecnologias">
        {languegesList.map((languege) => (
          <li key={languege.name} className="expertisesCard__language">
            <span
              className="expertisesCard__language-icon"
              data-tooltip={languege.name}
              tabIndex={0}
              aria-label={languege.name}
            >
              {languege.icon}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ExpertisesCard
