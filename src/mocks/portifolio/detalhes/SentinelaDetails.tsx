import type { ReactNode } from 'react'
import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import './sentinelaDetails.css'

const BANNER_IMAGE = '/projects/banner/sentinela.png'
const DOCS_URL = 'https://sentinela-frontend-seven.vercel.app/'
const API_URL = 'https://sentinela-bii6.onrender.com'
const FRONT_REPO_URL = 'https://github.com/caetrias/sentinela-front'

const INTRO_PARAGRAPHS = [
  'SENTINELA é um sistema de monitoramento e análise ambiental focado na Caatinga, desenvolvido pelo grupo Canidé (CESAR School). A API em FastAPI transforma dados ambientais brutos em informações úteis sobre risco de incêndios e focos de queimadas na região.',
  'O projeto foi pensado com viés educativo: estudantes em períodos iniciais de computação podem aprender a consumir APIs REST, trabalhar com dados reais e explorar aplicações ambientais em um tema relevante para o Brasil.',
  'Além da API, há documentação interativa publicada na Vercel, coleção Postman para testes e deploy na nuvem (Render). A análise combina modelos de machine learning com visão computacional para predição por coordenadas e detecção em imagens.',
] as const

const MY_CONTRIBUTION =
  'Fui responsável pela API em si: estruturação dos endpoints FastAPI e integração com os modelos de ML treinados pelo grupo. Isso incluiu carregar os artefatos, validar entradas, serializar respostas e publicar a API no Render.'

const FEATURES = [
  { label: 'Caatinga', detail: 'bioma em foco' },
  { label: '3 endpoints', detail: 'ping, predict, image' },
  { label: 'ML + visão', detail: 'scikit-learn e YOLO' },
  { label: 'Postman', detail: 'coleção incluída' },
  { label: 'Docs web', detail: 'front na Vercel' },
  { label: '8 integrantes', detail: 'grupo Canidé' },
] as const

const JOURNEY_STEPS = [
  {
    title: 'Consultar a documentação',
    detail: 'Acesse o front de docs para entender parâmetros, respostas e exemplos de cada endpoint.',
  },
  {
    title: 'Testar com Postman',
    detail: 'Importe a coleção do repositório e experimente ping, predict e upload de imagem.',
  },
  {
    title: 'Predição por coordenadas',
    detail: 'Envie latitude, longitude e dias sem chuva para obter o risco de incêndio na região.',
  },
  {
    title: 'Análise de imagem',
    detail: 'Faça POST com uma foto; a API retorna se há incêndio detectado e a imagem tratada em base64.',
  },
] as const

const ENDPOINTS = [
  {
    method: 'GET',
    path: '/sent/ping',
    detail: 'Verifica se a API está no ar. Resposta: {"pong"}.',
  },
  {
    method: 'GET',
    path: '/sent/predict',
    detail:
      'Predição de risco por latitude, longitude e days_without_rain (obrigatórios). Parâmetro data_pas opcional.',
  },
  {
    method: 'POST',
    path: '/sent/image',
    detail:
      'Recebe imagem em form-data (campo file). Retorna detecção de incêndio e imagem recortada em base64.',
  },
] as const

const TEAM_MEMBERS = [
  'Maria Luiza Calife',
  'Danilo Albuquerque',
  'Guilherme Silveira',
  'Sofia Valadares',
  'João Vítor Fittipaldi',
  'Gabriel Caetano',
  'Arthur Suzuki',
  'Marina Frias',
] as const

const ARCHITECTURE_PARAGRAPHS = [
  'A API roda em FastAPI com Uvicorn. O pacote fast_sentinela expõe rotas sob o prefixo /sent: health check, predição tabular com modelos treinados (pandas, scikit-learn, joblib) e pipeline de visão com PyTorch, torchvision e Ultralytics para análise de imagens.',
  'A camada de integração conecta cada endpoint ao modelo correspondente: /predict recebe coordenadas e dias sem chuva e devolve o risco calculado; /image processa o upload, executa a inferência e retorna detecção e imagem tratada em base64. O front de documentação é um projeto separado (sentinela-front), publicado na Vercel.',
] as const

const TECH_STACK = [
  { name: 'FastAPI', detail: 'API REST' },
  { name: 'Python 3.10+', detail: 'backend' },
  { name: 'scikit-learn', detail: 'predição tabular' },
  { name: 'PyTorch', detail: 'visão computacional' },
  { name: 'Ultralytics', detail: 'detecção em imagem' },
  { name: 'Render', detail: 'deploy da API' },
] as const

const PROJECT_STRUCTURE = `SENTINELA/
├── fast_sentinela/
│   ├── fast_sentinela/   # app FastAPI
│   ├── tests/
│   └── pyproject.toml
└── README.md             # docs e Postman`

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
    <div className="sentinela-details__flow-step">
      <div className="sentinela-details__flow-box">
        <span className="sentinela-details__flow-label">{title}</span>
        {subtitle ? (
          <span className="sentinela-details__flow-sub">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function SentinelaDetails({ project }: ProjectDetailsComponentProps) {
  const githubUrl = project.githubUrl ?? 'https://github.com/SofiaValadares/SENTINELA'
  const bannerImage = project.imagePrimary ?? BANNER_IMAGE

  return (
    <article className="sentinela-details" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className="sentinela-details__inner">
        <header className="sentinela-details__hero">
          <figure className="sentinela-details__hero-banner">
            <img
              className="sentinela-details__hero-image"
              src={bannerImage}
              alt="Banner do SENTINELA — sistema de monitoramento ambiental"
              loading="eager"
              decoding="async"
            />
          </figure>
          <p className="sentinela-details__tagline">Monitoramento e análise ambiental da Caatinga</p>
        </header>

        <section className="sentinela-details__section sentinela-details__intro">
          <div className="sentinela-details__intro-copy">
            <h3 className="sentinela-details__heading">Sobre o projeto</h3>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="sentinela-details__text">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="sentinela-details__features" aria-label="Destaques do projeto">
            {FEATURES.map(({ label, detail }) => (
              <li key={label} className="sentinela-details__feature">
                <span className="sentinela-details__feature-label">{label}</span>
                <span className="sentinela-details__feature-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="sentinela-details__section sentinela-details__contribution">
          <h3 className="sentinela-details__heading">Minha contribuição</h3>
          <p className="sentinela-details__text sentinela-details__contribution-text">
            {MY_CONTRIBUTION}
          </p>
        </section>

        <section className="sentinela-details__section sentinela-details__journey">
          <h3 className="sentinela-details__heading sentinela-details__heading--center">
            Como usar a API
          </h3>
          <ol className="sentinela-details__journey-list">
            {JOURNEY_STEPS.map(({ title, detail }, index) => (
              <li key={title} className="sentinela-details__journey-step">
                <span className="sentinela-details__journey-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="sentinela-details__journey-content">
                  <strong className="sentinela-details__journey-title">{title}</strong>
                  <span className="sentinela-details__journey-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="sentinela-details__section sentinela-details__endpoints">
          <div className="sentinela-details__endpoints-copy">
            <h3 className="sentinela-details__heading">Endpoints</h3>
            <p className="sentinela-details__text">
              Rotas principais sob o prefixo <code className="sentinela-details__inline-code">/sent</code>.
              Base local: <code className="sentinela-details__inline-code">http://127.0.0.1:8000</code>.
              Produção:{' '}
              <a
                className="sentinela-details__inline-link"
                href={API_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {API_URL}
              </a>
            </p>
          </div>

          <div className="sentinela-details__endpoints-table-wrap">
            <table className="sentinela-details__endpoints-table">
              <caption className="sentinela-details__sr-only">Endpoints da API SENTINELA</caption>
              <thead>
                <tr>
                  <th scope="col">Método</th>
                  <th scope="col">Rota</th>
                  <th scope="col">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {ENDPOINTS.map(({ method, path, detail }) => (
                  <tr key={path}>
                    <td>
                      <span
                        className={`sentinela-details__method sentinela-details__method--${method.toLowerCase()}`}
                      >
                        {method}
                      </span>
                    </td>
                    <td>
                      <code className="sentinela-details__path-code">{path}</code>
                    </td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="sentinela-details__section sentinela-details__team">
          <h3 className="sentinela-details__heading">Grupo Canidé</h3>
          <p className="sentinela-details__text">
            Projeto acadêmico desenvolvido por estudantes de Ciência da Computação da CESAR School,
            integrantes do grupo Canidé.
          </p>
          <ul className="sentinela-details__team-grid" aria-label="Integrantes do grupo Canidé">
            {TEAM_MEMBERS.map((name) => (
              <li
                key={name}
                className={`sentinela-details__team-member${name === 'Sofia Valadares' ? ' sentinela-details__team-member--highlight' : ''}`}
              >
                {name}
                {name === 'Sofia Valadares' ? (
                  <span className="sentinela-details__team-role">API · integração ML</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="sentinela-details__section sentinela-details__architecture">
          <div className="sentinela-details__flow" aria-label="Diagrama de arquitetura">
            <FlowStep title="Cliente" subtitle="Postman · docs · apps">
              <span className="sentinela-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <FlowStep title="FastAPI" subtitle="prefixo /sent">
              <div className="sentinela-details__flow-routes">
                <span>/ping</span>
                <span>/predict</span>
                <span>/image</span>
              </div>
              <span className="sentinela-details__flow-line" aria-hidden="true" />
            </FlowStep>

            <div className="sentinela-details__flow-row">
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">ML tabular</span>
                  <span className="sentinela-details__flow-sub">scikit-learn</span>
                </div>
              </div>
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">Visão</span>
                  <span className="sentinela-details__flow-sub">PyTorch · YOLO</span>
                </div>
              </div>
              <div className="sentinela-details__flow-step">
                <div className="sentinela-details__flow-box">
                  <span className="sentinela-details__flow-label">Deploy</span>
                  <span className="sentinela-details__flow-sub">Render</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sentinela-details__architecture-copy">
            <h3 className="sentinela-details__heading">Arquitetura</h3>
            {ARCHITECTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="sentinela-details__text">
                {paragraph}
              </p>
            ))}

            <h4 className="sentinela-details__subheading">Estrutura do repositório</h4>
            <pre className="sentinela-details__code-block">
              <code>{PROJECT_STRUCTURE}</code>
            </pre>
          </div>
        </section>

        <section className="sentinela-details__section sentinela-details__stack">
          <h3 className="sentinela-details__heading sentinela-details__heading--center">
            Stack técnica
          </h3>
          <ul className="sentinela-details__stack-grid">
            {TECH_STACK.map(({ name, detail }) => (
              <li key={name} className="sentinela-details__stack-item">
                <span className="sentinela-details__stack-name">{name}</span>
                <span className="sentinela-details__stack-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="sentinela-details__footer">
          <p className="sentinela-details__visit-label">Documentação em</p>
          <a
            className="sentinela-details__visit-link"
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DOCS_URL}
          </a>
          <p className="sentinela-details__visit-label">API em produção</p>
          <a
            className="sentinela-details__visit-link"
            href={API_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {API_URL}
          </a>
          <p className="sentinela-details__visit-label">Repositório da API</p>
          <a
            className="sentinela-details__visit-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl}
          </a>
          <p className="sentinela-details__visit-label">Front da documentação</p>
          <a
            className="sentinela-details__visit-link"
            href={FRONT_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FRONT_REPO_URL}
          </a>
          {project.copyright ? (
            <p className="sentinela-details__credit">* {project.copyright}</p>
          ) : null}
        </footer>
      </div>
    </article>
  )
}
