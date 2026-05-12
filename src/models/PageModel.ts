import type { ComponentType, ReactNode } from 'react'

/**
 * Componente de página sem props obrigatórias (caso típico com rotas estáticas).
 * Se uma rota tiver params, modela noutro tipo ou usa `PageModelGeneric`.
 */
export type PageView = ComponentType<Record<string, never>>

/**
 * Metadados de uma página para navegação, router ou menu.
 */
export interface PageModel {
  /** Identificador estável (`key`, comparações, estado de UI). */
  id: string
  /** Texto exibido no menu / cabeçalho. */
  name: string
  /** Caminho relativo opcional (ex. `/expertises` com React Router). */
  path?: string
  /** Conteúdo do ícone na navegação (SVG, `<img />`, string curta, etc.). */
  icon?: ReactNode
  /** Componente raiz da página. */
  content: PageView
}

/**
 * Variante quando o componente da página recebe props tipadas (ex. params de rota).
 */
export interface PageModelGeneric<Props extends Record<string, unknown>> {
  id: string
  name: string
  path?: string
  icon?: ReactNode
  content: ComponentType<Props>
}
