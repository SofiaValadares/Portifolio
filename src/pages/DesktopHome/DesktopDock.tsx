import { Power } from 'lucide-react'
import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'

export default function DesktopDock() {
  const navigate = useNavigateWithTransition()

  return (
    <footer className="desktop-dock" role="toolbar" aria-label="Dock do sistema">
      <ul className="desktop-dock__list">
        <li>
          <button
            type="button"
            className="desktop-dock__action"
            onClick={() => navigate('/splash')}
            aria-label="Desligar — voltar à tela inicial"
          >
            <span className="desktop-dock__icon" aria-hidden>
              <Power size={15} strokeWidth={2.25} />
            </span>
            <span className="desktop-dock__label">Desligar</span>
          </button>
        </li>
      </ul>
    </footer>
  )
}
