import type { LanguegeModel } from './LanguegeModel'

/** Layout do card no grid de projetos (Figma). */
export type ProjectCardVariation =
  | 'large'
  | 'double-horizontal'
  | 'standard'
  | 'double-vertical'

export type ProjectCardProps = {
  name: string
  variation: ProjectCardVariation
  /** Uma URL ou duas, conforme a variação. Omitir usa `/default-image.png`. */
  images?: string | string[]
  technologies: LanguegeModel[]
  /** Página do projeto (rota futura). */
  projectHref: string
  githubUrl?: string
}

export type ProjectCardData = ProjectCardProps
