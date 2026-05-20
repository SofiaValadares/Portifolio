import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import PagePortifolioFormat from '../../../components/PagePortifolioFormat'
import { ProjectCard } from '../../../components/ProjectCard'
import { projectsCardsData } from '../../../mocks'
import './Projetos.css'

const HEADLINE_LINES = [
  'INOVAÇÃO COM',
  'IMPACTO REAL NA',
  'VIDA DAS PESSOAS',
] as const

export default function Projetos({ anchorId, title }: SectionContentProps) {
  return (
    <PagePortifolioFormat
      sectionId={anchorId}
      className="projetos page-portfolio-format--tall"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <div className="projetos__content">
        <section className="projetos__hero" aria-label="Introdução">
          <div className="projetos__hero-copy">
            <p className="projetos__headline">
              {HEADLINE_LINES.map((line) => (
                <span key={line} className="projetos__headline-line">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="projetos__hero-media">
            <div
              className="projetos__hero-image-wrap"
              role="img"
              aria-label="Pré-visualização do projeto"
            />
          </div>
        </section>

        <div className="projetos__grid" aria-label="Galeria de projetos">
          {projectsCardsData.map((card, index) => (
            <ProjectCard key={`${card.name}-${card.variation}-${index}`} {...card} />
          ))}
        </div>
      </div>
    </PagePortifolioFormat>
  )
}
