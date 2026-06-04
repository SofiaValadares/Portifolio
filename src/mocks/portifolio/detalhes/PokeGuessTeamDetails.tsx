import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import './pokeGuessTeamDetails.css'

const GAME_SCREEN = '/projects/banner/poketeamguess-screem.png'

const INTRO_PARAGRAPHS = [
  'PokeGuessTeam é um jogo local de dedução de times Pokémon feito com HTML, CSS e JavaScript puro (ES Modules), sem bibliotecas externas. A interface imita uma Pokédex clássica, com painéis vermelhos, azul escuro e acentos dourados.',
  'Cada partida coloca dois lados com seis Pokémon. Os jogadores tentam descobrir o time adversário por palpites exatos; a cada chute, o painel revela pistas visuais por slot — tipos, cor, geração, altura e peso já confirmados.',
  'O projeto inclui cadastro de treinador, perfil com nível e XP, histórico de partidas, montagem de time com busca e drag-and-drop, modo local ou contra IA, e persistência completa via localStorage. Deploy estático na Vercel com hash routes.',
] as const

const MECHANICS_TEXT =
  'O painel esquerdo exibe seis slots de dedução com o que já se sabe sobre cada posição do time inimigo. Ao confirmar um palpite, o jogo compara o Pokémon escolhido com o slot correspondente e colore as pistas: verde para informação correta, vermelho para incorreta. Palpites repetidos são bloqueados por jogador. O placar à direita acompanha pontuação, turno atual e Pokémon já acertados de cada lado. A partida termina quando um jogador descobre os seis slots ou desiste.'

const GAME_MODES = [
  {
    title: 'Partida local',
    detail:
      'O jogador cria a partida, informa o adversário, monta o próprio time e o time do convidado, e inicia com alternância de turnos entre os dois lados.',
  },
  {
    title: 'Contra IA',
    detail:
      'Pela Home, o botão Jogar contra IA leva à seleção de apenas um time. A IA recebe time aleatório e executa palpites automaticamente na sua vez.',
  },
] as const

const JOURNEY_STEPS = [
  {
    title: 'Cadastrar treinador',
    detail: 'Escolha nome e sprite; o perfil, nível e XP ficam salvos no navegador.',
  },
  {
    title: 'Montar o time',
    detail: 'Selecione 6 Pokémon com busca, filtro por geração, time aleatório ou drag-and-drop.',
  },
  {
    title: 'Disputar palpites',
    detail: 'Alterne turnos e chute Pokémon; o painel mostra pistas por slot e bloqueia repetições.',
  },
  {
    title: 'Vencer ou desistir',
    detail: 'Acerte os seis slots do adversário ou encerre a partida; o histórico é registrado localmente.',
  },
] as const

const CLUE_TYPES = [
  { label: 'Tipos', detail: 'elementos do Pokémon' },
  { label: 'Cor', detail: 'cor dominante do sprite' },
  { label: 'Geração', detail: 'região de origem' },
  { label: 'Altura', detail: 'comparativo por slot' },
  { label: 'Peso', detail: 'comparativo por slot' },
] as const

const FEATURES = [
  { label: '6 slots', detail: 'por time' },
  { label: '2 modos', detail: 'local e IA' },
  { label: '0 libs', detail: 'JS puro' },
  { label: 'XP & nível', detail: 'progressão local' },
  { label: 'Drag-and-drop', detail: 'ordem do time' },
  { label: 'Hash routes', detail: 'SPA estática' },
] as const

const ARCHITECTURE_PARAGRAPHS = [
  'PokeGuessTeam usa ES Modules com componentes HTML carregados via fetch(). A navegação é feita por hash routes (#/home, #/game, etc.), sem build step. O estado da partida vive na classe MatchState; perfil, XP e histórico ficam no store com localStorage.',
  'A IA escolhe time automaticamente e aplica heurística simples para palpites. A arquitetura separa pages, components, models, config, store e design system (ds/) com variáveis CSS globais. Sprites de Pokémon e treinadores vêm de assets locais com créditos à PMD SpriteCollab.',
] as const

const TECH_STACK = [
  { name: 'HTML5', detail: 'componentes dinâmicos' },
  { name: 'CSS3', detail: 'design system próprio' },
  { name: 'JavaScript', detail: 'ES Modules' },
  { name: 'localStorage', detail: 'perfil e partidas' },
  { name: 'fetch()', detail: 'carrega partials HTML' },
  { name: 'Vercel', detail: 'deploy estático' },
] as const

const PROJECT_STRUCTURE = `index.html
main.js
assets/          # sprites
components/      # UI reutilizável
config/          # regras e IA
ds/              # tokens CSS
models/          # domínio
pages/           # telas (#/home, #/game…)
store/           # persistência local`

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
    <div className="poke-guess-details__flow-step">
      <div className="poke-guess-details__flow-box">
        <span className="poke-guess-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="poke-guess-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function PokeGuessTeamDetails({ project }: ProjectDetailsComponentProps) {
  const projectUrl = project.projectHref ?? 'https://poke-guess-team.vercel.app/'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/PokeGuessTeam'
  const gameScreen = project.imageSecondary ?? GAME_SCREEN

  return (
    <article className="poke-guess-details" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className="poke-guess-details__inner">
        <header className="poke-guess-details__hero">
          <div className="poke-guess-details__hero-lens" aria-hidden="true">
            <span className="poke-guess-details__hero-lens-ring" />
            <span className="poke-guess-details__hero-lens-core" />
          </div>
          <h2 className="poke-guess-details__title">PokeGuessTeam</h2>
          <p className="poke-guess-details__tagline">Monte. Palpite. Vença.</p>
        </header>

        <section className="poke-guess-details__section poke-guess-details__intro">
          <div className="poke-guess-details__intro-copy">
            <h3 className="poke-guess-details__heading">Sobre o projeto</h3>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="poke-guess-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="poke-guess-details__features" aria-label="Destaques do projeto">
            {FEATURES.map(({ label, detail }) => (
              <li key={label} className="poke-guess-details__feature">
                <span className="poke-guess-details__feature-label">{label}</span>
                <span className="poke-guess-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="poke-guess-details__section poke-guess-details__journey">
          <h3 className="poke-guess-details__heading poke-guess-details__heading--center">
            Fluxo da partida
          </h3>
          <ol className="poke-guess-details__journey-list">
            {JOURNEY_STEPS.map(({ title, detail }, index) => (
              <li key={title} className="poke-guess-details__journey-step">
                <span className="poke-guess-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="poke-guess-details__journey-content">
                  <strong className="poke-guess-details__journey-title">{title}</strong>
                  <span className="poke-guess-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="poke-guess-details__section poke-guess-details__gameplay">
          <div className="poke-guess-details__gameplay-copy">
            <h3 className="poke-guess-details__heading">Gameplay</h3>
            <p className="poke-guess-details__text">{MECHANICS_TEXT}</p>

            <ul className="poke-guess-details__clues" aria-label="Tipos de pista por slot">
              {CLUE_TYPES.map(({ label, detail }) => (
                <li key={label} className="poke-guess-details__clue">
                  <span className="poke-guess-details__clue-label">{label}</span>
                  <span className="poke-guess-details__clue-detail">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="poke-guess-details__game-preview">
            <img
              className="poke-guess-details__game-image"
              src={gameScreen}
              alt="Tela de partida do PokeGuessTeam com campos de adivinhação e controle de turnos"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="poke-guess-details__section poke-guess-details__modes">
          <h3 className="poke-guess-details__heading">Modos de jogo</h3>
          <div className="poke-guess-details__modes-grid">
            {GAME_MODES.map(({ title, detail }) => (
              <article key={title} className="poke-guess-details__mode-card">
                <h4 className="poke-guess-details__subheading">{title}</h4>
                <p className="poke-guess-details__text">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="poke-guess-details__section poke-guess-details__architecture">
          <div className="poke-guess-details__flow" aria-label="Diagrama de arquitetura">
            <FlowStep title="Navegador">
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="ES Modules SPA" subtitle="hash routes">
              <div className="poke-guess-details__flow-routes">
                <span>#/</span>
                <span>#/home</span>
                <span>#/team</span>
                <span>#/game</span>
              </div>
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="MatchState" subtitle="estado da partida">
              <span className="poke-guess-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="poke-guess-details__flow-row">
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">Store</span>
                  <span className="poke-guess-details__flow-sub">localStorage</span>
                </div>
              </div>
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">IA</span>
                  <span className="poke-guess-details__flow-sub">config/</span>
                </div>
              </div>
              <div className="poke-guess-details__flow-step">
                <div className="poke-guess-details__flow-box">
                  <span className="poke-guess-details__flow-label">Deploy</span>
                  <span className="poke-guess-details__flow-sub">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="poke-guess-details__architecture-copy">
            <h3 className="poke-guess-details__heading">Arquitetura</h3>
            {ARCHITECTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="poke-guess-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="poke-guess-details__subheading">Estrutura do código</h4>
            <pre className="poke-guess-details__code-block">
              <code>{PROJECT_STRUCTURE}</code>
            </pre>
          </div>
        </section>

        <section className="poke-guess-details__section poke-guess-details__stack">
          <h3 className="poke-guess-details__heading poke-guess-details__heading--center">
            Stack técnica
          </h3>
          <ul className="poke-guess-details__stack-grid">
            {TECH_STACK.map(({ name, detail }) => (
              <li key={name} className="poke-guess-details__stack-item">
                <span className="poke-guess-details__stack-name">{name}</span>
                <span className="poke-guess-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="poke-guess-details__footer">
          <p className="poke-guess-details__visit-label">Jogue em</p>
          <a
            className="poke-guess-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="poke-guess-details__visit-label">Código em</p>
          <a
            className="poke-guess-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="poke-guess-details__credit">
            Desenvolvido por Sofia Valadares Cavalcanti · Sprites por artistas da PMD SpriteCollab
          </p>
        </footer>
      </div>
    </article>
  )
}
