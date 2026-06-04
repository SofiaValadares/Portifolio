import type { Locale } from '../i18n/localeSlice'
import { translate } from '../i18n/translations'
import { monthsBetween } from './monthsBetween'

export function experienceDurationLabel(
  start: Date,
  end?: Date,
  locale: Locale = 'pt',
): string {
  const t = (key: string) => translate(locale, key)
  const endDate = end ?? new Date()
  const totalMonths = monthsBetween(start, endDate)

  if (totalMonths < 12) {
    return totalMonths === 1
      ? `1 ${t('experience.month')}`
      : `${totalMonths} ${t('experience.months')}`
  }

  const years = Math.floor(totalMonths / 12)
  return years === 1 ? `1 ${t('experience.year')}` : `${years} ${t('experience.years')}`
}
