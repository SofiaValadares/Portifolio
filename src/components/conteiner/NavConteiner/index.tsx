import {
    useEffect,
    useId,
    useState,
    type MouseEvent,
    type ReactNode,
} from 'react'
import {
    Maximize2,
    Menu,
    Minimize2,
    Power,
    X,
} from 'lucide-react'
import type { SectionsPortifolioModel } from '../../../models/SectionsPortifolioModel.ts'
import { useNavigateWithTransition } from '../../../hooks/useNavigateWithTransition'
import type { BrowserWindowControls } from './types'
import './browserChrome.css'

type BrowserChromeTab = Pick<SectionsPortifolioModel, 'title' | 'anchorId'> & {
    icon: ReactNode
    href?: string
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

interface NavConteinerProps {
    sections: BrowserChromeTab[],
    activeAnchorId: string,
    windowControls: BrowserWindowControls,
}

const NavConteiner: React.FC<NavConteinerProps> = (
    {
        sections,
        activeAnchorId,
        windowControls,
    }) => {
    const { onMaximize, isMaximized = false } = windowControls
    const navigate = useNavigateWithTransition()
    const [menuOpen, setMenuOpen] = useState(false)
    const menuId = useId()
    const activeSection = sections.find((section) => section.anchorId === activeAnchorId)

    useEffect(() => {
        setMenuOpen(false)
    }, [activeAnchorId])

    useEffect(() => {
        if (!menuOpen) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [menuOpen])

    const handleTabClick = (
        event: MouseEvent<HTMLAnchorElement>,
        onClick?: (event: MouseEvent<HTMLAnchorElement>) => void,
    ) => {
        onClick?.(event)
        setMenuOpen(false)
    }

    const renderTabLink = (
        { title, anchorId, icon, href, onClick }: BrowserChromeTab,
        variant: 'tab' | 'menu-item',
    ) => {
        const isActive = activeAnchorId === anchorId
        const className = [
            variant === 'tab' ? 'browser-chrome__tab' : 'browser-chrome__menu-link',
            isActive
                ? variant === 'tab'
                    ? 'browser-chrome__tab--active'
                    : 'browser-chrome__menu-link--active'
                : '',
        ].filter(Boolean).join(' ')

        return (
            <a
                className={className}
                href={href ?? `#${anchorId}`}
                aria-current={isActive ? 'page' : undefined}
                role={variant === 'menu-item' ? 'menuitem' : undefined}
                onClick={(event) => handleTabClick(event, onClick)}
            >
                <span
                    className={
                        variant === 'tab'
                            ? 'browser-chrome__tab-icon'
                            : 'browser-chrome__menu-link-icon'
                    }
                    aria-hidden
                >
                    {icon}
                </span>
                <span
                    className={
                        variant === 'tab'
                            ? 'browser-chrome__tab-label'
                            : 'browser-chrome__menu-link-label'
                    }
                >
                    {title}
                </span>
            </a>
        )
    }

    return (
        <header className="browser-chrome" aria-label="Janela do navegador">
            <nav className="browser-chrome__tabs" aria-label="Abas do portfólio">
                <div className="browser-chrome__traffic">
                    <button
                        type="button"
                        className="browser-chrome__window-action"
                        aria-label={isMaximized ? 'Restaurar janela' : 'Maximizar janela'}
                        aria-pressed={isMaximized}
                        onClick={onMaximize}
                        title={isMaximized ? 'Restaurar janela' : 'Tela cheia'}
                    >
                        {isMaximized ? (
                            <Minimize2 aria-hidden size={16} strokeWidth={2.35} />
                        ) : (
                            <Maximize2 aria-hidden size={16} strokeWidth={2.35} />
                        )}
                    </button>
                </div>

                <ul className="browser-chrome__tab-list browser-chrome__tab-list--desktop">
                    {sections.map((section) => (
                        <li key={section.anchorId} className="browser-chrome__tab-item">
                            {renderTabLink(section, 'tab')}
                        </li>
                    ))}
                </ul>

                <div className="browser-chrome__mobile-bar">
                    <button
                        type="button"
                        className="browser-chrome__menu-toggle"
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? (
                            <X aria-hidden size={18} strokeWidth={2.35} />
                        ) : (
                            <Menu aria-hidden size={18} strokeWidth={2.35} />
                        )}
                    </button>
                    <span className="browser-chrome__mobile-title">
                        {activeSection?.title ?? 'Menu'}
                    </span>
                </div>

                <button
                    type="button"
                    className="browser-chrome__power-action"
                    aria-label="Desligar — voltar à tela inicial"
                    title="Desligar"
                    onClick={() => navigate('/splash')}
                >
                    <Power aria-hidden size={18} strokeWidth={2.35} />
                </button>

                {menuOpen ? (
                    <>
                        <button
                            type="button"
                            className="browser-chrome__menu-backdrop"
                            aria-label="Fechar menu"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div
                            id={menuId}
                            className="browser-chrome__mobile-menu"
                            role="menu"
                            aria-label="Seções do portfólio"
                        >
                            <ul className="browser-chrome__menu-list">
                                {sections.map((section) => (
                                    <li key={section.anchorId}>
                                        {renderTabLink(section, 'menu-item')}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : null}
            </nav>
        </header>
    )
}

export default NavConteiner
