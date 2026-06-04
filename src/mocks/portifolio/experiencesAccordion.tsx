import { useMemo } from 'react'
import type { ExperienceAccordionData } from '../../models/ExperienceAccordionModel'
import { langLogo } from '../shared/langLogo'
import type { Locale } from '../../i18n/localeSlice'
import { translate } from '../../i18n/translations'

export function getExperiencesAccordionData(locale: Locale): ExperienceAccordionData[] {
  const t = (key: string) => translate(locale, key)

  return [
    {
      local: 'CESAR',
      position: t('experience.items.cesar.position'),
      dateStart: new Date(2024, 8, 16),
      description: t('experience.items.cesar.description'),
      logo: '/companesLogos/cesar.png',
      skills: [
        { name: 'Angular', icon: langLogo('angular.png') },
        { name: 'React', icon: langLogo('react.png') },
        { name: 'TypeScript', icon: langLogo('typescript.png') },
        { name: 'JavaScript', icon: langLogo('javascript.png') },
        { name: 'Java', icon: langLogo('java.png') },
        { name: 'Kotlin', icon: langLogo('kotlin.png') },
        { name: 'Spring Boot', icon: langLogo('springboot.png') },
        { name: 'Docker', icon: langLogo('docker.png') },
        { name: 'Git', icon: langLogo('git.png') },
      ],
      isOpenDefault: true,
    },
    {
      local: 'CNPq',
      position: t('experience.items.cnpq.position'),
      dateStart: new Date(2023, 0, 1),
      dateEnd: new Date(2023, 6, 31),
      description: t('experience.items.cnpq.description'),
      logo: '/companesLogos/cnpq.png',
      skills: [{ name: 'Python', icon: langLogo('pyhton.png') }],
      isOpenDefault: false,
    },
  ]
}

export function useExperiencesAccordionData(locale: Locale) {
  return useMemo(() => getExperiencesAccordionData(locale), [locale])
}

/** @deprecated Use getExperiencesAccordionData(locale) */
export const experiencesAccordionData = getExperiencesAccordionData('pt')
