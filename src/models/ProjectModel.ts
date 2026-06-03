import type { LanguegeModel } from './LanguegeModel'

export interface ProjectModel {
  id: string
  name: string
  description: string
  copyright?: string
  imagePrimary: string
  imageSecondary?: string
  imageDetails?: string
  technologies: LanguegeModel[]
  githubUrl?: string
  projectHref?: string
}