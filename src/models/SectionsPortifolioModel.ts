import type { ComponentType, ReactNode } from 'react'

/**
 * Secção do portfólio.
 * O React não traz ícones nativos: `icon` é o JSX do ícone (ex. lucide-react, heroicons, SVG).
 */
export interface SectionsPortifolioModel {
  title: string
  icon: ReactNode
  content: ComponentType<Record<string, never>>
}
