import type { ComponentType, ReactNode } from 'react'

export interface SectionContentProps {
  anchorId: string
  title: string
}

export interface SectionsPortifolioModel {
  title: string
  anchorId: string
  icon: ReactNode
  content: ComponentType<SectionContentProps>
}
