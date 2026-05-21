export interface ProjectModel {
  id: string
  name: string
  description: string
  copyright?: string
  imagePrimary: string
  imageSecondary?: string
  imageDetails?: string
  technologies: string[]
  githubUrl?: string
  projectHref?: string
}