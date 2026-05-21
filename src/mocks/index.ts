/**
 * Dados mock da aplicação.
 * Agrupa fixtures por domínio em subpastas (`portifolio/`, `shared/`, …).
 */

export { langLogo } from './shared/langLogo'

export { expertisesCardsData } from './portifolio/expertisesCards'
export { projectsCardsData } from './portifolio/projectsCards'
export { DEFAULT_PROJECT_IMAGE, projectsData } from './portifolio/projects'
export { experiencesAccordionData } from './portifolio/experiencesAccordion'

/** Importar direto de `./portifolio/sectionsPortifolioList` (evita ciclo com componentes). */
