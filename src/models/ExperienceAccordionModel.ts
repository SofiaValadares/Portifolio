import type { LanguegeModel } from './LanguegeModel'

export type ExperienceAccordionProps = {
  /** Instituição / empresa */
  local: string
  /** Cargo ou função */
  position: string
  dateStart: Date
  dateEnd?: Date
  description: string
  /** Caminho em `public/` (ex.: `/companesLogos/cesar.png`) */
  logo: string
  skills: LanguegeModel[]
  isOpenDefault?: boolean
}

export type ExperienceAccordionData = ExperienceAccordionProps
