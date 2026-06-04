import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { DEFAULT_PROJECT_IMAGE } from '../projects'

export default function DefaultProjectDetails({ project }: ProjectDetailsComponentProps) {
  return (
    <img
      className="details-project__details-image"
      src={project.imagePrimary ?? DEFAULT_PROJECT_IMAGE}
      alt={`Detalhes do projeto ${project.name}`}
      loading="eager"
      decoding="async"
    />
  )
}
