import type { ReactNode } from 'react'
import type { LanguegeModel } from './LanguegeModel'

export type ExpertiseCardData = {
  icon: ReactNode
  title: string
  description: string
  languegesList: LanguegeModel[]
}
