import { useMemo } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectLocale } from '../../store'
import {
  getProjectDetailsContent,
  type ProjectDetailsKey,
} from './content'
import { getProjectDetailsShared } from './shared'

export function useProjectDetailsContent<K extends ProjectDetailsKey>(
  projectId: string,
  expectedKey: K,
) {
  const locale = useAppSelector(selectLocale)

  return useMemo(() => {
    const content = getProjectDetailsContent(locale, projectId, expectedKey)
    const shared = getProjectDetailsShared(locale)

    return {
      key: expectedKey,
      content,
      shared,
      locale,
    }
  }, [expectedKey, locale, projectId])
}

export type ProjectDetailsContentResult<K extends ProjectDetailsKey> = ReturnType<
  typeof useProjectDetailsContent<K>
>
