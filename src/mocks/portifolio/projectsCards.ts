import type {
  ProjectCardData,
  ProjectCardVariation,
} from '../../models/ProjectCardModel'
import { projectsData } from './projects'

const cardVariations: ProjectCardVariation[] = [
  'large',
  'double-horizontal',
  'standard',
  'standard',
  'standard',
  'double-vertical',
  'standard',
]

/** Ordem para o grid masonry (3 colunas, `grid-auto-flow: dense`). */
export const projectsCardsData: ProjectCardData[] = cardVariations.map((variation, index) => {
  const project = projectsData[index % projectsData.length]

  return {
    id: project.id,
    variation,
    project,
  }
})
