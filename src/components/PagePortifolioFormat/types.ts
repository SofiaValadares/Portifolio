import type { ReactNode } from 'react'
import type { SectionsPortifolioModel } from '../../models/SectionsPortifolioModel'

export type BrowserWindowControls = {
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  isMaximized?: boolean
}

export type PagePortifolioSectionProps = {
  sectionId: string
  title: ReactNode
  children: ReactNode
  className?: string
}

export type PagePortifolioShellProps = {
  links: SectionsPortifolioModel[]
  activeAnchorId: string
  windowControls: BrowserWindowControls
  onScrollViewportRef?: (element: HTMLDivElement | null) => void
  children: ReactNode
}
