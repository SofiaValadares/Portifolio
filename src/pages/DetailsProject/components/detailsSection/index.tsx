import type { ProjectModel } from '../../../../models/ProjectModel'

type ProjectDetailsContentProps = {
  project: ProjectModel | undefined
}

export function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
  if (!project) return null

  const DetailsComponent = project.detailsComponent

  return <DetailsComponent project={project} />
}
