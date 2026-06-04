import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useProjectDetailsContent } from '../../../i18n/projectDetails/useProjectDetailsContent'
import './calculaDetails.css'

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
    <div className="calcula-details__flow-step">
      <div className="calcula-details__flow-box">
        <span className="calcula-details__flow-label">{title}</span>
        {subtitle ? <span className="calcula-details__flow-sub">{subtitle}</span> : null}
      </div>
      {children}
    </div>
  )
}

export default function CalculaDetails({ project }: ProjectDetailsComponentProps) {
  const { content, shared } = useProjectDetailsContent(project.id, 'calcula')
  const projectUrl = project.projectHref ?? 'https://calcula.sofiavcav.dev/'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/calcula'

  if (!content) return null

  const ariaLabel = content.ariaLabel.replace('{{name}}', project.name)

  return (
    <article className="calcula-details" aria-label={ariaLabel}>
      <div className="calcula-details__inner">
        <header className="calcula-details__hero">
          <span className="calcula-details__logo" aria-hidden="true">
            Σ
          </span>
          <h2 className="calcula-details__title">{content.title}</h2>
          <p className="calcula-details__tagline">{content.tagline}</p>
        </header>

        <section className="calcula-details__section calcula-details__intro">
          <div className="calcula-details__intro-copy">
            <h3 className="calcula-details__heading">{shared.about}</h3>
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="calcula-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="calcula-details__features" aria-label={shared.projectHighlights}>
            {content.features.map(({ label, detail }) => (
              <li key={label} className="calcula-details__feature">
                <span className="calcula-details__feature-label">{label}</span>
                <span className="calcula-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="calcula-details__section calcula-details__modules-list">
          <h3 className="calcula-details__heading calcula-details__heading--center">
            {shared.modules}
          </h3>
          <ul className="calcula-details__modules-grid">
            {content.modules.map(({ name, detail }) => (
              <li key={name} className="calcula-details__module-chip">
                <strong className="calcula-details__module-name">{name}</strong>
                <span className="calcula-details__module-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="calcula-details__section calcula-details__screens">
          <h3 className="calcula-details__heading calcula-details__heading--center">
            {shared.appScreens}
          </h3>
          <div className="calcula-details__screen-grid">
            {content.screens.map(({ src, alt, title, caption }) => (
              <figure key={src} className="calcula-details__screen-card">
                <div className="calcula-details__screen-frame">
                  <img
                    className="calcula-details__screen-image"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="calcula-details__screen-caption">
                  <strong className="calcula-details__screen-title">{title}</strong>
                  <span className="calcula-details__screen-text">{caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="calcula-details__section calcula-details__architecture">
          <div className="calcula-details__flow" aria-label={shared.architectureDiagram}>
            <FlowStep title={content.flow.browser}>
              <span className="calcula-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.spa} subtitle={content.flow.spaSub}>
              <div className="calcula-details__flow-routes">
                {content.flow.routes.map((route) => (
                  <span key={route}>{route}</span>
                ))}
              </div>
              <span className="calcula-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="calcula-details__flow-row">
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">{content.flow.state}</span>
                  <span className="calcula-details__flow-sub">{content.flow.stateSub}</span>
                </div>
              </div>
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">{content.flow.history}</span>
                  <span className="calcula-details__flow-sub">{content.flow.historySub}</span>
                </div>
              </div>
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">{content.flow.deploy}</span>
                  <span className="calcula-details__flow-sub">{content.flow.deploySub}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="calcula-details__architecture-copy">
            <h3 className="calcula-details__heading">{shared.architecture}</h3>
            {content.architecture.map((paragraph) => (
              <p key={paragraph} className="calcula-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="calcula-details__subheading">{shared.codeStructure}</h4>
            <pre className="calcula-details__code-block">
              <code>{content.projectStructure}</code>
            </pre>
          </div>
        </section>

        <section className="calcula-details__section calcula-details__stack">
          <h3 className="calcula-details__heading calcula-details__heading--center">
            {shared.techStack}
          </h3>
          <ul className="calcula-details__stack-grid">
            {content.techStack.map(({ name, detail }) => (
              <li key={name} className="calcula-details__stack-item">
                <span className="calcula-details__stack-name">{name}</span>
                <span className="calcula-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="calcula-details__footer">
          <p className="calcula-details__visit-label">{shared.useAt}</p>
          <a
            className="calcula-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="calcula-details__visit-label">{shared.codeAt}</p>
          <a
            className="calcula-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="calcula-details__credit">{shared.developedBy}</p>
        </footer>
      </div>
    </article>
  )
}
