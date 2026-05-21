import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'
import DesktopDock from './DesktopDock'
import './desktopHome.css'

export default function DesktopHome() {
  const navigate = useNavigateWithTransition()

  return (
    <main className="desktop-home" aria-label="Área de trabalho">
      <div className="desktop-home__workspace">
      <ul className="desktop-home__apps">
        <li>
          <a
            href="/portfolio"
            className="desktop-app"
            onClick={(event) => {
              event.preventDefault()
              navigate('/portfolio')
            }}
          >
            <span className="desktop-app__icon">
              <code className="desktop-app__code">&lt;S/&gt;</code>
            </span>
            <span className="desktop-app__label">Portfólio</span>
          </a>
        </li>
      </ul>
      </div>
      <DesktopDock />
    </main>
  )
}
