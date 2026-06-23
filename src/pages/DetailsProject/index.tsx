import {
  useMemo,
  type MouseEvent,
} from 'react'
import {
  ArrowLeft,
  Link as LinkIcon,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { LinkButton } from '../../components/button'
import {
  NavConteiner,
  PageConteiner,
  SectionConteiner,
} from '../../components/conteiner'
import { TecnologicLabelList } from '../../components/label'
import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'
import { useTranslation } from '../../i18n/useTranslation'
import {
  projectsCardsData,
  projectsData,
} from '../../mocks'
import { IconCode } from '../../models/sectionIcons'
import { IconPortfolio } from '../../models/portfolioIcon'
import { IconGithub } from '../../components/icons/socialIcons'
import { ProjectDetailsContent } from './components/detailsSection'
import './detailsProject.css'

export default function DetailsProject() {
  const { projectId } = useParams()
  const navigate = useNavigateWithTransition()
  const { t, getProjectDescription, getProjectCopyright } = useTranslation()

  const card = useMemo(
    () => projectsCardsData.find((item) => item.id === projectId),
    [projectId],
  )

  const project = useMemo(
    () => projectsData.find((item) => item.id === projectId) ?? card?.project,
    [card, projectId],
  )

  const detail = useMemo(() => {
    const fallbackDescription = project?.description ?? t('details.projectFallback')

    return {
      name: project?.name ?? t('details.projectNotFound'),
      description: project
        ? getProjectDescription(project.id, fallbackDescription)
        : fallbackDescription,
      technologies: project?.technologies ?? [],
      githubUrl: project?.githubUrl,
      projectHref: project?.projectHref,
      copyright: project?.copyright
        ? getProjectCopyright(project.id, project.copyright)
        : undefined,
      found: project != null,
    }
  }, [project, t, getProjectDescription, getProjectCopyright])

  const tabs = useMemo(
    () => [
      {
        title: t('chrome.portfolio'),
        anchorId: 'portfolio',
        icon: <IconPortfolio />,
        href: '/portfolio#projetos',
        onClick: (event: MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault()
          navigate('/portfolio#projetos')
        },
      },
      {
        title: detail.name,
        anchorId: 'detalhes-projeto',
        icon: <IconCode />,
      },
    ],
    [detail.name, navigate, t],
  )

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/portfolio#projetos')
  }

  const openExternalLink = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const openProjectLink = (href: string) => {
    if (/^https?:\/\//i.test(href)) {
      openExternalLink(href)
      return
    }
    window.location.href = href
  }

  return (
    <PageConteiner
      ariaLabel={t('details.ariaLabel', { name: detail.name })}
      nav={
        <NavConteiner
          sections={tabs}
          activeAnchorId="detalhes-projeto"
        />
      }
    >
      <SectionConteiner
        sectionId="detalhes-projeto"
        blockClass="page-portfolio-format"
        className="details-project"
        title={
          <button
            type="button"
            className="details-project__back"
            onClick={goBack}
            aria-label={t('details.backAria')}
          >
            <ArrowLeft className="details-project__back-icon" strokeWidth={2.4} />
            <span>{t('details.back')}</span>
          </button>
        }
      >
        <div className="details-project__content">
          <header className="details-project__intro">
            <div className="details-project__copy">
              <h1 className="details-project__title">{detail.name}</h1>
              <p className="details-project__description">{detail.description}</p>

              <TecnologicLabelList
                technologies={detail.technologies}
                className="details-project__tech-list"
              />
            </div>

            <div className="details-project__actions" aria-label={t('details.projectLinks')}>
              {detail.githubUrl ? (
                <LinkButton
                  label="GitHub"
                  icon={<IconGithub />}
                  onClick={() => openExternalLink(detail.githubUrl!)}
                  className="details-project__link"
                />
              ) : null}
              {detail.projectHref ? (
                <LinkButton
                  label={t('details.projectPage')}
                  icon={<LinkIcon strokeWidth={2.25} />}
                  onClick={() => openProjectLink(detail.projectHref!)}
                  className="details-project__link"
                />
              ) : null}
            </div>
          </header>

          <div className="details-project__details-media">
            <ProjectDetailsContent project={project} />
          </div>

          {detail.copyright ? (
            <p className="details-project__copyright">* {detail.copyright}</p>
          ) : null}
        </div>
      </SectionConteiner>
    </PageConteiner>
  )
}
