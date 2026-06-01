import { Link } from 'react-router-dom'
import type { ProjectModel } from '../../../../../../models/ProjectModel'
import { projectDetailPath } from '../../../../../../routes/paths'
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
      <Link
        className="photo-project-card__image"
        to={projectDetailPath(project.id)}
        aria-label={label}
      >
        <img
          className="photo-project-card__image-content"
          src={project.imagePrimary}
          alt={project.name}
          loading="lazy"
          decoding="async"
        />
      </Link>
    </div>
  )
}