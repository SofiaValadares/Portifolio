import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import './studyAndGrowDetails.css'

const TREE_SCREEN = '/projects/details/study-and-grow/tela-arvore.png'
const POMODORO_SCREEN = '/projects/details/study-and-grow/tela-pomodoro.png'

const INTRO_PARAGRAPHS = [
  'Study and Grow é uma aplicação web que transforma tempo de estudo em crescimento visual: cada minuto registrado nos cronômetros alimenta a árvore ativa, que evolui em dez estágios até a maturidade.',
  'O conceito combina gamificação leve com produtividade — em vez de badges genéricos, o progresso aparece como uma árvore em pixel art que muda de forma a cada estágio. Árvores concluídas vão para a estufa, criando um jardim pessoal de conquistas.',
  'A app inclui cronômetro livre e técnica Pomodoro com ciclos configuráveis, suporte a português e inglês, e layout responsivo pensado para uso diário. Todo o jardim e as preferências persistem no navegador, sem necessidade de conta.',
] as const

const MECHANICS_TEXT =
  'O tempo de estudo é contabilizado pelo cronômetro ou pelo Pomodoro enquanto a sessão está ativa. Cada minuto soma à idade da árvore e avança a barra de progresso até o próximo estágio. Ao atingir o estágio 10 (Madura), a árvore é automaticamente movida para a estufa com registro de data de início e conclusão, liberando o plantio de uma nova espécie. Completar todas as oito espécies iniciais desbloqueia a nona — a Mística — com arte exclusiva em tons de azul.'

const GROWTH_STAGES = [
  { stage: 1, name: 'Semente', time: '0 min' },
  { stage: 2, name: 'Broto', time: '1 h 30' },
  { stage: 3, name: 'Caule', time: '4 h' },
  { stage: 4, name: 'Crescendo', time: '8 h' },
  { stage: 5, name: 'Folha', time: '12 h' },
  { stage: 6, name: 'Galhos', time: '20 h' },
  { stage: 7, name: 'Arbusto', time: '30 h' },
  { stage: 8, name: 'Jovem', time: '50 h' },
  { stage: 9, name: 'Adulta', time: '90 h' },
  { stage: 10, name: 'Madura', time: '160 h' },
] as const

const ARVORES_BASE = '/projects/details/study-and-grow/arvores'

const SPECIES = [
  { name: 'Carvalho', slug: 'carvalho', locked: false },
  { name: 'Pinheiro', slug: 'pinheiro', locked: false },
  { name: 'Cerejeira', slug: 'cerejeira', locked: false },
  { name: 'Salgueiro', slug: 'salgueiro', locked: false },
  { name: 'Bétula', slug: 'betula', locked: false },
  { name: 'Bordo', slug: 'bordo', locked: false },
  { name: 'Oliveira', slug: 'oliveira', locked: false },
  { name: 'Ipê', slug: 'ipe', locked: false },
  { name: 'Mística', slug: 'mistica', locked: true },
] as const

const JOURNEY_STEPS = [
  {
    title: 'Escolher espécie',
    detail: 'Na tela Árvore, selecione uma das oito espécies disponíveis para iniciar um ciclo de dez estágios.',
  },
  {
    title: 'Estudar com timer',
    detail: 'Use o cronômetro livre ou o Pomodoro. Cada minuto ativo alimenta a árvore e avança o progresso.',
  },
  {
    title: 'Acompanhar crescimento',
    detail: 'Veja o estágio atual, a barra de progresso e o tempo de vida acumulado em tempo real.',
  },
  {
    title: 'Colher na estufa',
    detail: 'Ao atingir maturidade, a árvore vai para a estufa. Plante outra espécie e repita o ciclo.',
  },
  {
    title: 'Desbloquear a Mística',
    detail: 'Complete todas as oito espécies pelo menos uma vez para liberar a nona árvore exclusiva.',
  },
] as const

const STUDY_TOOLS = [
  {
    title: 'Cronômetro',
    detail:
      'Contagem livre de tempo de estudo, sem limite de duração. Ideal para sessões longas ou quando não se quer seguir intervalos fixos.',
  },
  {
    title: 'Pomodoro',
    detail:
      'Ciclos configuráveis de estudo, pausa curta e pausa longa. O timer exibe a sessão atual (ex.: 1 de 4), o estado da seção e controlos de play, pausa e reinício.',
  },
] as const

const ARCHITECTURE_PARAGRAPHS = [
  'Study and Grow é uma SPA em React 19 com Vite e React Router. Rotas separadas cobrem início, árvore, estufa, cronômetro, configuração do Pomodoro e timer ativo. O estado global — jardim, locale, sessão de Pomodoro e preferências — vive em context providers; hooks dedicados encapsulam a lógica de cronômetro, countdown e ciclos Pomodoro.',
  'Cada espécie possui dez ilustrações SVG em pixel art (uma por estágio), servidas a partir de assets organizados por espécie. Traduções pt/en ficam em módulos i18n; desbloqueios, cálculo de estágios e formatação de tempo em utilitários puros. Tudo persiste via localStorage. Build estática com Vite e deploy na Vercel.',
] as const

const TECH_STACK = [
  { name: 'React 19', detail: 'componentes e context API' },
  { name: 'TypeScript', detail: 'tipagem em todo o projeto' },
  { name: 'Vite', detail: 'dev server e build' },
  { name: 'React Router', detail: 'navegação entre páginas' },
  { name: 'CSS customizado', detail: 'sem framework de UI' },
  { name: 'Montserrat Alternates', detail: 'tipografia principal' },
] as const

const PROJECT_STRUCTURE = `src/
├── assets/tree/     # SVGs por espécie e estágio
├── components/      # UI reutilizável
├── context/         # jardim, locale, pomodoro
├── data/            # catálogo de espécies
├── hooks/           # cronômetro, pomodoro
├── i18n/            # traduções pt/en
├── pages/           # rotas da aplicação
└── utils/           # estágios, desbloqueios`

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
    <div className="study-grow-details__flow-step">
      <div className="study-grow-details__flow-box">
        <span className="study-grow-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="study-grow-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function StudyAndGrowDetails({ project }: ProjectDetailsComponentProps) {
  const projectUrl = project.projectHref ?? 'https://studyandgrow.sofiavcav.dev'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/study-and-grow'

  return (
    <article className="study-grow-details" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className="study-grow-details__inner">
        <header className="study-grow-details__hero">
          <div className="study-grow-details__sun" aria-hidden="true">
            <span className="study-grow-details__sun-ring" />
            <span className="study-grow-details__sun-core" />
          </div>
          <h2 className="study-grow-details__title">Study and Grow</h2>
          <p className="study-grow-details__tagline">Estude. Cultive. Cresça.</p>
        </header>

        <section className="study-grow-details__section study-grow-details__intro">
          <div className="study-grow-details__intro-copy">
            <h3 className="study-grow-details__heading">Sobre o projeto</h3>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="study-grow-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="study-grow-details__features" aria-label="Destaques do projeto">
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">8 espécies</span>
              <span className="study-grow-details__feature-detail">+ 1 mística desbloqueável</span>
            </li>
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">10 estágios</span>
              <span className="study-grow-details__feature-detail">até 160 h de estudo</span>
            </li>
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">Pomodoro</span>
              <span className="study-grow-details__feature-detail">ciclos configuráveis</span>
            </li>
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">PT / EN</span>
              <span className="study-grow-details__feature-detail">troca de idioma</span>
            </li>
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">localStorage</span>
              <span className="study-grow-details__feature-detail">sem conta necessária</span>
            </li>
            <li className="study-grow-details__feature">
              <span className="study-grow-details__feature-label">Pixel art</span>
              <span className="study-grow-details__feature-detail">90 SVGs de árvores</span>
            </li>
          </ul>
        </section>

        <section className="study-grow-details__section study-grow-details__journey">
          <h3 className="study-grow-details__heading study-grow-details__heading--center">
            Jornada do usuário
          </h3>
          <ol className="study-grow-details__journey-list">
            {JOURNEY_STEPS.map(({ title, detail }, index) => (
              <li key={title} className="study-grow-details__journey-step">
                <span className="study-grow-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="study-grow-details__journey-content">
                  <strong className="study-grow-details__journey-title">{title}</strong>
                  <span className="study-grow-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="study-grow-details__section study-grow-details__mechanics">
          <div className="study-grow-details__mechanics-copy">
            <h3 className="study-grow-details__heading">Como funciona</h3>
            <p className="study-grow-details__text">{MECHANICS_TEXT}</p>
          </div>

          <figure className="study-grow-details__mechanics-preview">
            <img
              className="study-grow-details__mechanics-image"
              src={TREE_SCREEN}
              alt="Tela de crescimento da árvore ativa no Study and Grow"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="study-grow-details__section study-grow-details__stages">
          <div className="study-grow-details__stages-copy">
            <h3 className="study-grow-details__heading">Estágios de crescimento</h3>
            <p className="study-grow-details__text">
              Cada espécie percorre dez estágios com tempo acumulado mínimo. O sprite muda a
              cada nível; ao atingir Madura, a árvore é transferida para a estufa.
            </p>
          </div>

          <div className="study-grow-details__stages-table-wrap">
            <table className="study-grow-details__stages-table">
              <caption className="study-grow-details__sr-only">
                Estágios de crescimento e tempo mínimo acumulado
              </caption>
              <thead>
                <tr>
                  <th scope="col">Estágio</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Tempo mín.</th>
                </tr>
              </thead>
              <tbody>
                {GROWTH_STAGES.map(({ stage, name, time }) => (
                  <tr key={stage}>
                    <td>{stage}</td>
                    <td>{name}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="study-grow-details__section study-grow-details__species">
          <h3 className="study-grow-details__heading">Espécies</h3>
          <p className="study-grow-details__text">
            Oito árvores estão disponíveis desde o início. Cada uma possui dez ilustrações SVG
            em pixel art — uma por estágio. A nona espécie, <strong>Mística</strong>, só
            desbloqueia depois de completar todas as outras pelo menos uma vez.
          </p>

          <ul className="study-grow-details__species-gallery" aria-label="Espécies e arte madura">
            {SPECIES.map(({ name, slug, locked }) => (
              <li
                key={slug}
                className={`study-grow-details__species-card${locked ? ' study-grow-details__species-card--locked' : ''}`}
              >
                <div className="study-grow-details__species-art">
                  <img
                    src={`${ARVORES_BASE}/${slug}.svg`}
                    alt={`${name} no estágio maduro`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="study-grow-details__species-name">{name}</span>
                {locked ? (
                  <span className="study-grow-details__species-lock">Desbloqueável</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="study-grow-details__section study-grow-details__tools">
          <div className="study-grow-details__tools-copy">
            <h3 className="study-grow-details__heading">Ferramentas de estudo</h3>
            {STUDY_TOOLS.map(({ title, detail }) => (
              <div key={title} className="study-grow-details__tool-block">
                <h4 className="study-grow-details__subheading">{title}</h4>
                <p className="study-grow-details__text">{detail}</p>
              </div>
            ))}
          </div>

          <figure className="study-grow-details__tools-preview">
            <img
              className="study-grow-details__tools-image"
              src={POMODORO_SCREEN}
              alt="Tela do Pomodoro no Study and Grow"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="study-grow-details__section study-grow-details__architecture">
          <div className="study-grow-details__flow" aria-label="Diagrama de arquitetura">
            <FlowStep title="Navegador / Usuário">
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="React 19 SPA" subtitle="Vite + React Router">
              <div className="study-grow-details__flow-routes">
                <span>/</span>
                <span>/tree</span>
                <span>/estufa</span>
                <span>/cronometro</span>
                <span>/pomodoro</span>
              </div>
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="Context providers" subtitle="jardim · locale · pomodoro">
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="Hooks" subtitle="cronômetro · countdown · pomodoro">
              <span className="study-grow-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="study-grow-details__flow-row">
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">Persistência</span>
                  <span className="study-grow-details__flow-sub">localStorage</span>
                </div>
              </div>
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">i18n</span>
                  <span className="study-grow-details__flow-sub">pt / en</span>
                </div>
              </div>
              <div className="study-grow-details__flow-step">
                <div className="study-grow-details__flow-box">
                  <span className="study-grow-details__flow-label">Deploy</span>
                  <span className="study-grow-details__flow-sub">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="study-grow-details__architecture-copy">
            <h3 className="study-grow-details__heading">Arquitetura</h3>
            {ARCHITECTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="study-grow-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="study-grow-details__subheading">Estrutura do código</h4>
            <pre className="study-grow-details__code-block">
              <code>{PROJECT_STRUCTURE}</code>
            </pre>
          </div>
        </section>

        <section className="study-grow-details__section study-grow-details__stack">
          <h3 className="study-grow-details__heading study-grow-details__heading--center">
            Stack técnica
          </h3>
          <ul className="study-grow-details__stack-grid">
            {TECH_STACK.map(({ name, detail }) => (
              <li key={name} className="study-grow-details__stack-item">
                <span className="study-grow-details__stack-name">{name}</span>
                <span className="study-grow-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="study-grow-details__footer">
          <p className="study-grow-details__visit-label">Experimente em</p>
          <a
            className="study-grow-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="study-grow-details__visit-label">Código em</p>
          <a
            className="study-grow-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="study-grow-details__credit">Desenvolvido por Sofia Valadares Cavalcanti</p>
        </footer>
      </div>
    </article>
  )
}
