import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import './Projetos.css'

export default function Projetos({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="projetos"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <p className="portifolio-screem__hint">Conteúdo em construção.</p>
    </PagePortifolioFormat>
  )
}
