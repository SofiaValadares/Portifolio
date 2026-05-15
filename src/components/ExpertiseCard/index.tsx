import type { ReactNode } from 'react'
import type { LanguegeModel } from '../../models/LanguegeModel.ts'
import './expertiseCard.css'

interface ExpertiseCardProps {
  icon: ReactNode
  title: string
  description: string
  languegesList: LanguegeModel[]
}

export function ExpertiseCard({
  icon,
  title,
  description,
  languegesList,
}: ExpertiseCardProps) {
  return (
    <article className="expertiseCard__conteiner">
      <header className="expertiseCard__header">
        <span className="expertiseCard__header-icon" aria-hidden>
          {icon}
        </span>
        <h3 className="expertiseCard__title">{title}</h3>
      </header>

      <p className="expertiseCard__description">{description}</p>

      <ul className="expertiseCard__languages" aria-label="Tecnologias">
        {languegesList.map((languege) => (
          <li key={languege.name} className="expertiseCard__language">
            <span
              className="expertiseCard__language-icon"
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
