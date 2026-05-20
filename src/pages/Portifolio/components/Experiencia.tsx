import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import { ExperiencieAcordion } from '../../../components/ExperiencieAcordion'
import { experiencesAccordionData } from '../../../mocks/portifolio/experiencesAccordion'
import './Experiencia.css'

export default function Experiencia({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="experiencia page-portfolio-format--tall"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <ul className="experiencia__list">
        {experiencesAccordionData.map((item) => (
          <li key={`${item.local}-${item.position}-${item.dateStart.getTime()}`}>
            <ExperiencieAcordion {...item} />
          </li>
        ))}
      </ul>
    </PagePortifolioFormat>
  )
}
