import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { SectionConteiner } from '../../../../components/conteiner'
import { projectsCardsData } from '../../../../mocks'
import PhotoProjectCard from './components/PhotoProjectCard'
import { ProjetoCard } from './components/ProjetoCard'
import './projetos.css'

const HEADLINE_LINES = [
  'INOVAÇÃO COM',
  'IMPACTO REAL NA',
  'VIDA DAS PESSOAS',
] as const

export default function Projetos({ anchorId, title }: SectionContentProps) {
  return (
    <SectionConteiner
      sectionId={anchorId}
      blockClass="page-portfolio-format"
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

          <PhotoProjectCard imageUrl="/default-image.png" link="#projetos" />
        </section>

        <div className="projetos__grid" aria-label="Galeria de projetos">
          {projectsCardsData.map((card, index) => (
            <ProjetoCard key={`${card.name}-${card.variation}-${index}`} {...card} />
          ))}
        </div>
      </div>
    </SectionConteiner>
  )
}
