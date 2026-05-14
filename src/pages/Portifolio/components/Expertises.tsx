import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import './Expertises.css'

export default function Expertises({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="expertises"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <p className="portifolio-screem__hint">Conteúdo em construção.</p>
    </PagePortifolioFormat>
  )
}
