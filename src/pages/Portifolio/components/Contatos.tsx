import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import './Contatos.css'

export default function Contatos({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="contatos"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <p className="portifolio-screem__hint">Conteúdo em construção.</p>
    </PagePortifolioFormat>
  )
}
