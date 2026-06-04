import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useProjectDetailsContent } from '../../../i18n/projectDetails/useProjectDetailsContent'
import './studyAndGrowDetails.css'

const TREE_SCREEN = '/projects/details/study-and-grow/tela-arvore.png'
const POMODORO_SCREEN = '/projects/details/study-and-grow/tela-pomodoro.png'
const ARVORES_BASE = '/projects/details/study-and-grow/arvores'

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
    <div className="study-grow-details__flow-step">
      <div className="study-grow-details__flow-box">
        <span className="study-grow-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="study-grow-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function StudyAndGrowDetails({ project }: ProjectDetailsComponentProps) {
  const { content, shared } = useProjectDetailsContent(project.id, 'studyAndGrow')
  const projectUrl = project.projectHref ?? 'https://studyandgrow.sofiavcav.dev'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/study-and-grow'

  if (!content) return null

  const ariaLabel = content.ariaLabel.replace('{{name}}', project.name)

  return (
    <article className="study-grow-details" aria-label={ariaLabel}>
      <div className="study-grow-details__inner">
        <header className="study-grow-details__hero">
          <div className="study-grow-details__sun" aria-hidden="true">
            <span className="study-grow-details__sun-ring" />
            <span className="study-grow-details__sun-core" />
          </div>
          <h2 className="study-grow-details__title">{content.title}</h2>
          <p className="study-grow-details__tagline">{content.tagline}</p>
        </header>

        <section className="study-grow-details__section study-grow-details__intro">
          <div className="study-grow-details__intro-copy">
            <h3 className="study-grow-details__heading">{shared.about}</h3>
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="study-grow-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="study-grow-details__features" aria-label={shared.projectHighlights}>
            {content.features.map(({ label, detail }) => (
              <li key={label} className="study-grow-details__feature">
                <span className="study-grow-details__feature-label">{label}</span>
                <span className="study-grow-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="study-grow-details__section study-grow-details__journey">
          <h3 className="study-grow-details__heading study-grow-details__heading--center">
            {shared.userJourney}
          </h3>
          <ol className="study-grow-details__journey-list">
            {content.journey.map(({ title, detail }, index) => (
              <li key={title} className="study-grow-details__journey-step">
                <span className="study-grow-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="study-grow-details__journey-content">
                  <strong className="study-grow-details__journey-title">{title}</strong>
                  <span className="study-grow-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="study-grow-details__section study-grow-details__mechanics">
          <div className="study-grow-details__mechanics-copy">
            <h3 className="study-grow-details__heading">{shared.howItWorks}</h3>
            <p className="study-grow-details__text">{content.mechanics}</p>
          </div>

          <figure className="study-grow-details__mechanics-preview">
            <img
              className="study-grow-details__mechanics-image"
              src={TREE_SCREEN}
              alt={content.treeImageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="study-grow-details__section study-grow-details__stages">
          <div className="study-grow-details__stages-copy">
            <h3 className="study-grow-details__heading">{shared.growthStages}</h3>
            <p className="study-grow-details__text">{shared.growthStagesIntro}</p>
          </div>

          <div className="study-grow-details__stages-table-wrap">
            <table className="study-grow-details__stages-table">
              <caption className="study-grow-details__sr-only">{shared.stagesCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{shared.stage}</th>
                  <th scope="col">{shared.name}</th>
                  <th scope="col">{shared.minTime}</th>
                </tr>
              </thead>
              <tbody>
                {content.growthStages.map(({ stage, name, time }) => (
                  <tr key={stage}>
                    <td>{stage}</td>
                    <td>{name}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="study-grow-details__section study-grow-details__species">
          <h3 className="study-grow-details__heading">{shared.species}</h3>
          <p className="study-grow-details__text">{shared.speciesIntro}</p>

          <ul
            className="study-grow-details__species-gallery"
            aria-label={shared.speciesGallery}
          >
            {content.species.map(({ name, slug, locked }) => (
              <li
                key={slug}
                className={`study-grow-details__species-card${locked ? ' study-grow-details__species-card--locked' : ''}`}
              >
                <div className="study-grow-details__species-art">
                  <img
                    src={`${ARVORES_BASE}/${slug}.svg`}
                    alt={`${name} ${shared.matureStageAlt}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="study-grow-details__species-name">{name}</span>
                {locked ? (
                  <span className="study-grow-details__species-lock">{shared.unlockable}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="study-grow-details__section study-grow-details__tools">
          <div className="study-grow-details__tools-copy">
            <h3 className="study-grow-details__heading">{shared.studyTools}</h3>
            {content.studyTools.map(({ title, detail }) => (
              <div key={title} className="study-grow-details__tool-block">
                <h4 className="study-grow-details__subheading">{title}</h4>
                <p className="study-grow-details__text">{detail}</p>
              </div>
            ))}
          </div>

          <figure className="study-grow-details__tools-preview">
            <img
              className="study-grow-details__tools-image"
              src={POMODORO_SCREEN}
              alt={content.pomodoroImageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="study-grow-details__section study-grow-details__architecture">
          <div
            className="study-grow-details__flow"
            aria-label={shared.architectureDiagram}
          >
            <FlowStep title={content.flow.browser}>
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.spa} subtitle={content.flow.spaSub}>
              <div className="study-grow-details__flow-routes">
                <span>/</span>
                <span>/tree</span>
                <span>/estufa</span>
                <span>/cronometro</span>
                <span>/pomodoro</span>
              </div>
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.context} subtitle={content.flow.contextSub}>
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.hooks} subtitle={content.flow.hooksSub}>
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="study-grow-details__flow-row">
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">
                    {content.flow.persistence}
                  </span>
                  <span className="study-grow-details__flow-sub">
                    {content.flow.persistenceSub}
                  </span>
                </div>
              </div>
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">{content.flow.i18n}</span>
                  <span className="study-grow-details__flow-sub">{content.flow.i18nSub}</span>
                </div>
              </div>
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">{content.flow.deploy}</span>
                  <span className="study-grow-details__flow-sub">{content.flow.deploySub}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="study-grow-details__architecture-copy">
            <h3 className="study-grow-details__heading">{shared.architecture}</h3>
            {content.architecture.map((paragraph) => (
              <p key={paragraph} className="study-grow-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="study-grow-details__subheading">{shared.codeStructure}</h4>
            <pre className="study-grow-details__code-block">
              <code>{content.projectStructure}</code>
            </pre>
          </div>
        </section>

        <section className="study-grow-details__section study-grow-details__stack">
          <h3 className="study-grow-details__heading study-grow-details__heading--center">
            {shared.techStack}
          </h3>
          <ul className="study-grow-details__stack-grid">
            {content.techStack.map(({ name, detail }) => (
              <li key={name} className="study-grow-details__stack-item">
                <span className="study-grow-details__stack-name">{name}</span>
                <span className="study-grow-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="study-grow-details__footer">
          <p className="study-grow-details__visit-label">{shared.tryAt}</p>
          <a
            className="study-grow-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="study-grow-details__visit-label">{shared.codeAt}</p>
          <a
            className="study-grow-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="study-grow-details__credit">{shared.developedBy}</p>
        </footer>
      </div>
    </article>
  )
}
