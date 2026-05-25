import type { SectionsPortifolioModel } from '../../../models/SectionsPortifolioModel.ts'
import type { BrowserWindowControls } from './types'
import './browserChrome.css'

interface NavConteinerProps {
    sections: SectionsPortifolioModel[],
    activeAnchorId: string,
    windowControls: BrowserWindowControls,
}

const NavConteiner: React.FC<NavConteinerProps> = (
    {
        sections,
        activeAnchorId,
        windowControls,
    }) => {
    const { onClose, onMaximize, isMaximized = false } = windowControls

    return (
        <header className="browser-chrome" aria-label="Janela do navegador">
            <nav className="browser-chrome__tabs" aria-label="Abas do portfólio">
                <div className="browser-chrome__traffic">
                    <button
                        type="button"
                        className="browser-chrome__dot browser-chrome__dot--close"
                        aria-label="Fechar janela"
                        onClick={onClose}
                    />
                    <button
                        type="button"
                        className="browser-chrome__dot browser-chrome__dot--maximize"
                        aria-label={isMaximized ? 'Restaurar janela' : 'Maximizar janela'}
                        aria-pressed={isMaximized}
                        onClick={onMaximize}
                    />
                </div>
                <ul className="browser-chrome__tab-list">
                    {sections.map(({ title, anchorId, icon }) => {
                        const isActive = activeAnchorId === anchorId
                        return (
                            <li key={anchorId} className="browser-chrome__tab-item">
                                <a
                                    className={
                                        isActive
                                            ? 'browser-chrome__tab browser-chrome__tab--active'
                                            : 'browser-chrome__tab'
                                    }
                                    href={`#${anchorId}`}
                                    aria-current={isActive ? 'page' : undefined}
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
