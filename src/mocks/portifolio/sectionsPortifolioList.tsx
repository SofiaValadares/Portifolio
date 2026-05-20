import type { SectionsPortifolioModel } from '../../models/SectionsPortifolioModel'
import Contatos from '../../pages/Portifolio/components/Contatos'
import Experiencia from '../../pages/Portifolio/components/Experiencia'
import Expertises from '../../pages/Portifolio/components/Expertises'
import Projetos from '../../pages/Portifolio/components/Projetos'
import {
  IconAtSign,
  IconBriefcase,
  IconCheckSquare,
  IconLayers,
} from '../../models/sectionIcons'

export const sectionsPortifolioList: SectionsPortifolioModel[] = [
  {
    title: 'Expertises',
    anchorId: 'expertises',
    icon: <IconCheckSquare />,
    content: Expertises,
  },
  {
    title: 'Projetos',
    anchorId: 'projetos',
    icon: <IconLayers />,
    content: Projetos,
  },
  {
    title: 'Experiência',
    anchorId: 'experiencia',
    icon: <IconBriefcase />,
    content: Experiencia,
  },
  {
    title: 'Contatos',
    anchorId: 'contatos',
    icon: <IconAtSign />,
    content: Contatos,
  },
]
