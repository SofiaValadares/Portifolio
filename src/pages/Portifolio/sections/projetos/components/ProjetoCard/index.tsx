import type { ProjectCardProps, ProjectCardVariation } from '../../../../../../models/ProjectCardModel'
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

function resolveImages(
  images: string | string[] | undefined,
  variation: ProjectCardVariation,
): string[] {
  const count = imageCountFor(variation)
  const list = images == null ? [] : typeof images === 'string' ? [images] : [...images]

  while (list.length < count) {
    list.push(DEFAULT_IMAGE)
  }

  return list.slice(0, count)
}

export function ProjetoCard(props: ProjectCardProps) {
  const cardProps = {
    ...props,
    images: resolveImages(props.images, props.variation),
  }

  switch (props.variation) {
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
