import type { ReactNode } from 'react'

export type PageConteinerProps = {
    isFullscreen?: boolean
    onScrollViewportRef?: (element: HTMLDivElement | null) => void
    ariaLabel?: string
    nav?: ReactNode
    children: ReactNode
}
