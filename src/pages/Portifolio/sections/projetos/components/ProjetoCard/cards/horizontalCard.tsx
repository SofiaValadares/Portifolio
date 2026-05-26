import {
  ProjectCardHeader,
  ProjectCardShell,
  ProjectCardTechList,
  type ProjetoCardViewProps,
} from './cardParts'
import '../projetosCard.css'

export default function HorizontalCard({
  id,
  name,
  images,
  technologies,
  projectHref,
  githubUrl,
}: ProjetoCardViewProps) {
  return (
    <ProjectCardShell id={id} name={name} className="project-card project-card--double-horizontal">
      <ProjectCardHeader name={name} projectHref={projectHref} githubUrl={githubUrl} />

      <div className="project-card__body">
        <div className="project-card__horizontal-layout">
          <div className="project-card__media-cell project-card__horizontal-image">
            <img
              className="project-card__image"
              src={images[0]}
              alt={name}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="project-card__horizontal-column">
            <div className="project-card__media-cell project-card__horizontal-image">
              <img
                className="project-card__image"
                src={images[1]}
                alt={name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <ProjectCardTechList technologies={technologies} layout="row" />
          </div>
        </div>
      </div>
    </ProjectCardShell>
  )
}