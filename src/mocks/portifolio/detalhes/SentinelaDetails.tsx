import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useProjectDetailsContent } from '../../../i18n/projectDetails/useProjectDetailsContent'
import './sentinelaDetails.css'

const BANNER_IMAGE = '/projects/banner/sentinela.png'
const DOCS_URL = 'https://sentinela-frontend-seven.vercel.app/'
const API_URL = 'https://sentinela-bii6.onrender.com'
const FRONT_REPO_URL = 'https://github.com/caetrias/sentinela-front'

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
    <div className="sentinela-details__flow-step">
      <div className="sentinela-details__flow-box">
        <span className="sentinela-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="sentinela-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function SentinelaDetails({ project }: ProjectDetailsComponentProps) {
  const { content, shared } = useProjectDetailsContent(project.id, 'sentinela')

  if (!content) return null

  const ariaLabel = content.ariaLabel.replace('{{name}}', project.name)
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/SENTINELA'
  const bannerImage = project.imagePrimary ?? BANNER_IMAGE

  const [endpointsIntroBeforePrefix, endpointsIntroAfterPrefix] =
    shared.endpointsIntro.split('{{prefix}}')
  const [endpointsIntroMiddle, endpointsIntroAfterLocal] =
    endpointsIntroAfterPrefix.split('{{local}}')

  return (
    <article className="sentinela-details" aria-label={ariaLabel}>
      <div className="sentinela-details__inner">
        <header className="sentinela-details__hero">
          <figure className="sentinela-details__hero-banner">
            <img
              className="sentinela-details__hero-image"
              src={bannerImage}
              alt={content.bannerAlt}
              loading="eager"
              decoding="async"
            />
          </figure>
          <p className="sentinela-details__tagline">{content.tagline}</p>
        </header>

        <section className="sentinela-details__section sentinela-details__intro">
          <div className="sentinela-details__intro-copy">
            <h3 className="sentinela-details__heading">{shared.about}</h3>
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="sentinela-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul
            className="sentinela-details__features"
            aria-label={shared.projectHighlights}
          >
            {content.features.map(({ label, detail }) => (
              <li key={label} className="sentinela-details__feature">
                <span className="sentinela-details__feature-label">{label}</span>
                <span className="sentinela-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="sentinela-details__section sentinela-details__contribution">
          <h3 className="sentinela-details__heading">{shared.myContribution}</h3>
          <p className="sentinela-details__text sentinela-details__contribution-text">
            {content.myContribution}
          </p>
        </section>

        <section className="sentinela-details__section sentinela-details__journey">
          <h3 className="sentinela-details__heading sentinela-details__heading--center">
            {shared.howToUseApi}
          </h3>
          <ol className="sentinela-details__journey-list">
            {content.journey.map(({ title, detail }, index) => (
              <li key={title} className="sentinela-details__journey-step">
                <span className="sentinela-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="sentinela-details__journey-content">
                  <strong className="sentinela-details__journey-title">{title}</strong>
                  <span className="sentinela-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="sentinela-details__section sentinela-details__endpoints">
          <div className="sentinela-details__endpoints-copy">
            <h3 className="sentinela-details__heading">{shared.endpoints}</h3>
            <p className="sentinela-details__text">
              {endpointsIntroBeforePrefix}
              <code className="sentinela-details__inline-code">/sent</code>
              {endpointsIntroMiddle}
              <code className="sentinela-details__inline-code">http://127.0.0.1:8000</code>
              {endpointsIntroAfterLocal}{' '}
              <a
                className="sentinela-details__inline-link"
                href={API_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {API_URL}
              </a>
            </p>
          </div>

          <div className="sentinela-details__endpoints-table-wrap">
            <table className="sentinela-details__endpoints-table">
              <caption className="sentinela-details__sr-only">{shared.endpointsCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{shared.method}</th>
                  <th scope="col">{shared.route}</th>
                  <th scope="col">{shared.description}</th>
                </tr>
              </thead>
              <tbody>
                {content.endpoints.map(({ method, path, detail }) => (
                  <tr key={path}>
                    <td>
                      <span
                        className={`sentinela-details__method sentinela-details__method--${method.toLowerCase()}`}
                      >
                        {method}
                      </span>
                    </td>
                    <td>
                      <code className="sentinela-details__path-code">{path}</code>
                    </td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="sentinela-details__section sentinela-details__team">
          <h3 className="sentinela-details__heading">{shared.canideGroup}</h3>
          <p className="sentinela-details__text">{shared.canideIntro}</p>
          <ul
            className="sentinela-details__team-grid"
            aria-label={shared.canideGroup}
          >
            {content.teamMembers.map((name) => (
              <li
                key={name}
                className={`sentinela-details__team-member${name === content.sofiaName ? ' sentinela-details__team-member--highlight' : ''}`}
              >
                {name}
                {name === content.sofiaName ? (
                  <span className="sentinela-details__team-role">{shared.sofiaRole}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="sentinela-details__section sentinela-details__architecture">
          <div className="sentinela-details__flow" aria-label={shared.architectureDiagram}>
            <FlowStep title={content.flow.client} subtitle={content.flow.clientSub}>
              <span className="sentinela-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title={content.flow.fastapi} subtitle={content.flow.fastapiSub}>
              <div className="sentinela-details__flow-routes">
                <span>/ping</span>
                <span>/predict</span>
                <span>/image</span>
              </div>
              <span className="sentinela-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="sentinela-details__flow-row">
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">{content.flow.tabular}</span>
                  <span className="sentinela-details__flow-sub">{content.flow.tabularSub}</span>
                </div>
              </div>
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">{content.flow.vision}</span>
                  <span className="sentinela-details__flow-sub">{content.flow.visionSub}</span>
                </div>
              </div>
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">{content.flow.deploy}</span>
                  <span className="sentinela-details__flow-sub">{content.flow.deploySub}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sentinela-details__architecture-copy">
            <h3 className="sentinela-details__heading">{shared.architecture}</h3>
            {content.architecture.map((paragraph) => (
              <p key={paragraph} className="sentinela-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="sentinela-details__subheading">{shared.repoStructure}</h4>
            <pre className="sentinela-details__code-block">
              <code>{content.projectStructure}</code>
            </pre>
          </div>
        </section>

        <section className="sentinela-details__section sentinela-details__stack">
          <h3 className="sentinela-details__heading sentinela-details__heading--center">
            {shared.techStack}
          </h3>
          <ul className="sentinela-details__stack-grid">
            {content.techStack.map(({ name, detail }) => (
              <li key={name} className="sentinela-details__stack-item">
                <span className="sentinela-details__stack-name">{name}</span>
                <span className="sentinela-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="sentinela-details__footer">
          <p className="sentinela-details__visit-label">{shared.docsAt}</p>
          <a
            className="sentinela-details__visit-link"
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DOCS_URL}
          </a>
          <p className="sentinela-details__visit-label">{shared.apiProduction}</p>
          <a
            className="sentinela-details__visit-link"
            href={API_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {API_URL}
          </a>
          <p className="sentinela-details__visit-label">{shared.apiRepo}</p>
          <a
            className="sentinela-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="sentinela-details__visit-label">{shared.docsFront}</p>
          <a
            className="sentinela-details__visit-link"
            href={FRONT_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FRONT_REPO_URL}
          </a>
          {project.copyright ? (
            <p className="sentinela-details__credit">* {project.copyright}</p>
          ) : null}
        </footer>
      </div>
    </article>
  )
}
