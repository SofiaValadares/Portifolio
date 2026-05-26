import type { ProjectModel } from './ProjectModel'

export type ProjectCardVariation =
  | 'large'
  | 'double-horizontal'
  | 'standard'
  | 'double-vertical'

export type ProjectCardData = {
  id: string
  variation: ProjectCardVariation
  project: ProjectModel
}
