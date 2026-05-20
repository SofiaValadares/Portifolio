import {
  IconBarChart,
  IconCode,
  IconDatabase,
} from '../../models/sectionIcons'
import type { ExpertiseCardData } from '../../models/ExpertiseCardModel'
import { langLogo } from '../shared/langLogo'

export const expertisesCardsData: ExpertiseCardData[] = [
  {
    icon: <IconCode />,
    title: 'FrontEnd',
    description:
      'Desenvolvimento de interfaces modernas, componentes reutilizáveis, gestão de estado e integração eficiente com APIs, priorizando UX fluida.',
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
    title: 'BackEnd',
    description:
      'Construção de sistemas escaláveis e APIs REST com Java/Spring Boot, modelagem de dados em PostgreSQL e foco em performance e segurança.',
    languegesList: [
      { name: 'Java', icon: langLogo('java.png') },
      { name: 'Spring Boot', icon: langLogo('springboot.png') },
      { name: 'PostgreSQL', icon: langLogo('postegres.png') },
    ],
  },
  {
    icon: <IconBarChart />,
    title: 'Metodologias Ágeis',
    description:
      'Atuação em squads ágeis com Scrum, participação em decisões técnicas, code reviews e desenvolvimento de MVPs inovadores.',
    languegesList: [
      { name: 'Git', icon: langLogo('git.png') },
      { name: 'Docker', icon: langLogo('docker.png') },
    ],
  },
]
