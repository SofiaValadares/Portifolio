import type { MouseEvent, ReactNode } from 'react'
import {
    Maximize2,
    Minimize2,
} from 'lucide-react'
import type { SectionsPortifolioModel } from '../../../models/SectionsPortifolioModel.ts'
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
                <ul className="browser-chrome__tab-list">
                    {sections.map(({ title, anchorId, icon, href, onClick }) => {
                        const isActive = activeAnchorId === anchorId
                        return (
                            <li key={anchorId} className="browser-chrome__tab-item">
                                <a
                                    className={
                                        isActive
                                            ? 'browser-chrome__tab browser-chrome__tab--active'
                                            : 'browser-chrome__tab'
                                    }
                                    href={href ?? `#${anchorId}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={onClick}
                                >
                                    <span className="browser-chrome__tab-icon" aria-hidden>
                                        {icon}
                                    </span>
                                    <span className="browser-chrome__tab-label">{title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default NavConteiner
