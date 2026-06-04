import type { SectionsPortifolioModel } from '../../models/SectionsPortifolioModel'
import Contatos from '../../pages/Portifolio/sections/contatos'
import Experiencia from '../../pages/Portifolio/sections/experiencia'
import Expertises from '../../pages/Portifolio/sections/expertises'
import Projetos from '../../pages/Portifolio/sections/projetos'
import {
  IconAtSign,
  IconBriefcase,
  IconCheckSquare,
  IconLayers,
} from '../../models/sectionIcons'
import type { Locale } from '../../i18n/localeSlice'
import { translate } from '../../i18n/translations'

export function getSectionsPortifolioList(locale: Locale): SectionsPortifolioModel[] {
  const t = (key: string) => translate(locale, key)

  return [
    {
      title: t('sections.expertises'),
      anchorId: 'expertises',
      icon: <IconCheckSquare />,
      content: Expertises,
    },
    {
      title: t('sections.projects'),
      anchorId: 'projetos',
      icon: <IconLayers />,
      content: Projetos,
    },
    {
      title: t('sections.experience'),
      anchorId: 'experiencia',
      icon: <IconBriefcase />,
      content: Experiencia,
    },
    {
      title: t('sections.contacts'),
      anchorId: 'contatos',
      icon: <IconAtSign />,
      content: Contatos,
    },
  ]
}

/** @deprecated Use getSectionsPortifolioList(locale) */
export const sectionsPortifolioList = getSectionsPortifolioList('pt')
