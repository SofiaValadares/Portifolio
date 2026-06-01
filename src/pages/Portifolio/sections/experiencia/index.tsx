import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { SectionConteiner } from '../../../../components/conteiner'
import { experiencesAccordionData } from '../../../../mocks/portifolio/experiencesAccordion'
import ExperienceAcordion from './components/ExperienceAcordion'
import './experiencia.css'

export default function Experiencia({ anchorId, title }: SectionContentProps) {
  return (
    <SectionConteiner
      sectionId={anchorId}
      blockClass="page-portfolio-format"
      className="experiencia"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <ul className="experiencia__list">
        {experiencesAccordionData.map((item, index) => (
          <li key={`${item.local}-${item.position}-${item.dateStart.getTime()}`}>
            <ExperienceAcordion {...item} isOpenDefault={index === 0} />
          </li>
        ))}
      </ul>
    </SectionConteiner>
  )
}
