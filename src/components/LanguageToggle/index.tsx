import { useTranslation } from '../../i18n/useTranslation'
import './languageToggle.css'

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useTranslation()
  const nextLabel = locale === 'pt' ? t('chrome.languageEn') : t('chrome.languagePt')

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
