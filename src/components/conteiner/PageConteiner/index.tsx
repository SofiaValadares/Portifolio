import type { PageConteinerProps } from './types'
import './pageConteiner.css'

const PageConteiner: React.FC<PageConteinerProps> = (
    {
        isFullscreen = false,
        onScrollViewportRef,
        ariaLabel = 'Página',
        nav,
        children,
    }) => {
    return (
        <main
            className={[
                'page-conteiner',
                isFullscreen ? 'page-conteiner--fullscreen' : '',
            ].filter(Boolean).join(' ')}
            aria-label={ariaLabel}
        >
            <div className="page-conteiner__shell">
                {nav}
                <div
                    ref={onScrollViewportRef}
                    className="page-conteiner__viewport"
                >
                    <div className="page-conteiner__scroll-content">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PageConteiner
export type { PageConteinerProps } from './types'
