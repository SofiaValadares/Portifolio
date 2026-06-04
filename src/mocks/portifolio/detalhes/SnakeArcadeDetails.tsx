import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import PixelDecor from './shared/PixelDecor'
import './snakeArcadeDetails.css'

const GAME_SCREEN_IMAGE = '/projects/details/snake-arcade/tela-jogo.png'

const INTRO_PARAGRAPHS = [
  'Snake Arcade é um jogo clássico da cobra desenvolvido com React e TypeScript, com identidade visual retro/arcade. No menu, escolhes a cor primária e secundária da cobra e vês a pré-visualização antes de começar.',
  'Durante a partida, comes maçãs para crescer e evitas bater nas paredes ou em ti mesma. A app inclui pontuação em tempo real, recorde guardado no browser, controlos por teclado (setas ou WASD) ou botões no ecrã, pausa e layout responsivo para desktop e telemóvel.',
] as const

const ARCHITECTURE_PARAGRAPHS = [
  'Snake Arcade é uma SPA em React com React Router: a rota / renderiza o menu de personalização de cores e /game a partida. O SnakeThemeProvider partilha as cores primária e secundária entre as duas páginas, para a pré-visualização e o canvas usarem o mesmo tema.',
  'A lógica do jogo vive num componente dedicado com Canvas 2D; a página do jogo trata pontuação, recorde, pausa e controlos. O recorde persiste no browser via utilitário próprio, e o visual segue um design system em CSS com tokens retro. Build estático (Create React App) e deploy na Vercel.',
] as const

const GAMEPLAY_TEXT =
  'O tabuleiro é renderizado em HTML Canvas numa grelha 20x20, com a cobra a mover-se em intervalos fixos. Cada maçã comida aumenta o score e faz a cobra crescer; uma nova maçã aparece numa célula livre. A direção entra numa fila e não permite inverter 180º de imediato. O jogo termina ao bater na parede ou no próprio corpo. Há pausa, reinício e game over com opção de jogar outra vez (Espaço, Enter ou botão).'

function FlowStep({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <div className="snake-arcade-details__flow-step">
      <div className="snake-arcade-details__flow-box">
        <span className="snake-arcade-details__flow-title">{title}</span>
        {subtitle ? (
          <span className="snake-arcade-details__flow-subtitle">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function SnakeArcadeDetails({ project }: ProjectDetailsComponentProps) {
  const projectUrl = project.projectHref ?? 'https://snakearcade.sofiavcav.dev/'

  return (
    <article className="snake-arcade-details" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className="snake-arcade-details__inner">
        <header className="snake-arcade-details__hero">
          <h2 className="snake-arcade-details__title">SNAKE ARCADE</h2>

          <div className="snake-arcade-details__hero-decor-wrap">
            <PixelDecor orientation="row" count={15} />
            <span className="snake-arcade-details__hero-decor-trailing">
              <span className="pixel-decor__cell pixel-decor__cell--cyan" />
            </span>
          </div>
        </header>

        <section className="snake-arcade-details__section snake-arcade-details__intro">
          <div className="snake-arcade-details__intro-copy">
            <h3 className="snake-arcade-details__heading">Snake Arcade</h3>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="snake-arcade-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <PixelDecor count={12} className="snake-arcade-details__intro-decor" />
        </section>

        <section className="snake-arcade-details__section snake-arcade-details__architecture">
          <div
            className="snake-arcade-details__architecture-diagram"
            aria-label="Diagrama de arquitetura"
          >
            <FlowStep title="NAVEGADOR / USUÁRIO">
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="REACT SPA" subtitle="App.tsx">
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="SNAKE THEME PROVIDER" subtitle="Context API">
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="REACT ROUTER">
              <div className="snake-arcade-details__flow-split">
                <span>Menu (/)</span>
                <span>Game (/game)</span>
              </div>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="CAMADA DE JOGO" subtitle="Canvas 2D">
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="snake-arcade-details__flow-step snake-arcade-details__flow-step--row">
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">PERSISTÊNCIA</span>
                <span className="snake-arcade-details__flow-subtitle">localStorage</span>
              </div>
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">SISTEMA DE DESIGN</span>
                <span className="snake-arcade-details__flow-subtitle">CSS tokens</span>
              </div>
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">IMPLANTAÇÃO</span>
                <span className="snake-arcade-details__flow-subtitle">Vercel</span>
              </div>
            </div>
          </div>

          <div className="snake-arcade-details__architecture-copy">
            <h3 className="snake-arcade-details__heading snake-arcade-details__heading--right">
              Arquitetura
            </h3>
            {ARCHITECTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="snake-arcade-details__text">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="snake-arcade-details__section snake-arcade-details__gameplay">
          <div className="snake-arcade-details__gameplay-main">
            <PixelDecor count={12} className="snake-arcade-details__gameplay-decor" />

            <div className="snake-arcade-details__gameplay-copy">
              <h3 className="snake-arcade-details__heading">Gameplay</h3>
              <p className="snake-arcade-details__text">{GAMEPLAY_TEXT}</p>
            </div>
          </div>

          <figure className="snake-arcade-details__game-preview">
            <img
              className="snake-arcade-details__game-image"
              src={GAME_SCREEN_IMAGE}
              alt="Tela do jogo Snake Arcade"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <footer className="snake-arcade-details__footer">
          <p className="snake-arcade-details__play-label">Jogue em</p>
          <a
            className="snake-arcade-details__play-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="snake-arcade-details__credit">Desenvolvido por Sofia Valadares Cavalcanti</p>
        </footer>
      </div>
    </article>
  )
}
