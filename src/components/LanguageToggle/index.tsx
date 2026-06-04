import { useTranslation } from '../../i18n/useTranslation'
import './languageToggle.css'

type LanguageToggleProps = {
  variant?: 'chrome' | 'dock'
}

export default function LanguageToggle({ variant = 'chrome' }: LanguageToggleProps) {
  const { locale, toggleLocale, t } = useTranslation()
  const activeLabel = locale === 'pt' ? t('chrome.languagePt') : t('chrome.languageEn')
  const nextLabel = locale === 'pt' ? t('chrome.languageEn') : t('chrome.languagePt')

  if (variant === 'dock') {
    return (
      <button
        type="button"
        className="desktop-dock__action language-toggle language-toggle--dock"
        onClick={toggleLocale}
        aria-label={
          locale === 'pt' ? t('chrome.switchToEnglish') : t('chrome.switchToPortuguese')
        }
        title={nextLabel}
      >
        <span className="desktop-dock__icon language-toggle__dock-icon" aria-hidden>
          {activeLabel}
        </span>
        <span className="desktop-dock__label">{t('chrome.language')}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="language-toggle language-toggle--chrome"
      onClick={toggleLocale}
      aria-label={
        locale === 'pt' ? t('chrome.switchToEnglish') : t('chrome.switchToPortuguese')
      }
      title={nextLabel}
    >
      <span className="language-toggle__option" aria-hidden={locale !== 'pt'}>
        {t('chrome.languagePt')}
      </span>
      <span className="language-toggle__separator" aria-hidden>
        /
      </span>
      <span className="language-toggle__option" aria-hidden={locale !== 'en'}>
        {t('chrome.languageEn')}
      </span>
    </button>
  )
}
