import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { SectionConteiner } from '../../../../components/conteiner'
import {
  projectsCardsData,
  projectsData,
} from '../../../../mocks'
import { useTranslation } from '../../../../i18n/useTranslation'
import PhotoProjectCard from './components/PhotoProjectCard'
import { ProjetoCard } from './components/ProjetoCard'
import './projetos.css'

const featuredProject = projectsData[0]

export default function Projetos({ anchorId, title }: SectionContentProps) {
  const { t, getHeadlineLines } = useTranslation()
  const headlineLines = getHeadlineLines()

  return (
    <SectionConteiner
      sectionId={anchorId}
      blockClass="page-portfolio-format"
      className="projetos page-portfolio-format--tall"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <div className="projetos__content">
        <section className="projetos__hero" aria-label={t('projects.intro')}>
          <div className="projetos__hero-copy">
            <p className="projetos__headline">
              {headlineLines.map((line) => (
                <span key={line} className="projetos__headline-line">
                  {line}
                </span>
              ))}
            </p>
          </div>

          {featuredProject ? <PhotoProjectCard project={featuredProject} /> : null}
        </section>

        <div className="projetos__grid" aria-label={t('projects.gallery')}>
          {projectsCardsData.map((card, index) => (
            <ProjetoCard key={`${card.id}-${card.variation}-${index}`} {...card} />
          ))}
        </div>
      </div>
    </SectionConteiner>
  )
}
