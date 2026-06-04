import { Power } from 'lucide-react'
import LanguageToggle from '../../components/LanguageToggle'
import { useTranslation } from '../../i18n/useTranslation'
import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'
import './desktopHome.css'

export default function DesktopDock() {
  const navigate = useNavigateWithTransition()
  const { t } = useTranslation()

  return (
    <footer className="desktop-dock" role="toolbar" aria-label={t('desktop.dock')}>
      <ul className="desktop-dock__list">
        <li className="desktop-dock__item--language">
          <LanguageToggle variant="dock" />
        </li>
        <li className="desktop-dock__item--power">
          <button
            type="button"
            className="desktop-dock__action"
            onClick={() => navigate('/', { state: { showSplash: true } })}
            aria-label={t('chrome.powerOff')}
          >
            <span className="desktop-dock__icon" aria-hidden>
              <Power size={15} strokeWidth={2.25} />
            </span>
            <span className="desktop-dock__label">{t('chrome.powerOffShort')}</span>
          </button>
        </li>
      </ul>
    </footer>
  )
}
