import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useProjectDetailsContent } from '../../../i18n/projectDetails/useProjectDetailsContent'
import './pokeGuessTeamDetails.css'

const GAME_SCREEN = '/projects/banner/poketeamguess-screem.png'

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
    <div className="poke-guess-details__flow-step">
      <div className="poke-guess-details__flow-box">
        <span className="poke-guess-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="poke-guess-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function PokeGuessTeamDetails({ project }: ProjectDetailsComponentProps) {
  const { content, shared } = useProjectDetailsContent(project.id, 'pokeGuess')
  const projectUrl = project.projectHref ?? 'https://poke-guess-team.vercel.app/'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/PokeGuessTeam'
  const gameScreen = project.imageSecondary ?? GAME_SCREEN

  if (!content) return null

  const ariaLabel = content.ariaLabel.replace('{{name}}', project.name)

  return (
    <article className="poke-guess-details" aria-label={ariaLabel}>
      <div className="poke-guess-details__inner">
        <header className="poke-guess-details__hero">
          <div className="poke-guess-details__hero-lens" aria-hidden="true">
            <span className="poke-guess-details__hero-lens-ring" />
            <span className="poke-guess-details__hero-lens-core" />
          </div>
          <h2 className="poke-guess-details__title">{content.title}</h2>
          <p className="poke-guess-details__tagline">{content.tagline}</p>
        </header>

        <section className="poke-guess-details__section poke-guess-details__intro">
          <div className="poke-guess-details__intro-copy">
            <h3 className="poke-guess-details__heading">{shared.about}</h3>
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="poke-guess-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="poke-guess-details__features" aria-label={shared.projectHighlights}>
            {content.features.map(({ label, detail }) => (
              <li key={label} className="poke-guess-details__feature">
                <span className="poke-guess-details__feature-label">{label}</span>
                <span className="poke-guess-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="poke-guess-details__section poke-guess-details__journey">
          <h3 className="poke-guess-details__heading poke-guess-details__heading--center">
            {shared.matchFlow}
          </h3>
          <ol className="poke-guess-details__journey-list">
            {content.journey.map(({ title, detail }, index) => (
              <li key={title} className="poke-guess-details__journey-step">
                <span className="poke-guess-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="poke-guess-details__journey-content">
                  <strong className="poke-guess-details__journey-title">{title}</strong>
                  <span className="poke-guess-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="poke-guess-details__section poke-guess-details__gameplay">
          <div className="poke-guess-details__gameplay-copy">
            <h3 className="poke-guess-details__heading">{shared.gameplay}</h3>
            <p className="poke-guess-details__text">{content.mechanics}</p>

            <ul className="poke-guess-details__clues" aria-label={shared.clueTypes}>
              {content.clues.map(({ label, detail }) => (
                <li key={label} className="poke-guess-details__clue">
                  <span className="poke-guess-details__clue-label">{label}</span>
                  <span className="poke-guess-details__clue-detail">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="poke-guess-details__game-preview">
            <img
              className="poke-guess-details__game-image"
              src={gameScreen}
              alt={content.gameImageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="poke-guess-details__section poke-guess-details__modes">
          <h3 className="poke-guess-details__heading">{shared.gameModes}</h3>
          <div className="poke-guess-details__modes-grid">
            {content.gameModes.map(({ title, detail }) => (
              <article key={title} className="poke-guess-details__mode-card">
                <h4 className="poke-guess-details__subheading">{title}</h4>
                <p className="poke-guess-details__text">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="poke-guess-details__section poke-guess-details__architecture">
          <div className="poke-guess-details__flow" aria-label={shared.architectureDiagram}>
            <FlowStep title={content.flow.browser}>
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.spa} subtitle={content.flow.spaSub}>
              <div className="poke-guess-details__flow-routes">
                <span>#/</span>
                <span>#/home</span>
                <span>#/team</span>
                <span>#/game</span>
              </div>
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.match} subtitle={content.flow.matchSub}>
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="poke-guess-details__flow-row">
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">{content.flow.store}</span>
                  <span className="poke-guess-details__flow-sub">{content.flow.storeSub}</span>
                </div>
              </div>
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">{content.flow.ai}</span>
                  <span className="poke-guess-details__flow-sub">{content.flow.aiSub}</span>
                </div>
              </div>
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">{content.flow.deploy}</span>
                  <span className="poke-guess-details__flow-sub">{content.flow.deploySub}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="poke-guess-details__architecture-copy">
            <h3 className="poke-guess-details__heading">{shared.architecture}</h3>
            {content.architecture.map((paragraph) => (
              <p key={paragraph} className="poke-guess-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="poke-guess-details__subheading">{shared.codeStructure}</h4>
            <pre className="poke-guess-details__code-block">
              <code>{content.projectStructure}</code>
            </pre>
          </div>
        </section>

        <section className="poke-guess-details__section poke-guess-details__stack">
          <h3 className="poke-guess-details__heading poke-guess-details__heading--center">
            {shared.techStack}
          </h3>
          <ul className="poke-guess-details__stack-grid">
            {content.techStack.map(({ name, detail }) => (
              <li key={name} className="poke-guess-details__stack-item">
                <span className="poke-guess-details__stack-name">{name}</span>
                <span className="poke-guess-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="poke-guess-details__footer">
          <p className="poke-guess-details__visit-label">{shared.playAt}</p>
          <a
            className="poke-guess-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="poke-guess-details__visit-label">{shared.codeAt}</p>
          <a
            className="poke-guess-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="poke-guess-details__credit">{shared.developedByPoke}</p>
        </footer>
      </div>
    </article>
  )
}
