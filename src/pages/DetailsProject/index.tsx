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
import type { BrowserWindowControls } from '../../components/conteiner'
import { useNavigateWithTransition } from '../../hooks/useNavigateWithTransition'
import {
  DEFAULT_PROJECT_IMAGE,
  projectsCardsData,
  projectsData,
} from '../../mocks'
import {
  IconCode,
  IconLayers,
} from '../../models/sectionIcons'
import { IconGithub } from '../../components/icons/socialIcons'
import './detailsProject.css'

export type DetailsProjectProps = {
  isMaximized?: boolean
  windowControls: BrowserWindowControls
}

export default function DetailsProject({
  isMaximized = false,
  windowControls,
}: DetailsProjectProps) {
  const { projectId } = useParams()
  const navigate = useNavigateWithTransition()

  const card = useMemo(
    () => projectsCardsData.find((item) => item.id === projectId),
    [projectId],
  )

  const project = useMemo(
    () => projectsData.find((item) => item.id === projectId) ?? card?.project,
    [card, projectId],
  )

  const detail = useMemo(() => {
    return {
      name: project?.name ?? 'Projeto não encontrado',
      description:
        project?.description ??
        'Estrutura inicial da página de detalhes do projeto. Adicione descrição, imagens e links no mock de projetos para preencher este conteúdo.',
      imageDetails: project?.imageDetails ?? DEFAULT_PROJECT_IMAGE,
      technologies: project?.technologies ?? [],
      githubUrl: project?.githubUrl,
      projectHref: project?.projectHref,
      copyright: project?.copyright,
      found: project != null,
    }
  }, [project])

  const tabs = useMemo(
    () => [
      {
        title: 'Portfólio',
        anchorId: 'portfolio',
        icon: <IconLayers />,
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
    [detail.name, navigate],
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
      isFullscreen={isMaximized}
      ariaLabel={`Detalhes do projeto ${detail.name}`}
      nav={
        <NavConteiner
          sections={tabs}
          activeAnchorId="detalhes-projeto"
          windowControls={windowControls}
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
            aria-label="Voltar para a página anterior"
          >
            <ArrowLeft className="details-project__back-icon" strokeWidth={2.4} />
            <span>Projeto</span>
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

            <div className="details-project__actions" aria-label="Links do projeto">
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
                  label="Página do Projeto"
                  icon={<LinkIcon strokeWidth={2.25} />}
                  onClick={() => openProjectLink(detail.projectHref!)}
                  className="details-project__link"
                />
              ) : null}
            </div>
          </header>

          <figure className="details-project__details-media">
            <img
              className="details-project__details-image"
              src={detail.imageDetails}
              alt={`Detalhes do projeto ${detail.name}`}
              loading="eager"
              decoding="async"
            />
          </figure>

          {detail.copyright ? (
            <p className="details-project__copyright">* {detail.copyright}</p>
          ) : null}
        </div>
      </SectionConteiner>
    </PageConteiner>
  )
}
