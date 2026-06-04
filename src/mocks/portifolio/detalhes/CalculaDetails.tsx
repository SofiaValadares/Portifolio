import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import './calculaDetails.css'

const SCREENS = [
  {
    src: '/projects/details/calcula/tela-calculadora.png',
    alt: 'Tela da calculadora padrão do Calcula',
    title: 'Calculadora',
    caption: 'Teclado numérico, operações básicas e histórico clicável com até 50 itens salvos no navegador.',
  },
  {
    src: '/projects/details/calcula/tela-porcentagem.png',
    alt: 'Tela de cálculo de porcentagem do Calcula',
    title: 'Porcentagem',
    caption:
      'Frase editável com prioridade configurável por campo — valor, total ou percentual recalculam conforme a regra escolhida.',
  },
  {
    src: '/projects/details/calcula/tela-bases-numericas.png',
    alt: 'Tela de conversão de bases numéricas do Calcula',
    title: 'Bases numéricas',
    caption:
      'Conversão entre bases 2 a 36, atalhos binário/octal/decimal/hex e resultados personalizáveis com histórico.',
  },
] as const

const INTRO_PARAGRAPHS = [
  'Calcula reúne calculadora e conversores em uma única aplicação web Angular, com interface limpa em tons de azul e histórico persistente no navegador. Pensada para uso rápido no dia a dia, alterna entre ferramentas por abas sem recarregar a página.',
  'Além da calculadora padrão, o app inclui conversão de medidas, cálculo de porcentagem com frase interativa, unidades visuais (px, rem, dp…) e bases numéricas com validação e atalhos clássicos. Cada módulo mantém histórico próprio, clicável para restaurar valores anteriores.',
  'O design system em SCSS define tokens azuis, scrollbars customizadas e layout responsivo para desktop e mobile. Build de produção na Vercel, com testes unitários via Vitest.',
] as const

const MODULES = [
  {
    name: 'Calculadora',
    detail: 'Operações básicas, limpar/apagar e histórico de até 50 operações.',
  },
  {
    name: 'Medidas',
    detail: 'Conversão entre mm, cm, m, km, ml e l, inclusive entre categorias via equivalência cúbica.',
  },
  {
    name: 'Porcentagem',
    detail: 'Frase “O valor X de Y unidades equivale a Z%” com prioridade por campo.',
  },
  {
    name: 'Unidades visuais',
    detail: 'px, cm, mm, polegadas, pt, rem, em e dp com DPI e fonte base configuráveis.',
  },
  {
    name: 'Bases numéricas',
    detail: 'Bases 2–36, atalhos clássicos e resultados personalizáveis com validação visual.',
  },
] as const

const FEATURES = [
  { label: '5 módulos', detail: 'em uma só app' },
  { label: 'Histórico', detail: 'localStorage' },
  { label: 'Angular 21', detail: 'TypeScript + SCSS' },
  { label: 'Responsivo', detail: 'desktop e mobile' },
  { label: 'Vitest', detail: 'testes unitários' },
  { label: 'Vercel', detail: 'deploy estático' },
] as const

const ARCHITECTURE_PARAGRAPHS = [
  'Calcula é uma SPA Angular com componente raiz centralizando estado e lógica de cada conversor. A navegação por abas troca o módulo ativo no mesmo template; históricos são persistidos separadamente via localStorage.',
  'O design system global em styles.scss define tokens azuis, tipografia e scrollbars. Cada ferramenta encapsula validação, recálculo em tempo real e restauração ao clicar no histórico — padrão repetido em calculadora, medidas, porcentagem, unidades visuais e bases.',
] as const

const TECH_STACK = [
  { name: 'Angular 21', detail: 'framework SPA' },
  { name: 'TypeScript', detail: 'tipagem estática' },
  { name: 'SCSS', detail: 'design system azul' },
  { name: 'localStorage', detail: 'históricos locais' },
  { name: 'Vitest', detail: 'testes unitários' },
  { name: 'Vercel', detail: 'deploy produção' },
] as const

const PROJECT_STRUCTURE = `src/
├── app/
│   ├── app.ts      # lógica e estado
│   ├── app.html    # template principal
│   └── app.scss    # estilos do componente
└── styles.scss     # tokens globais`

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
    <div className="calcula-details__flow-step">
      <div className="calcula-details__flow-box">
        <span className="calcula-details__flow-label">{title}</span>
        {subtitle ? <span className="calcula-details__flow-sub">{subtitle}</span> : null}
      </div>
      {children}
    </div>
  )
}

export default function CalculaDetails({ project }: ProjectDetailsComponentProps) {
  const projectUrl = project.projectHref ?? 'https://calcula.sofiavcav.dev/'
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/calcula'

  return (
    <article className="calcula-details" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className="calcula-details__inner">
        <header className="calcula-details__hero">
          <span className="calcula-details__logo" aria-hidden="true">
            Σ
          </span>
          <h2 className="calcula-details__title">Calcula</h2>
          <p className="calcula-details__tagline">Calculadora e conversores em um só lugar</p>
        </header>

        <section className="calcula-details__section calcula-details__intro">
          <div className="calcula-details__intro-copy">
            <h3 className="calcula-details__heading">Sobre o projeto</h3>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="calcula-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="calcula-details__features" aria-label="Destaques do projeto">
            {FEATURES.map(({ label, detail }) => (
              <li key={label} className="calcula-details__feature">
                <span className="calcula-details__feature-label">{label}</span>
                <span className="calcula-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="calcula-details__section calcula-details__modules-list">
          <h3 className="calcula-details__heading calcula-details__heading--center">Módulos</h3>
          <ul className="calcula-details__modules-grid">
            {MODULES.map(({ name, detail }) => (
              <li key={name} className="calcula-details__module-chip">
                <strong className="calcula-details__module-name">{name}</strong>
                <span className="calcula-details__module-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="calcula-details__section calcula-details__screens">
          <h3 className="calcula-details__heading calcula-details__heading--center">
            Telas do aplicativo
          </h3>
          <div className="calcula-details__screen-grid">
            {SCREENS.map(({ src, alt, title, caption }) => (
              <figure key={src} className="calcula-details__screen-card">
                <div className="calcula-details__screen-frame">
                  <img
                    className="calcula-details__screen-image"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="calcula-details__screen-caption">
                  <strong className="calcula-details__screen-title">{title}</strong>
                  <span className="calcula-details__screen-text">{caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="calcula-details__section calcula-details__architecture">
          <div className="calcula-details__flow" aria-label="Diagrama de arquitetura">
            <FlowStep title="Navegador">
              <span className="calcula-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="Angular SPA" subtitle="componente raiz">
              <div className="calcula-details__flow-routes">
                <span>Calculadora</span>
                <span>Medidas</span>
                <span>Porcentagem</span>
                <span>Unidades</span>
                <span>Bases</span>
              </div>
              <span className="calcula-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="calcula-details__flow-row">
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">Estado</span>
                  <span className="calcula-details__flow-sub">app.ts</span>
                </div>
              </div>
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">Histórico</span>
                  <span className="calcula-details__flow-sub">localStorage</span>
                </div>
              </div>
              <div className="calcula-details__flow-step">
                <div className="calcula-details__flow-box">
                  <span className="calcula-details__flow-label">Deploy</span>
                  <span className="calcula-details__flow-sub">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="calcula-details__architecture-copy">
            <h3 className="calcula-details__heading">Arquitetura</h3>
            {ARCHITECTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="calcula-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="calcula-details__subheading">Estrutura do código</h4>
            <pre className="calcula-details__code-block">
              <code>{PROJECT_STRUCTURE}</code>
            </pre>
          </div>
        </section>

        <section className="calcula-details__section calcula-details__stack">
          <h3 className="calcula-details__heading calcula-details__heading--center">
            Stack técnica
          </h3>
          <ul className="calcula-details__stack-grid">
            {TECH_STACK.map(({ name, detail }) => (
              <li key={name} className="calcula-details__stack-item">
                <span className="calcula-details__stack-name">{name}</span>
                <span className="calcula-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="calcula-details__footer">
          <p className="calcula-details__visit-label">Use em</p>
          <a
            className="calcula-details__visit-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl}
          </a>
          <p className="calcula-details__visit-label">Código em</p>
          <a
            className="calcula-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="calcula-details__credit">Desenvolvido por Sofia Valadares Cavalcanti</p>
        </footer>
      </div>
    </article>
  )
}
