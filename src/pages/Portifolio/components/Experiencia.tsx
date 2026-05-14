import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import './Experiencia.css'

export default function Experiencia({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="experiencia"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <p className="portifolio-screem__hint">Conteúdo em construção.</p>
    </PagePortifolioFormat>
  )
}
