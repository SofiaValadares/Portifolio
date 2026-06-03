import type { ProjectCardData, ProjectCardVariation } from '../../../../../../models/ProjectCardModel'
import type { ProjectModel } from '../../../../../../models/ProjectModel'
import BigCard from './cards/bigCard'
import HorizontalCard from './cards/horizontalCard'
import SmallCard from './cards/smallCard'
import VerticalCard from './cards/verticalCard'

const DEFAULT_IMAGE = '/default-image.png'

export const ProjetoCardType = {
  SMALL_CARD: 'standard',
  VERTICAL_CARD: 'double-vertical',
  HORIZONTAL_CARD: 'double-horizontal',
  BIG_CARD: 'large',
} as const

function imageCountFor(variation: ProjectCardVariation): number {
  return variation === 'large' || variation === 'double-horizontal' || variation === 'double-vertical'
    ? 2
    : 1
}

function resolveImages(project: ProjectModel, variation: ProjectCardVariation): string[] {
  const count = imageCountFor(variation)
  const list = [
    project.imagePrimary,
    project.imageSecondary,
    project.imageDetails,
  ].filter((image): image is string => Boolean(image))

  while (list.length < count) {
    list.push(DEFAULT_IMAGE)
  }

  return list.slice(0, count)
}

export function ProjetoCard(props: ProjectCardData) {
  const { project, variation } = props
  const cardProps = {
    id: project.id,
    name: project.name,
    images: resolveImages(project, variation),
    technologies: project.technologies,
    projectHref: project.projectHref ?? '#projetos',
    githubUrl: project.githubUrl,
  }

  switch (variation) {
    case ProjetoCardType.BIG_CARD:
      return <BigCard {...cardProps} />
    case ProjetoCardType.HORIZONTAL_CARD:
      return <HorizontalCard {...cardProps} />
    case ProjetoCardType.VERTICAL_CARD:
      return <VerticalCard {...cardProps} />
    case ProjetoCardType.SMALL_CARD:
      return <SmallCard {...cardProps} />
  }
}
