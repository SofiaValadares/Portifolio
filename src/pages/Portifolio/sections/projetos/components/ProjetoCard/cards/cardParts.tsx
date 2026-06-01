import { Link as LinkIcon } from 'lucide-react'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectDetailPath } from '../../../../../../../routes/paths'
import type { LanguegeModel } from '../../../../../../../models/LanguegeModel'
import { IconGithub } from '../../../../../../../components/icons/socialIcons'

export type ProjetoCardViewProps = {
  id: string
  name: string
  images: string[]
  technologies: LanguegeModel[]
  projectHref: string
  githubUrl?: string
}

export function ProjectCardShell({
  id,
  name,
  className,
  children,
}: Pick<ProjetoCardViewProps, 'id' | 'name'> & {
  className: string
  children: ReactNode
}) {
  const navigate = useNavigate()
  const detailPath = projectDetailPath(id)

  const openDetails = () => {
    navigate(detailPath)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openDetails()
  }

  return (
    <article
      className={className}
      role="link"
      tabIndex={0}
      aria-label={`Ver detalhes do projeto ${name}`}
      onClick={openDetails}
      onKeyDown={handleKeyDown}
    >
      {children}
    </article>
  )
}

function stopCardNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.stopPropagation()
}

function stopCardKeyboardNavigation(event: KeyboardEvent<HTMLAnchorElement>) {
  event.stopPropagation()
}

export function ProjectCardHeader({
  name,
  projectHref,
  githubUrl,
}: Pick<ProjetoCardViewProps, 'name' | 'projectHref' | 'githubUrl'>) {
  return (
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
            onClick={stopCardNavigation}
            onKeyDown={stopCardKeyboardNavigation}
          >
            <IconGithub className="project-card__action-icon" />
          </a>
        ) : null}
        <a
          className="project-card__action"
          href={projectHref}
          aria-label={`Ver projeto ${name}`}
          onClick={stopCardNavigation}
          onKeyDown={stopCardKeyboardNavigation}
        >
          <LinkIcon className="project-card__action-icon" strokeWidth={2} />
        </a>
      </div>
    </div>
  )
}

export function ProjectCardMedia({
  images,
  name,
}: Pick<ProjetoCardViewProps, 'images' | 'name'>) {
  return (
    <div className="project-card__media">
      {images.map((src, index) => (
        <div key={`${src}-${index}`} className="project-card__media-cell">
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
  )
}

export function ProjectCardTechList({
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
        layout === 'column' ? 'project-card__tech--column' : 'project-card__tech--row',
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
