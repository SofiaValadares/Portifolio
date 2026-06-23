import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'
import { useTranslation } from '../../i18n/useTranslation'
import './desktopHome.css'

export default function DesktopHome() {
  const navigate = useNavigateWithTransition()
  const { t } = useTranslation()

  return (
    <main className="desktop-home" aria-label={t('desktop.workspace')}>
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
            <span className="desktop-app__label">{t('desktop.portfolioApp')}</span>
          </a>
        </li>
      </ul>
      </div>
    </main>
  )
}
