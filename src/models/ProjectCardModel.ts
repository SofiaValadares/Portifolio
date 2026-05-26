import type { LanguegeModel } from './LanguegeModel'

export type ProjectCardVariation =
  | 'large'
  | 'double-horizontal'
  | 'standard'
  | 'double-vertical'

export type ProjectCardProps = {
  id: string
  name: string
  variation: ProjectCardVariation
  images?: string | string[]
  technologies: LanguegeModel[]
  projectHref: string
  githubUrl?: string
}

export type ProjectCardData = ProjectCardProps
