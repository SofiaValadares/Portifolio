import type { ProjectModel } from '../../models/ProjectModel'
import { langLogo } from '../shared/langLogo'
import CalculaDetails from './detalhes/CalculaDetails'
import PokeGuessTeamDetails from './detalhes/PokeGuessTeamDetails'
import SentinelaDetails from './detalhes/SentinelaDetails'
import SnakeArcadeDetails from './detalhes/SnakeArcadeDetails'
import StudyAndGrowDetails from './detalhes/StudyAndGrowDetails'

/** Imagem padrão em `public/default-image.png` quando ainda não há assets do projeto. */
export const DEFAULT_PROJECT_IMAGE = '/default-image.png'

export const projectsData: ProjectModel[] = [
  {
    id: '1',
    name: 'Snake Arcade',
    description:
      'Snake Arcade é um jogo clássico da cobra feito com React 19, TypeScript e React Router, com identidade visual retro/arcade. No menu, o jogador escolhe cor primária e secundária da cobra (presets ou cor personalizada) e vê uma pré-visualização em tempo real. Na partida, a cobra cresce ao comer maçãs, há colisão com paredes e com o próprio corpo, pontuação em tempo real e recorde persistente no navegador. Os controlos funcionam por teclado (setas ou WASD) e por botões no ecrã; o layout adapta-se a desktop e mobile, com tabuleiro e painel de comandos lado a lado. O projeto inclui design system em CSS, testes automatizados com Jest e deploy na Vercel.',
    imagePrimary: '/projects/banner/snake-arcade.png',
    technologies: [
      { name: 'React', icon: langLogo('react.png') },
      { name: 'TypeScript', icon: langLogo('typescript.png') },
      { name: 'HTML5', icon: langLogo('html.png') },
      { name: 'CSS3', icon: langLogo('css.png') },
      { name: 'Git', icon: langLogo('git.png') },
    ],
    githubUrl: 'https://github.com/SofiaValadares/SnakeGame',
    projectHref: 'https://snakearcade.sofiavcav.dev/',
    detailsComponent: SnakeArcadeDetails,
  },
  {
    id: '2',
    name: 'SENTINELA',
    description:
      'SENTINELA é um sistema de monitoramento e análise ambiental focado na Caatinga, desenvolvido pelo grupo Canidé (CESAR School). A API em FastAPI expõe endpoints para avaliar risco de incêndios e focos de queimadas a partir de latitude, longitude e dias sem chuva, além de análise de imagens enviadas pelo cliente. O projeto transforma dados ambientais brutos em informações úteis para pesquisa e preservação do bioma, com viés educativo para quem está aprendendo a trabalhar com APIs e dados reais. Inclui documentação, coleção Postman e deploy na nuvem (Render).',
    imagePrimary: '/projects/banner/sentinela.png',
    technologies: [
      { name: 'Python', icon: langLogo('pyhton.png') },
      { name: 'Git', icon: langLogo('git.png') },
    ],
    githubUrl: 'https://github.com/SofiaValadares/SENTINELA',
    projectHref: 'https://sentinela-frontend-seven.vercel.app/%20%20nosso%20front%20esta%20deployado!!!',
    copyright:
      'Desenvolvido pelo grupo Canidé (CESAR School): Maria Luiza Calife, Danilo Albuquerque, Guilherme Silveira, Sofia Valadares, João Vítor Fittipaldi, Gabriel Caetano, Arthur Suzuki e Marina Frias.',
    detailsComponent: SentinelaDetails,
  },
  {
    id: '3',
    name: 'PokeGuessTeam',
    description:
      'PokeGuessTeam é um jogo local de dedução de times Pokémon feito com HTML, CSS e JavaScript puro (ES Modules), sem bibliotecas externas. O jogador cadastra um treinador, monta um time de seis Pokémon (busca, filtro por geração, time aleatório e drag-and-drop) e disputa palpites contra outro jogador ou contra IA. O painel mostra pistas por slot (tipos, cor, geração, altura e peso), placar em tempo real, bloqueio de palpites repetidos e persistência de perfil, XP e partidas em localStorage. Interface inspirada em Pokédex, com deploy estático na Vercel.',
    imagePrimary: '/projects/banner/poketeamguess.png',
    imageSecondary: '/projects/banner/poketeamguess-screem.png',
    technologies: [
      { name: 'JavaScript', icon: langLogo('javascript.png') },
      { name: 'HTML5', icon: langLogo('html.png') },
      { name: 'CSS3', icon: langLogo('css.png') },
      { name: 'Git', icon: langLogo('git.png') },
    ],
    githubUrl: 'https://github.com/SofiaValadares/PokeGuessTeam',
    projectHref: 'https://poke-guess-team.vercel.app/',
    detailsComponent: PokeGuessTeamDetails,
  },
  {
    id: '4',
    name: 'Calcula',
    description:
      'Calcula é uma calculadora web com interface limpa e responsiva, pensada para uso rápido no dia a dia. Suporta operações básicas com feedback visual imediato e layout adaptado a desktop e mobile. Projeto publicado na Vercel com código aberto no GitHub.',
    imagePrimary: '/projects/banner/calcula.png',
    technologies: [
      { name: 'Angular', icon: langLogo('angular.png') },
      { name: 'TypeScript', icon: langLogo('typescript.png') },
      { name: 'HTML5', icon: langLogo('html.png') },
      { name: 'CSS3', icon: langLogo('css.png') },
      { name: 'Git', icon: langLogo('git.png') },
    ],
    githubUrl: 'https://github.com/SofiaValadares/calcula',
    projectHref: 'https://calcula.sofiavcav.dev/',
    detailsComponent: CalculaDetails,
  },
  {
    id: '5',
    name: 'Study and Grow',
    description:
      'Study and Grow é uma aplicação web de estudo com foco em hábito e motivação: cada sessão de estudo faz a árvore do usuário crescer. Oferece cronômetro e técnica Pomodoro, suporte a português e inglês, e interface responsiva pensada para uso diário. Desenvolvido com React, TypeScript, HTML e CSS, com deploy em produção.',
    imagePrimary: '/projects/banner/study-and-grow.png',
    technologies: [
      { name: 'React', icon: langLogo('react.png') },
      { name: 'TypeScript', icon: langLogo('typescript.png') },
      { name: 'HTML5', icon: langLogo('html.png') },
      { name: 'CSS3', icon: langLogo('css.png') },
    ],
    githubUrl: 'https://github.com/SofiaValadares/study-and-grow',
    projectHref: 'https://studyandgrow.sofiavcav.dev',
    detailsComponent: StudyAndGrowDetails,
  },
]
