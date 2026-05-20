import type { LanguegeModel } from '../../models/LanguegeModel'
import type { ProjectCardData } from '../../models/ProjectCardModel'
import { langLogo } from '../shared/langLogo'

const reactTsJs: LanguegeModel[] = [
  { name: 'React', icon: langLogo('react.png') },
  { name: 'TypeScript', icon: langLogo('typescript.png') },
  { name: 'JavaScript', icon: langLogo('javascript.png') },
]

/** Ordem para o grid masonry (4 colunas, `grid-auto-flow: dense`). */
export const projectsCardsData: ProjectCardData[] = [
  {
    name: 'Nome do Projeto',
    variation: 'large',
    technologies: reactTsJs,
    projectHref: '#projetos',
    githubUrl: 'https://github.com/SofiaValadares',
  },
  {
    name: 'Nome do Projeto',
    variation: 'double-horizontal',
    technologies: reactTsJs,
    projectHref: '#projetos',
  },
  {
    name: 'Nome do Projeto',
    variation: 'standard',
    technologies: reactTsJs,
    projectHref: '#projetos',
  },
  {
    name: 'Nome do Projeto',
    variation: 'standard',
    technologies: reactTsJs,
    projectHref: '#projetos',
    githubUrl: 'https://github.com/SofiaValadares',
  },
  {
    name: 'Nome do Projeto',
    variation: 'standard',
    technologies: reactTsJs,
    projectHref: '#projetos',
  },
  {
    name: 'Nome do Projeto',
    variation: 'standard',
    technologies: reactTsJs,
    projectHref: '#projetos',
  },
  {
    name: 'Nome do Projeto',
    variation: 'double-vertical',
    technologies: reactTsJs,
    projectHref: '#projetos',
  },
]
