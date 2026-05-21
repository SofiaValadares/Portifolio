import type { ProjectModel } from '../../models/ProjectModel'

/** Imagem padrão em `public/default-image.png` quando ainda não há assets do projeto. */
export const DEFAULT_PROJECT_IMAGE = '/default-image.png'

export const projectsData: ProjectModel[] = [
  {
    id: 'mvp-bancario',
    name: 'MVP Bancário',
    description:
      'MVP full stack para o setor financeiro, com interfaces em Angular e React, APIs em Spring Boot e entregas incrementais em squads ágeis.',
    imagePrimary: DEFAULT_PROJECT_IMAGE,
    technologies: [
      'Angular',
      'React',
      'Spring Boot',
      'Kotlin',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/SofiaValadares',
    projectHref: '#projetos',
  },
  {
    id: 'projeto-bertoleza',
    name: 'Projeto Bertoleza',
    description:
      'Pesquisa e protótipos de reconhecimento de voz no contexto da iniciação científica na UFPE, com relatórios e apresentações dos resultados.',
    imagePrimary: DEFAULT_PROJECT_IMAGE,
    technologies: ['Python'],
    projectHref: '#projetos',
  },
  {
    id: 'plataforma-web',
    name: 'Plataforma Web',
    description:
      'Aplicação web com foco em componentes reutilizáveis, integração com APIs REST e pipeline de deploy com Docker e Git.',
    imagePrimary: DEFAULT_PROJECT_IMAGE,
    imageSecondary: DEFAULT_PROJECT_IMAGE,
    technologies: ['React', 'TypeScript', 'JavaScript', 'Java', 'Docker', 'Git'],
    githubUrl: 'https://github.com/SofiaValadares',
    projectHref: '#projetos',
  },
]
