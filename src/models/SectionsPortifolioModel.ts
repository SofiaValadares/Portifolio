import type { ComponentType, ReactNode } from 'react'

/** Props passadas a cada componente de secção (vindos da lista). */
export type SectionContentProps = {
  anchorId: string
  title: string
}

/**
 * Secção do portfólio.
 * `icon` é JSX (SVG); `anchorId` alimenta `#anchor` na nav e o `id` da `<section>`.
 */
export interface SectionsPortifolioModel {
  title: string
  anchorId: string
  icon: ReactNode
  content: ComponentType<SectionContentProps>
}
