import type { ComponentType } from 'react'
import type { LanguegeModel } from './LanguegeModel'

export type ProjectDetailsComponentProps = {
  project: ProjectModel
}

export type ProjectDetailsComponent = ComponentType<ProjectDetailsComponentProps>

export interface ProjectModel {
  id: string
  name: string
  description: string
  copyright?: string
  imagePrimary: string
  imageSecondary?: string
  technologies: LanguegeModel[]
  githubUrl?: string
  projectHref?: string
  detailsComponent: ProjectDetailsComponent
}
