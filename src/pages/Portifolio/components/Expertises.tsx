import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import { ExpertiseCard } from '../../../components/ExpertiseCard'
import { expertisesCardsData } from '../../../mocks'
import './Expertises.css'

export default function Expertises({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="expertises page-portfolio-format--tall"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <div className="expertises__content">
        <p className="ds-big-text expertises__intro">
          <span>Desenvolvimento Web</span> em <span>Contextos Ágeis</span> com
          soluções de ponta a ponta: <span>Front-end e Back-end</span>.
        </p>

        <div className="expertises__cards">
          {expertisesCardsData.map((card) => (
            <ExpertiseCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              languegesList={card.languegesList}
            />
          ))}
        </div>
      </div>
    </PagePortifolioFormat>
  )
}
