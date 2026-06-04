import { useMemo } from 'react'
import {
  IconBarChart,
  IconCode,
  IconDatabase,
} from '../../models/sectionIcons'
import type { ExpertiseCardData } from '../../models/ExpertiseCardModel'
import type { Locale } from '../../i18n/localeSlice'
import { translate } from '../../i18n/translations'
import { langLogo } from '../shared/langLogo'

export function getExpertisesCardsData(locale: Locale): ExpertiseCardData[] {
  const t = (key: string) => translate(locale, key)

  return [
    {
      icon: <IconCode />,
      title: t('expertises.cards.frontend.title'),
      description: t('expertises.cards.frontend.description'),
      languegesList: [
        { name: 'React', icon: langLogo('react.png') },
        { name: 'Angular', icon: langLogo('angular.png') },
        { name: 'TypeScript', icon: langLogo('typescript.png') },
        { name: 'JavaScript', icon: langLogo('javascript.png') },
        { name: 'HTML5', icon: langLogo('html.png') },
        { name: 'CSS3', icon: langLogo('css.png') },
      ],
    },
    {
      icon: <IconDatabase />,
      title: t('expertises.cards.backend.title'),
      description: t('expertises.cards.backend.description'),
      languegesList: [
        { name: 'Java', icon: langLogo('java.png') },
        { name: 'Spring Boot', icon: langLogo('springboot.png') },
        { name: 'PostgreSQL', icon: langLogo('postegres.png') },
      ],
    },
    {
      icon: <IconBarChart />,
      title: t('expertises.cards.agile.title'),
      description: t('expertises.cards.agile.description'),
      languegesList: [
        { name: 'Git', icon: langLogo('git.png') },
        { name: 'Docker', icon: langLogo('docker.png') },
      ],
    },
  ]
}

export function useExpertisesCardsData(locale: Locale) {
  return useMemo(() => getExpertisesCardsData(locale), [locale])
}

/** @deprecated Use getExpertisesCardsData(locale) */
export const expertisesCardsData = getExpertisesCardsData('pt')
