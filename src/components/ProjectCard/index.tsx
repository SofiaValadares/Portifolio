import { Link as LinkIcon } from 'lucide-react'
import type { LanguegeModel } from '../../models/LanguegeModel'
import type {
  ProjectCardProps,
  ProjectCardVariation,
} from '../../models/ProjectCardModel'
import { IconGithub } from '../icons/socialIcons'
import './projectCard.css'

const DEFAULT_IMAGE = '/default-image.png'

function imageCountFor(variation: ProjectCardVariation): number {
  return variation === 'double-horizontal' || variation === 'double-vertical'
    ? 2
    : 1
}

function resolveImages(
  images: string | string[] | undefined,
  variation: ProjectCardVariation,
): string[] {
  const count = imageCountFor(variation)
  if (images == null) {
    return Array.from({ length: count }, () => DEFAULT_IMAGE)
  }
  const list = typeof images === 'string' ? [images] : [...images]
  while (list.length < count) {
    list.push(DEFAULT_IMAGE)
  }
  return list.slice(0, count)
}

function TechList({
  technologies,
  layout,
}: {
  technologies: LanguegeModel[]
  layout: 'row' | 'column'
}) {
  return (
    <ul
      className={[
        'project-card__tech',
        layout === 'column'
          ? 'project-card__tech--column'
          : 'project-card__tech--row',
      ].join(' ')}
      aria-label="Tecnologias"
    >
      {technologies.map((tech) => (
        <li key={tech.name} className="project-card__tech-item">
          <span
            className="project-card__tech-icon"
            data-tooltip={tech.name}
            tabIndex={0}
            aria-label={tech.name}
          >
            {tech.icon}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function ProjectCard({
  name,
  variation,
  images,
  technologies,
  projectHref,
  githubUrl,
}: ProjectCardProps) {
  const resolvedImages = resolveImages(images, variation)
  const techLayout =
    variation === 'standard' ? 'column' : ('row' as const)

  return (
    <article
      className={[
        'project-card',
        `project-card--${variation}`,
      ].join(' ')}
    >
      <div className="project-card__top">
        <p className="project-card__name">{name}</p>
        <div className="project-card__actions">
          {githubUrl ? (
            <a
              className="project-card__action"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositório GitHub de ${name}`}
            >
              <IconGithub className="project-card__action-icon" />
            </a>
          ) : null}
          <a
            className="project-card__action"
            href={projectHref}
            aria-label={`Ver projeto ${name}`}
          >
            <LinkIcon className="project-card__action-icon" strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__media">
          {resolvedImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="project-card__media-cell"
            >
              <img
                className="project-card__image"
                src={src}
                alt={name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <TechList technologies={technologies} layout={techLayout} />
      </div>
    </article>
  )
}
