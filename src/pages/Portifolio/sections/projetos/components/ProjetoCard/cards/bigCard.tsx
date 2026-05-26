import {
  ProjectCardHeader,
  ProjectCardShell,
  ProjectCardTechList,
  type ProjetoCardViewProps,
} from './cardParts'
import '../projetosCard.css'

export default function BigCard({
  id,
  name,
  images,
  technologies,
  projectHref,
  githubUrl,
}: ProjetoCardViewProps) {
  return (
    <ProjectCardShell id={id} name={name} className="project-card project-card--large">
      <ProjectCardHeader name={name} projectHref={projectHref} githubUrl={githubUrl} />

      <div className="project-card__body">
        <div className="project-card__media-cell project-card__big-image">
          <img
            className="project-card__image"
            src={images[0]}
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <ProjectCardTechList technologies={technologies} layout="row" />
      </div>
    </ProjectCardShell>
  )
}