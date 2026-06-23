import { useEffect, useState } from 'react'
import { PortfolioScrollProvider } from '../../../context/PortfolioScrollContext'
import PortfolioOrganicBackdrop from './PortfolioOrganicBackdrop'
import type { PageConteinerProps } from './types'
import './pageConteiner.css'

const PageConteiner: React.FC<PageConteinerProps> = (
    {
        onScrollViewportRef,
        ariaLabel = 'Página',
        nav,
        children,
    }) => {
    const [scrollRoot, setScrollRoot] = useState<HTMLDivElement | null>(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)

    const handleViewportRef = (element: HTMLDivElement | null) => {
        setScrollRoot(element)
        onScrollViewportRef?.(element)
    }

    useEffect(() => {
        if (!scrollRoot) return

        const updateScrollProgress = () => {
            const maxScroll = scrollRoot.scrollHeight - scrollRoot.clientHeight
            setScrollTop(scrollRoot.scrollTop)
            setScrollProgress(maxScroll > 0 ? scrollRoot.scrollTop / maxScroll : 0)
        }

        updateScrollProgress()
        scrollRoot.addEventListener('scroll', updateScrollProgress, { passive: true })
        window.addEventListener('resize', updateScrollProgress)

        return () => {
            scrollRoot.removeEventListener('scroll', updateScrollProgress)
            window.removeEventListener('resize', updateScrollProgress)
        }
    }, [scrollRoot])

    return (
        <main
            className="page-conteiner"
            aria-label={ariaLabel}
        >
            <div className="page-conteiner__shell">
                {nav}
                <div
                    ref={handleViewportRef}
                    className="page-conteiner__viewport"
                >
                    <div
                        className="page-conteiner__scroll-progress"
                        aria-hidden
                        style={{ transform: `scaleX(${scrollProgress})` }}
                    />
                    <PortfolioScrollProvider scrollRoot={scrollRoot}>
                        <div
                            className="page-conteiner__scroll-content"
                            style={{ '--scroll-top': scrollTop } as React.CSSProperties}
                        >
                            <div
                                className="page-conteiner__organic-layer"
                                aria-hidden
                            >
                                <PortfolioOrganicBackdrop />
                            </div>
                            {children}
                        </div>
                    </PortfolioScrollProvider>
                </div>
            </div>
        </main>
    )
}

export default PageConteiner
export type { PageConteinerProps } from './types'
