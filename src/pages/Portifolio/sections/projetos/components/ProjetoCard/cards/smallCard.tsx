import {
  ProjectCardHeader,
  ProjectCardShell,
  ProjectCardTechList,
  type ProjetoCardViewProps,
} from './cardParts'
import '../projetosCard.css'

export default function SmallCard({
  id,
  name,
  images,
  technologies,
  projectHref,
  githubUrl,
}: ProjetoCardViewProps) {
  return (
    <ProjectCardShell id={id} name={name} className="project-card project-card--standard">
      <ProjectCardHeader name={name} projectHref={projectHref} githubUrl={githubUrl} />

      <div className="project-card__body">
        <div className="project-card__media-cell">
          <img
            className="project-card__image"
            src={images[0]}
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <ProjectCardTechList technologies={technologies} layout="column" />
      </div>
    </ProjectCardShell>
  )
}