import type {
  ProjectCardData,
} from '../../models/ProjectCardModel'
import { projectsData } from './projects'

const snakeArcadeID = '1';
const snakeArcade =
  projectsData.find((project) => project.id === snakeArcadeID) ??
  projectsData[0];

const sentinelaID = '2';
const sentinela =
  projectsData.find((project) => project.id === sentinelaID) ??
  projectsData[0];

const pokeTeamGuessID = '3';
const pokeTeamGuess =
  projectsData.find((project) => project.id === pokeTeamGuessID) ??
  projectsData[0]

const calculaID = "4";
const calcula =
  projectsData.find((project) => project.id === calculaID) ??
  projectsData[0];

const studyAndGrowID = '5';
const studyAndGrow =
  projectsData.find((project) => project.id === studyAndGrowID) ??
  projectsData[0];

export const projectsCardsData: ProjectCardData[] = [{
  id: studyAndGrow.id,
  variation: 'large',
  project: studyAndGrow,
},
{
  id: pokeTeamGuess.id,
  variation: 'double-horizontal',
  project: pokeTeamGuess,
},
{
  id: snakeArcade.id,
  variation: 'standard',
  project: snakeArcade,
},
{
  id: sentinela.id,
  variation: 'standard',
  project: sentinela,
},
{
  id: calcula.id,
  variation: 'standard',
  project: calcula,
},
{
  id: pokeTeamGuess.id,
  variation: 'double-vertical',
  project: pokeTeamGuess,
},
{
  id: pokeTeamGuess.id,
  variation: 'standard',
  project: pokeTeamGuess,
},
]