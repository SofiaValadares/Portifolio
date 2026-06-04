import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectLocale, setLocale, toggleLocale, type Locale } from '../store'
import {
  getHeadlineLines,
  getProjectCopyright,
  getProjectDescription,
  translate,
  type TranslationParams,
} from './translations'

export function useTranslation() {
  const locale = useAppSelector(selectLocale)
  const dispatch = useAppDispatch()

  const t = useCallback(
    (key: string, params?: TranslationParams) => translate(locale, key, params),
    [locale],
  )

  return {
    locale,
    t,
    setLocale: (next: Locale) => dispatch(setLocale(next)),
    toggleLocale: () => dispatch(toggleLocale()),
    getProjectDescription: (projectId: string, fallback: string) =>
      getProjectDescription(locale, projectId, fallback),
    getProjectCopyright: (projectId: string, fallback?: string) =>
      getProjectCopyright(locale, projectId, fallback),
    getHeadlineLines: () => getHeadlineLines(locale),
  }
}
