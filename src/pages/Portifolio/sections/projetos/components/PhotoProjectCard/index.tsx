import type { ProjectModel } from '../../../../../../models/ProjectModel'
import './photoProjectCard.css'

interface PhotoProjectCardProps {
  project: ProjectModel
  ariaLabel?: string
}

export default function PhotoProjectCard({
  project,
  ariaLabel,
}: PhotoProjectCardProps) {
  const label = ariaLabel ?? `Ver detalhes do projeto ${project.name}`

  return (
    <div className="photo-project-card">
      <a
        className="photo-project-card__image"
        href={`/portifolio/projeto/${project.id}`}
        aria-label={label}
      >
        <img
          className="photo-project-card__image-content"
          src={project.imagePrimary}
          alt={project.name}
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  )
}