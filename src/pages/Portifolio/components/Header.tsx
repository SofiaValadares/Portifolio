import type { SectionsPortifolioModel } from '../../../models/SectionsPortifolioModel'
import './Header.css'

interface HeaderProps {
  logoText: string
  links: SectionsPortifolioModel[]
  activeAnchorId: string
}

export default function Header({
  logoText,
  links,
  activeAnchorId,
}: HeaderProps) {
  return (
    <div className="header__container">
      <p className="header__logo">{logoText}</p>
      <nav className="header__nav" aria-label="Secções do portfólio">
        <ul className="header__nav-list">
          {links.map(({ title, anchorId, icon }) => {
            const isActive = activeAnchorId === anchorId
            return (
              <li key={anchorId} className="header__nav-item">
                <a
                  className={
                    isActive
                      ? 'header__nav-link header__nav-link--active'
                      : 'header__nav-link'
                  }
                  href={`#${anchorId}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className="header__nav-icon" aria-hidden>
                    {icon}
                  </span>
                  <span className="header__nav-label">{title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
