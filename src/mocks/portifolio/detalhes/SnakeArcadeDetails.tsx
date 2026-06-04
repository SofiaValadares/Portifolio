import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useProjectDetailsContent } from '../../../i18n/projectDetails/useProjectDetailsContent'
import PixelDecor from './shared/PixelDecor'
import './snakeArcadeDetails.css'

const GAME_SCREEN_IMAGE = '/projects/details/snake-arcade/tela-jogo.png'

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
  const { content, shared } = useProjectDetailsContent(project.id, 'snake')
  const projectUrl = project.projectHref ?? 'https://snakearcade.sofiavcav.dev/'

  if (!content) return null

  const ariaLabel = content.ariaLabel.replace('{{name}}', project.name)

  return (
    <article className="snake-arcade-details" aria-label={ariaLabel}>
      <div className="snake-arcade-details__inner">
        <header className="snake-arcade-details__hero">
          <h2 className="snake-arcade-details__title">{content.title}</h2>

          <div className="snake-arcade-details__hero-decor-wrap">
            <PixelDecor orientation="row" count={15} />
            <span className="snake-arcade-details__hero-decor-trailing">
              <span className="pixel-decor__cell pixel-decor__cell--cyan" />
            </span>
          </div>
        </header>

        <section className="snake-arcade-details__section snake-arcade-details__intro">
          <div className="snake-arcade-details__intro-copy">
            <h3 className="snake-arcade-details__heading">{content.heading}</h3>
            {content.intro.map((paragraph) => (
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
            aria-label={shared.architectureDiagram}
          >
            <FlowStep title={content.flow.browser}>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.spa} subtitle={content.flow.spaSub}>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.theme} subtitle={content.flow.themeSub}>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.router}>
              <div className="snake-arcade-details__flow-split">
                <span>{content.flow.menu}</span>
                <span>{content.flow.game}</span>
              </div>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.layer} subtitle={content.flow.layerSub}>
              <span className="snake-arcade-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="snake-arcade-details__flow-step snake-arcade-details__flow-step--row">
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">{content.flow.persistence}</span>
                <span className="snake-arcade-details__flow-subtitle">{content.flow.persistenceSub}</span>
              </div>
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">{content.flow.design}</span>
                <span className="snake-arcade-details__flow-subtitle">{content.flow.designSub}</span>
              </div>
              <div className="snake-arcade-details__flow-box">
                <span className="snake-arcade-details__flow-title">{content.flow.deploy}</span>
                <span className="snake-arcade-details__flow-subtitle">{content.flow.deploySub}</span>
              </div>
            </div>
          </div>

          <div className="snake-arcade-details__architecture-copy">
            <h3 className="snake-arcade-details__heading snake-arcade-details__heading--right">
              {shared.architecture}
            </h3>
            {content.architecture.map((paragraph) => (
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
              <h3 className="snake-arcade-details__heading">{shared.gameplay}</h3>
              <p className="snake-arcade-details__text">{content.gameplay}</p>
            </div>
          </div>

          <figure className="snake-arcade-details__game-preview">
            <img
              className="snake-arcade-details__game-image"
              src={GAME_SCREEN_IMAGE}
              alt={content.gameImageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <footer className="snake-arcade-details__footer">
          <p className="snake-arcade-details__play-label">{shared.playAt}</p>
          <a
            className="snake-arcade-details__play-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="snake-arcade-details__credit">{shared.developedBy}</p>
        </footer>
      </div>
    </article>
  )
}
