import type { ProjectModel } from '../../models/ProjectModel'

/** Imagem padrão em `public/default-image.png` quando ainda não há assets do projeto. */
export const DEFAULT_PROJECT_IMAGE = '/default-image.png'

export const projectsData: ProjectModel[] = [
  {
    id: '1',
    name: 'Snake Arcade',
    description:
      'Snake Arcade é um jogo clássico da cobra feito com React 19, TypeScript e React Router, com identidade visual retro/arcade. No menu, o jogador escolhe cor primária e secundária da cobra (presets ou cor personalizada) e vê uma pré-visualização em tempo real. Na partida, a cobra cresce ao comer maçãs, há colisão com paredes e com o próprio corpo, pontuação em tempo real e recorde persistente no navegador. Os controlos funcionam por teclado (setas ou WASD) e por botões no ecrã; o layout adapta-se a desktop e mobile, com tabuleiro e painel de comandos lado a lado. O projeto inclui design system em CSS, testes automatizados com Jest e deploy na Vercel.',
    imagePrimary: '/projects/snake-arcade.png',
    technologies: [
      'React',
      'TypeScript',
      'HTML5',
      'CSS3'
    ],
    githubUrl: 'https://github.com/SofiaValadares/SnakeGame',
    projectHref: 'https://snakearcade.sofiavcav.dev/',
  },
  {
    id: '2',
    name: 'Projeto Bertoleza',
    description:
      'Pesquisa e protótipos de reconhecimento de voz no contexto da iniciação científica na UFPE, com relatórios e apresentações dos resultados.',
    imagePrimary: DEFAULT_PROJECT_IMAGE,
    technologies: ['Python'],
    projectHref: '#projetos',
  },
  {
    id: '3',
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
