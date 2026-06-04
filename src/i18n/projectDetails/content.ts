import type { Locale } from '../localeSlice'

const snake = {
  pt: {
    ariaLabel: 'Detalhes do projeto {{name}}',
    title: 'SNAKE ARCADE',
    heading: 'Snake Arcade',
    intro: [
      'Snake Arcade é um jogo clássico da cobra desenvolvido com React e TypeScript, com identidade visual retro/arcade. No menu, escolhes a cor primária e secundária da cobra e vês a pré-visualização antes de começar.',
      'Durante a partida, comes maçãs para crescer e evitas bater nas paredes ou em ti mesma. A app inclui pontuação em tempo real, recorde guardado no browser, controlos por teclado (setas ou WASD) ou botões no ecrã, pausa e layout responsivo para desktop e telemóvel.',
    ],
    architecture: [
      'Snake Arcade é uma SPA em React com React Router: a rota / renderiza o menu de personalização de cores e /game a partida. O SnakeThemeProvider partilha as cores primária e secundária entre as duas páginas, para a pré-visualização e o canvas usarem o mesmo tema.',
      'A lógica do jogo vive num componente dedicado com Canvas 2D; a página do jogo trata pontuação, recorde, pausa e controlos. O recorde persiste no browser via utilitário próprio, e o visual segue um design system em CSS com tokens retro. Build estático (Create React App) e deploy na Vercel.',
    ],
    gameplay:
      'O tabuleiro é renderizado em HTML Canvas numa grelha 20x20, com a cobra a mover-se em intervalos fixos. Cada maçã comida aumenta o score e faz a cobra crescer; uma nova maçã aparece numa célula livre. A direção entra numa fila e não permite inverter 180º de imediato. O jogo termina ao bater na parede ou no próprio corpo. Há pausa, reinício e game over com opção de jogar outra vez (Espaço, Enter ou botão).',
    gameImageAlt: 'Tela do jogo Snake Arcade',
    flow: {
      browser: 'NAVEGADOR / USUÁRIO',
      spa: 'REACT SPA',
      spaSub: 'App.tsx',
      theme: 'SNAKE THEME PROVIDER',
      themeSub: 'Context API',
      router: 'REACT ROUTER',
      menu: 'Menu (/)',
      game: 'Game (/game)',
      layer: 'CAMADA DE JOGO',
      layerSub: 'Canvas 2D',
      persistence: 'PERSISTÊNCIA',
      persistenceSub: 'localStorage',
      design: 'SISTEMA DE DESIGN',
      designSub: 'CSS tokens',
      deploy: 'IMPLANTAÇÃO',
      deploySub: 'Vercel',
    },
  },
  en: {
    ariaLabel: 'Project details for {{name}}',
    title: 'SNAKE ARCADE',
    heading: 'Snake Arcade',
    intro: [
      'Snake Arcade is a classic snake game built with React and TypeScript, with a retro/arcade visual identity. In the menu, you choose the snake’s primary and secondary colors and see a preview before starting.',
      'During the game, you eat apples to grow and avoid hitting walls or yourself. The app includes real-time scoring, a browser-persistent high score, keyboard controls (arrows or WASD) or on-screen buttons, pause and a responsive layout for desktop and mobile.',
    ],
    architecture: [
      'Snake Arcade is a React SPA with React Router: the / route renders the color customization menu and /game the match. SnakeThemeProvider shares primary and secondary colors across both pages so the preview and canvas use the same theme.',
      'Game logic lives in a dedicated Canvas 2D component; the game page handles score, high score, pause and controls. The record persists in the browser via a custom utility, and the visual follows a CSS design system with retro tokens. Static build (Create React App) and Vercel deployment.',
    ],
    gameplay:
      'The board is rendered in HTML Canvas on a 20×20 grid, with the snake moving at fixed intervals. Each apple eaten increases the score and makes the snake grow; a new apple appears in a free cell. Direction is queued and 180° reversals are blocked. The game ends when hitting a wall or the snake’s own body. There is pause, restart and game over with an option to play again (Space, Enter or button).',
    gameImageAlt: 'Snake Arcade game screen',
    flow: {
      browser: 'BROWSER / USER',
      spa: 'REACT SPA',
      spaSub: 'App.tsx',
      theme: 'SNAKE THEME PROVIDER',
      themeSub: 'Context API',
      router: 'REACT ROUTER',
      menu: 'Menu (/)',
      game: 'Game (/game)',
      layer: 'GAME LAYER',
      layerSub: 'Canvas 2D',
      persistence: 'PERSISTENCE',
      persistenceSub: 'localStorage',
      design: 'DESIGN SYSTEM',
      designSub: 'CSS tokens',
      deploy: 'DEPLOYMENT',
      deploySub: 'Vercel',
    },
  },
} as const

const sentinela = {
  pt: {
    ariaLabel: 'Detalhes do projeto {{name}}',
    bannerAlt: 'Banner do SENTINELA — sistema de monitoramento ambiental',
    tagline: 'Monitoramento e análise ambiental da Caatinga',
    intro: [
      'SENTINELA é um sistema de monitoramento e análise ambiental focado na Caatinga, desenvolvido pelo grupo Canidé (CESAR School). A API em FastAPI transforma dados ambientais brutos em informações úteis sobre risco de incêndios e focos de queimadas na região.',
      'O projeto foi pensado com viés educativo: estudantes em períodos iniciais de computação podem aprender a consumir APIs REST, trabalhar com dados reais e explorar aplicações ambientais em um tema relevante para o Brasil.',
      'Além da API, há documentação interativa publicada na Vercel, coleção Postman para testes e deploy na nuvem (Render). A análise combina modelos de machine learning com visão computacional para predição por coordenadas e detecção em imagens.',
    ],
    myContribution:
      'Fui responsável pela API em si: estruturação dos endpoints FastAPI e integração com os modelos de ML treinados pelo grupo. Isso incluiu carregar os artefatos, validar entradas, serializar respostas e publicar a API no Render.',
    features: [
      { label: 'Caatinga', detail: 'bioma em foco' },
      { label: '3 endpoints', detail: 'ping, predict, image' },
      { label: 'ML + visão', detail: 'scikit-learn e YOLO' },
      { label: 'Postman', detail: 'coleção incluída' },
      { label: 'Docs web', detail: 'front na Vercel' },
      { label: '8 integrantes', detail: 'grupo Canidé' },
    ],
    journey: [
      {
        title: 'Consultar a documentação',
        detail:
          'Acesse o front de docs para entender parâmetros, respostas e exemplos de cada endpoint.',
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
        detail:
          'Faça POST com uma foto; a API retorna se há incêndio detectado e a imagem tratada em base64.',
      },
    ],
    endpoints: [
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
    ],
    teamMembers: [
      'Maria Luiza Calife',
      'Danilo Albuquerque',
      'Guilherme Silveira',
      'Sofia Valadares',
      'João Vítor Fittipaldi',
      'Gabriel Caetano',
      'Arthur Suzuki',
      'Marina Frias',
    ],
    sofiaName: 'Sofia Valadares',
    architecture: [
      'A API roda em FastAPI com Uvicorn. O pacote fast_sentinela expõe rotas sob o prefixo /sent: health check, predição tabular com modelos treinados (pandas, scikit-learn, joblib) e pipeline de visão com PyTorch, torchvision e Ultralytics para análise de imagens.',
      'A camada de integração conecta cada endpoint ao modelo correspondente: /predict recebe coordenadas e dias sem chuva e devolve o risco calculado; /image processa o upload, executa a inferência e retorna detecção e imagem tratada em base64. O front de documentação é um projeto separado (sentinela-front), publicado na Vercel.',
    ],
    projectStructure: `SENTINELA/
├── fast_sentinela/
│   ├── fast_sentinela/   # app FastAPI
│   ├── tests/
│   └── pyproject.toml
└── README.md             # docs e Postman`,
    techStack: [
      { name: 'FastAPI', detail: 'API REST' },
      { name: 'Python 3.10+', detail: 'backend' },
      { name: 'scikit-learn', detail: 'predição tabular' },
      { name: 'PyTorch', detail: 'visão computacional' },
      { name: 'Ultralytics', detail: 'detecção em imagem' },
      { name: 'Render', detail: 'deploy da API' },
    ],
    flow: {
      client: 'Cliente',
      clientSub: 'Postman · docs · apps',
      fastapi: 'FastAPI',
      fastapiSub: 'prefixo /sent',
      tabular: 'ML tabular',
      tabularSub: 'scikit-learn',
      vision: 'Visão',
      visionSub: 'PyTorch · YOLO',
      deploy: 'Deploy',
      deploySub: 'Render',
    },
  },
  en: {
    ariaLabel: 'Project details for {{name}}',
    bannerAlt: 'SENTINELA banner — environmental monitoring system',
    tagline: 'Environmental monitoring and analysis of the Caatinga',
    intro: [
      'SENTINELA is an environmental monitoring and analysis system focused on the Caatinga biome, developed by the Canidé group (CESAR School). The FastAPI API turns raw environmental data into useful information about fire risk and burn hotspots in the region.',
      'The project was designed with an educational focus: students in early computing courses can learn to consume REST APIs, work with real data and explore environmental applications on a theme relevant to Brazil.',
      'Beyond the API, there is interactive documentation published on Vercel, a Postman collection for testing and cloud deployment (Render). Analysis combines machine learning models with computer vision for coordinate-based prediction and image detection.',
    ],
    myContribution:
      'I was responsible for the API itself: structuring FastAPI endpoints and integrating with ML models trained by the group. This included loading artifacts, validating inputs, serializing responses and publishing the API on Render.',
    features: [
      { label: 'Caatinga', detail: 'biome in focus' },
      { label: '3 endpoints', detail: 'ping, predict, image' },
      { label: 'ML + vision', detail: 'scikit-learn and YOLO' },
      { label: 'Postman', detail: 'collection included' },
      { label: 'Web docs', detail: 'front-end on Vercel' },
      { label: '8 members', detail: 'Canidé group' },
    ],
    journey: [
      {
        title: 'Read the documentation',
        detail: 'Open the docs front-end to understand parameters, responses and examples for each endpoint.',
      },
      {
        title: 'Test with Postman',
        detail: 'Import the repository collection and try ping, predict and image upload.',
      },
      {
        title: 'Coordinate prediction',
        detail: 'Send latitude, longitude and days without rain to get fire risk for the region.',
      },
      {
        title: 'Image analysis',
        detail: 'POST a photo; the API returns whether fire was detected and the processed image in base64.',
      },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/sent/ping',
        detail: 'Checks if the API is up. Response: {"pong"}.',
      },
      {
        method: 'GET',
        path: '/sent/predict',
        detail:
          'Risk prediction by latitude, longitude and days_without_rain (required). Optional data_pas parameter.',
      },
      {
        method: 'POST',
        path: '/sent/image',
        detail:
          'Receives image as form-data (file field). Returns fire detection and cropped image in base64.',
      },
    ],
    teamMembers: [
      'Maria Luiza Calife',
      'Danilo Albuquerque',
      'Guilherme Silveira',
      'Sofia Valadares',
      'João Vítor Fittipaldi',
      'Gabriel Caetano',
      'Arthur Suzuki',
      'Marina Frias',
    ],
    sofiaName: 'Sofia Valadares',
    architecture: [
      'The API runs on FastAPI with Uvicorn. The fast_sentinela package exposes routes under the /sent prefix: health check, tabular prediction with trained models (pandas, scikit-learn, joblib) and a vision pipeline with PyTorch, torchvision and Ultralytics for image analysis.',
      'The integration layer connects each endpoint to the corresponding model: /predict receives coordinates and days without rain and returns calculated risk; /image processes the upload, runs inference and returns detection and processed image in base64. The documentation front-end is a separate project (sentinela-front), published on Vercel.',
    ],
    projectStructure: `SENTINELA/
├── fast_sentinela/
│   ├── fast_sentinela/   # FastAPI app
│   ├── tests/
│   └── pyproject.toml
└── README.md             # docs and Postman`,
    techStack: [
      { name: 'FastAPI', detail: 'REST API' },
      { name: 'Python 3.10+', detail: 'back-end' },
      { name: 'scikit-learn', detail: 'tabular prediction' },
      { name: 'PyTorch', detail: 'computer vision' },
      { name: 'Ultralytics', detail: 'image detection' },
      { name: 'Render', detail: 'API deployment' },
    ],
    flow: {
      client: 'Client',
      clientSub: 'Postman · docs · apps',
      fastapi: 'FastAPI',
      fastapiSub: '/sent prefix',
      tabular: 'Tabular ML',
      tabularSub: 'scikit-learn',
      vision: 'Vision',
      visionSub: 'PyTorch · YOLO',
      deploy: 'Deploy',
      deploySub: 'Render',
    },
  },
} as const

const pokeGuess = {
  pt: {
    ariaLabel: 'Detalhes do projeto {{name}}',
    title: 'PokeGuessTeam',
    tagline: 'Monte. Palpite. Vença.',
    intro: [
      'PokeGuessTeam é um jogo local de dedução de times Pokémon feito com HTML, CSS e JavaScript puro (ES Modules), sem bibliotecas externas. A interface imita uma Pokédex clássica, com painéis vermelhos, azul escuro e acentos dourados.',
      'Cada partida coloca dois lados com seis Pokémon. Os jogadores tentam descobrir o time adversário por palpites exatos; a cada chute, o painel revela pistas visuais por slot — tipos, cor, geração, altura e peso já confirmados.',
      'O projeto inclui cadastro de treinador, perfil com nível e XP, histórico de partidas, montagem de time com busca e drag-and-drop, modo local ou contra IA, e persistência completa via localStorage. Deploy estático na Vercel com hash routes.',
    ],
    mechanics:
      'O painel esquerdo exibe seis slots de dedução com o que já se sabe sobre cada posição do time inimigo. Ao confirmar um palpite, o jogo compara o Pokémon escolhido com o slot correspondente e colore as pistas: verde para informação correta, vermelho para incorreta. Palpites repetidos são bloqueados por jogador. O placar à direita acompanha pontuação, turno atual e Pokémon já acertados de cada lado. A partida termina quando um jogador descobre os seis slots ou desiste.',
    gameImageAlt:
      'Tela de partida do PokeGuessTeam com campos de adivinhação e controle de turnos',
    gameModes: [
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
    ],
    journey: [
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
    ],
    clues: [
      { label: 'Tipos', detail: 'elementos do Pokémon' },
      { label: 'Cor', detail: 'cor dominante do sprite' },
      { label: 'Geração', detail: 'região de origem' },
      { label: 'Altura', detail: 'comparativo por slot' },
      { label: 'Peso', detail: 'comparativo por slot' },
    ],
    features: [
      { label: '6 slots', detail: 'por time' },
      { label: '2 modos', detail: 'local e IA' },
      { label: '0 libs', detail: 'JS puro' },
      { label: 'XP & nível', detail: 'progressão local' },
      { label: 'Drag-and-drop', detail: 'ordem do time' },
      { label: 'Hash routes', detail: 'SPA estática' },
    ],
    architecture: [
      'PokeGuessTeam usa ES Modules com componentes HTML carregados via fetch(). A navegação é feita por hash routes (#/home, #/game, etc.), sem build step. O estado da partida vive na classe MatchState; perfil, XP e histórico ficam no store com localStorage.',
      'A IA escolhe time automaticamente e aplica heurística simples para palpites. A arquitetura separa pages, components, models, config, store e design system (ds/) com variáveis CSS globais. Sprites de Pokémon e treinadores vêm de assets locais com créditos à PMD SpriteCollab.',
    ],
    projectStructure: `index.html
main.js
assets/          # sprites
components/      # UI reutilizável
config/          # regras e IA
ds/              # tokens CSS
models/          # domínio
pages/           # telas (#/home, #/game…)
store/           # persistência local`,
    techStack: [
      { name: 'HTML5', detail: 'componentes dinâmicos' },
      { name: 'CSS3', detail: 'design system próprio' },
      { name: 'JavaScript', detail: 'ES Modules' },
      { name: 'localStorage', detail: 'perfil e partidas' },
      { name: 'fetch()', detail: 'carrega partials HTML' },
      { name: 'Vercel', detail: 'deploy estático' },
    ],
    flow: {
      browser: 'Navegador',
      spa: 'ES Modules SPA',
      spaSub: 'hash routes',
      match: 'MatchState',
      matchSub: 'estado da partida',
      store: 'Store',
      storeSub: 'localStorage',
      ai: 'IA',
      aiSub: 'config/',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
  en: {
    ariaLabel: 'Project details for {{name}}',
    title: 'PokeGuessTeam',
    tagline: 'Build. Guess. Win.',
    intro: [
      'PokeGuessTeam is a local Pokémon team deduction game built with plain HTML, CSS and JavaScript (ES Modules), with no external libraries. The interface mimics a classic Pokédex with red panels, dark blue and gold accents.',
      'Each match pits two sides with six Pokémon. Players try to discover the opponent’s team through exact guesses; with each guess, the panel reveals visual clues per slot — types, color, generation, height and weight already confirmed.',
      'The project includes trainer registration, profile with level and XP, match history, team building with search and drag-and-drop, local or vs AI mode, and full persistence via localStorage. Static Vercel deployment with hash routes.',
    ],
    mechanics:
      'The left panel shows six deduction slots with what is already known about each position on the enemy team. When confirming a guess, the game compares the chosen Pokémon with the corresponding slot and colors clues: green for correct information, red for incorrect. Repeated guesses are blocked per player. The scoreboard on the right tracks score, current turn and Pokémon already guessed on each side. The match ends when a player discovers all six slots or gives up.',
    gameImageAlt: 'PokeGuessTeam match screen with guess fields and turn control',
    gameModes: [
      {
        title: 'Local match',
        detail:
          'The player creates the match, enters the opponent, builds their own team and the guest’s team, and starts with alternating turns between both sides.',
      },
      {
        title: 'Vs AI',
        detail:
          'From Home, the Play vs AI button leads to selecting only one team. The AI gets a random team and makes guesses automatically on its turn.',
      },
    ],
    journey: [
      {
        title: 'Register trainer',
        detail: 'Choose name and sprite; profile, level and XP are saved in the browser.',
      },
      {
        title: 'Build the team',
        detail: 'Select 6 Pokémon with search, generation filter, random team or drag-and-drop.',
      },
      {
        title: 'Play guesses',
        detail: 'Alternate turns and guess Pokémon; the panel shows clues per slot and blocks repeats.',
      },
      {
        title: 'Win or give up',
        detail: 'Guess all six opponent slots or end the match; history is saved locally.',
      },
    ],
    clues: [
      { label: 'Types', detail: 'Pokémon elements' },
      { label: 'Color', detail: 'dominant sprite color' },
      { label: 'Generation', detail: 'region of origin' },
      { label: 'Height', detail: 'comparison per slot' },
      { label: 'Weight', detail: 'comparison per slot' },
    ],
    features: [
      { label: '6 slots', detail: 'per team' },
      { label: '2 modes', detail: 'local and AI' },
      { label: '0 libs', detail: 'plain JS' },
      { label: 'XP & level', detail: 'local progression' },
      { label: 'Drag-and-drop', detail: 'team order' },
      { label: 'Hash routes', detail: 'static SPA' },
    ],
    architecture: [
      'PokeGuessTeam uses ES Modules with HTML components loaded via fetch(). Navigation uses hash routes (#/home, #/game, etc.) with no build step. Match state lives in the MatchState class; profile, XP and history stay in the store with localStorage.',
      'The AI picks a team automatically and applies a simple heuristic for guesses. Architecture separates pages, components, models, config, store and design system (ds/) with global CSS variables. Pokémon and trainer sprites come from local assets with credits to PMD SpriteCollab.',
    ],
    projectStructure: `index.html
main.js
assets/          # sprites
components/      # reusable UI
config/          # rules and AI
ds/              # CSS tokens
models/          # domain
pages/           # screens (#/home, #/game…)
store/           # local persistence`,
    techStack: [
      { name: 'HTML5', detail: 'dynamic components' },
      { name: 'CSS3', detail: 'custom design system' },
      { name: 'JavaScript', detail: 'ES Modules' },
      { name: 'localStorage', detail: 'profile and matches' },
      { name: 'fetch()', detail: 'loads HTML partials' },
      { name: 'Vercel', detail: 'static deployment' },
    ],
    flow: {
      browser: 'Browser',
      spa: 'ES Modules SPA',
      spaSub: 'hash routes',
      match: 'MatchState',
      matchSub: 'match state',
      store: 'Store',
      storeSub: 'localStorage',
      ai: 'AI',
      aiSub: 'config/',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
} as const

const calcula = {
  pt: {
    ariaLabel: 'Detalhes do projeto {{name}}',
    title: 'Calcula',
    tagline: 'Calculadora e conversores em um só lugar',
    intro: [
      'Calcula reúne calculadora e conversores em uma única aplicação web Angular, com interface limpa em tons de azul e histórico persistente no navegador. Pensada para uso rápido no dia a dia, alterna entre ferramentas por abas sem recarregar a página.',
      'Além da calculadora padrão, o app inclui conversão de medidas, cálculo de porcentagem com frase interativa, unidades visuais (px, rem, dp…) e bases numéricas com validação e atalhos clássicos. Cada módulo mantém histórico próprio, clicável para restaurar valores anteriores.',
      'O design system em SCSS define tokens azuis, scrollbars customizadas e layout responsivo para desktop e mobile. Build de produção na Vercel, com testes unitários via Vitest.',
    ],
    screens: [
      {
        src: '/projects/details/calcula/tela-calculadora.png',
        alt: 'Tela da calculadora padrão do Calcula',
        title: 'Calculadora',
        caption:
          'Teclado numérico, operações básicas e histórico clicável com até 50 itens salvos no navegador.',
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
    ],
    modules: [
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
    ],
    features: [
      { label: '5 módulos', detail: 'em uma só app' },
      { label: 'Histórico', detail: 'localStorage' },
      { label: 'Angular 21', detail: 'TypeScript + SCSS' },
      { label: 'Responsivo', detail: 'desktop e mobile' },
      { label: 'Vitest', detail: 'testes unitários' },
      { label: 'Vercel', detail: 'deploy estático' },
    ],
    architecture: [
      'Calcula é uma SPA Angular com componente raiz centralizando estado e lógica de cada conversor. A navegação por abas troca o módulo ativo no mesmo template; históricos são persistidos separadamente via localStorage.',
      'O design system global em styles.scss define tokens azuis, tipografia e scrollbars. Cada ferramenta encapsula validação, recálculo em tempo real e restauração ao clicar no histórico — padrão repetido em calculadora, medidas, porcentagem, unidades visuais e bases.',
    ],
    projectStructure: `src/
├── app/
│   ├── app.ts      # lógica e estado
│   ├── app.html    # template principal
│   └── app.scss    # estilos do componente
└── styles.scss     # tokens globais`,
    techStack: [
      { name: 'Angular 21', detail: 'framework SPA' },
      { name: 'TypeScript', detail: 'tipagem estática' },
      { name: 'SCSS', detail: 'design system azul' },
      { name: 'localStorage', detail: 'históricos locais' },
      { name: 'Vitest', detail: 'testes unitários' },
      { name: 'Vercel', detail: 'deploy produção' },
    ],
    flow: {
      browser: 'Navegador',
      spa: 'Angular SPA',
      spaSub: 'componente raiz',
      routes: ['Calculadora', 'Medidas', 'Porcentagem', 'Unidades', 'Bases'],
      state: 'Estado',
      stateSub: 'app.ts',
      history: 'Histórico',
      historySub: 'localStorage',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
  en: {
    ariaLabel: 'Project details for {{name}}',
    title: 'Calcula',
    tagline: 'Calculator and converters in one place',
    intro: [
      'Calcula brings together a calculator and converters in a single Angular web app, with a clean blue-toned interface and browser-persistent history. Designed for quick everyday use, it switches tools via tabs without reloading the page.',
      'Beyond the standard calculator, the app includes unit conversion, percentage calculation with an interactive sentence, visual units (px, rem, dp…) and numeric bases with validation and classic shortcuts. Each module keeps its own clickable history to restore previous values.',
      'The SCSS design system defines blue tokens, custom scrollbars and a responsive layout for desktop and mobile. Production build on Vercel, with unit tests via Vitest.',
    ],
    screens: [
      {
        src: '/projects/details/calcula/tela-calculadora.png',
        alt: 'Calcula standard calculator screen',
        title: 'Calculator',
        caption:
          'Numeric keypad, basic operations and clickable history with up to 50 items saved in the browser.',
      },
      {
        src: '/projects/details/calcula/tela-porcentagem.png',
        alt: 'Calcula percentage calculation screen',
        title: 'Percentage',
        caption:
          'Editable sentence with configurable field priority — value, total or percentage recalculate according to the chosen rule.',
      },
      {
        src: '/projects/details/calcula/tela-bases-numericas.png',
        alt: 'Calcula numeric base conversion screen',
        title: 'Numeric bases',
        caption:
          'Conversion between bases 2 to 36, binary/octal/decimal/hex shortcuts and customizable results with history.',
      },
    ],
    modules: [
      {
        name: 'Calculator',
        detail: 'Basic operations, clear/backspace and history of up to 50 operations.',
      },
      {
        name: 'Units',
        detail: 'Conversion between mm, cm, m, km, ml and l, including cross-category via cubic equivalence.',
      },
      {
        name: 'Percentage',
        detail: 'Sentence “Value X of Y units equals Z%” with field priority.',
      },
      {
        name: 'Visual units',
        detail: 'px, cm, mm, inches, pt, rem, em and dp with configurable DPI and base font.',
      },
      {
        name: 'Numeric bases',
        detail: 'Bases 2–36, classic shortcuts and customizable results with visual validation.',
      },
    ],
    features: [
      { label: '5 modules', detail: 'in one app' },
      { label: 'History', detail: 'localStorage' },
      { label: 'Angular 21', detail: 'TypeScript + SCSS' },
      { label: 'Responsive', detail: 'desktop and mobile' },
      { label: 'Vitest', detail: 'unit tests' },
      { label: 'Vercel', detail: 'static deployment' },
    ],
    architecture: [
      'Calcula is an Angular SPA with a root component centralizing state and logic for each converter. Tab navigation switches the active module in the same template; histories are persisted separately via localStorage.',
      'The global design system in styles.scss defines blue tokens, typography and scrollbars. Each tool encapsulates validation, real-time recalculation and restore-on-click from history — a pattern repeated across calculator, units, percentage, visual units and bases.',
    ],
    projectStructure: `src/
├── app/
│   ├── app.ts      # logic and state
│   ├── app.html    # main template
│   └── app.scss    # component styles
└── styles.scss     # global tokens`,
    techStack: [
      { name: 'Angular 21', detail: 'SPA framework' },
      { name: 'TypeScript', detail: 'static typing' },
      { name: 'SCSS', detail: 'blue design system' },
      { name: 'localStorage', detail: 'local histories' },
      { name: 'Vitest', detail: 'unit tests' },
      { name: 'Vercel', detail: 'production deployment' },
    ],
    flow: {
      browser: 'Browser',
      spa: 'Angular SPA',
      spaSub: 'root component',
      routes: ['Calculator', 'Units', 'Percentage', 'Visual units', 'Bases'],
      state: 'State',
      stateSub: 'app.ts',
      history: 'History',
      historySub: 'localStorage',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
} as const

const studyAndGrow = {
  pt: {
    ariaLabel: 'Detalhes do projeto {{name}}',
    title: 'Study and Grow',
    tagline: 'Estude. Cultive. Cresça.',
    intro: [
      'Study and Grow é uma aplicação web que transforma tempo de estudo em crescimento visual: cada minuto registrado nos cronômetros alimenta a árvore ativa, que evolui em dez estágios até a maturidade.',
      'O conceito combina gamificação leve com produtividade — em vez de badges genéricos, o progresso aparece como uma árvore em pixel art que muda de forma a cada estágio. Árvores concluídas vão para a estufa, criando um jardim pessoal de conquistas.',
      'A app inclui cronômetro livre e técnica Pomodoro com ciclos configuráveis, suporte a português e inglês, e layout responsivo pensado para uso diário. Todo o jardim e as preferências persistem no navegador, sem necessidade de conta.',
    ],
    mechanics:
      'O tempo de estudo é contabilizado pelo cronômetro ou pelo Pomodoro enquanto a sessão está ativa. Cada minuto soma à idade da árvore e avança a barra de progresso até o próximo estágio. Ao atingir o estágio 10 (Madura), a árvore é automaticamente movida para a estufa com registro de data de início e conclusão, liberando o plantio de uma nova espécie. Completar todas as oito espécies iniciais desbloqueia a nona — a Mística — com arte exclusiva em tons de azul.',
    treeImageAlt: 'Tela de crescimento da árvore ativa no Study and Grow',
    pomodoroImageAlt: 'Tela do Pomodoro no Study and Grow',
    features: [
      { label: '8 espécies', detail: '+ 1 mística desbloqueável' },
      { label: '10 estágios', detail: 'até 160 h de estudo' },
      { label: 'Pomodoro', detail: 'ciclos configuráveis' },
      { label: 'PT / EN', detail: 'troca de idioma' },
      { label: 'localStorage', detail: 'sem conta necessária' },
      { label: 'Pixel art', detail: '90 SVGs de árvores' },
    ],
    growthStages: [
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
    ],
    species: [
      { name: 'Carvalho', slug: 'carvalho', locked: false },
      { name: 'Pinheiro', slug: 'pinheiro', locked: false },
      { name: 'Cerejeira', slug: 'cerejeira', locked: false },
      { name: 'Salgueiro', slug: 'salgueiro', locked: false },
      { name: 'Bétula', slug: 'betula', locked: false },
      { name: 'Bordo', slug: 'bordo', locked: false },
      { name: 'Oliveira', slug: 'oliveira', locked: false },
      { name: 'Ipê', slug: 'ipe', locked: false },
      { name: 'Mística', slug: 'mistica', locked: true },
    ],
    journey: [
      {
        title: 'Escolher espécie',
        detail:
          'Na tela Árvore, selecione uma das oito espécies disponíveis para iniciar um ciclo de dez estágios.',
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
    ],
    studyTools: [
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
    ],
    architecture: [
      'Study and Grow é uma SPA em React 19 com Vite e React Router. Rotas separadas cobrem início, árvore, estufa, cronômetro, configuração do Pomodoro e timer ativo. O estado global — jardim, locale, sessão de Pomodoro e preferências — vive em context providers; hooks dedicados encapsulam a lógica de cronômetro, countdown e ciclos Pomodoro.',
      'Cada espécie possui dez ilustrações SVG em pixel art (uma por estágio), servidas a partir de assets organizados por espécie. Traduções pt/en ficam em módulos i18n; desbloqueios, cálculo de estágios e formatação de tempo em utilitários puros. Tudo persiste via localStorage. Build estática com Vite e deploy na Vercel.',
    ],
    projectStructure: `src/
├── assets/tree/     # SVGs por espécie e estágio
├── components/      # UI reutilizável
├── context/         # jardim, locale, pomodoro
├── data/            # catálogo de espécies
├── hooks/           # cronômetro, pomodoro
├── i18n/            # traduções pt/en
├── pages/           # rotas da aplicação
└── utils/           # estágios, desbloqueios`,
    techStack: [
      { name: 'React 19', detail: 'componentes e context API' },
      { name: 'TypeScript', detail: 'tipagem em todo o projeto' },
      { name: 'Vite', detail: 'dev server e build' },
      { name: 'React Router', detail: 'navegação entre páginas' },
      { name: 'CSS customizado', detail: 'sem framework de UI' },
      { name: 'Montserrat Alternates', detail: 'tipografia principal' },
    ],
    flow: {
      browser: 'Navegador / Usuário',
      spa: 'React 19 SPA',
      spaSub: 'Vite + React Router',
      context: 'Context providers',
      contextSub: 'jardim · locale · pomodoro',
      hooks: 'Hooks',
      hooksSub: 'cronômetro · countdown · pomodoro',
      persistence: 'Persistência',
      persistenceSub: 'localStorage',
      i18n: 'i18n',
      i18nSub: 'pt / en',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
  en: {
    ariaLabel: 'Project details for {{name}}',
    title: 'Study and Grow',
    tagline: 'Study. Grow. Thrive.',
    intro: [
      'Study and Grow is a web app that turns study time into visual growth: each minute logged on the timers feeds the active tree, which evolves through ten stages to maturity.',
      'The concept combines light gamification with productivity — instead of generic badges, progress appears as a pixel-art tree that changes shape at each stage. Completed trees go to the greenhouse, creating a personal garden of achievements.',
      'The app includes a free stopwatch and Pomodoro technique with configurable cycles, Portuguese and English support, and a responsive layout designed for daily use. The entire garden and preferences persist in the browser with no account required.',
    ],
    mechanics:
      'Study time is counted by the stopwatch or Pomodoro while the session is active. Each minute adds to the tree’s age and advances the progress bar to the next stage. When stage 10 (Mature) is reached, the tree is automatically moved to the greenhouse with start and completion dates recorded, allowing a new species to be planted. Completing all eight initial species unlocks the ninth — the Mystic — with exclusive blue-toned art.',
    treeImageAlt: 'Active tree growth screen in Study and Grow',
    pomodoroImageAlt: 'Pomodoro screen in Study and Grow',
    features: [
      { label: '8 species', detail: '+ 1 unlockable mystic' },
      { label: '10 stages', detail: 'up to 160 h of study' },
      { label: 'Pomodoro', detail: 'configurable cycles' },
      { label: 'PT / EN', detail: 'language switch' },
      { label: 'localStorage', detail: 'no account needed' },
      { label: 'Pixel art', detail: '90 tree SVGs' },
    ],
    growthStages: [
      { stage: 1, name: 'Seed', time: '0 min' },
      { stage: 2, name: 'Sprout', time: '1 h 30' },
      { stage: 3, name: 'Stem', time: '4 h' },
      { stage: 4, name: 'Growing', time: '8 h' },
      { stage: 5, name: 'Leaf', time: '12 h' },
      { stage: 6, name: 'Branches', time: '20 h' },
      { stage: 7, name: 'Bush', time: '30 h' },
      { stage: 8, name: 'Young', time: '50 h' },
      { stage: 9, name: 'Adult', time: '90 h' },
      { stage: 10, name: 'Mature', time: '160 h' },
    ],
    species: [
      { name: 'Oak', slug: 'carvalho', locked: false },
      { name: 'Pine', slug: 'pinheiro', locked: false },
      { name: 'Cherry', slug: 'cerejeira', locked: false },
      { name: 'Willow', slug: 'salgueiro', locked: false },
      { name: 'Birch', slug: 'betula', locked: false },
      { name: 'Maple', slug: 'bordo', locked: false },
      { name: 'Olive', slug: 'oliveira', locked: false },
      { name: 'Ipê', slug: 'ipe', locked: false },
      { name: 'Mystic', slug: 'mistica', locked: true },
    ],
    journey: [
      {
        title: 'Choose species',
        detail: 'On the Tree screen, select one of eight available species to start a ten-stage cycle.',
      },
      {
        title: 'Study with timer',
        detail: 'Use the free stopwatch or Pomodoro. Each active minute feeds the tree and advances progress.',
      },
      {
        title: 'Track growth',
        detail: 'See the current stage, progress bar and accumulated lifetime in real time.',
      },
      {
        title: 'Harvest in greenhouse',
        detail: 'When mature, the tree moves to the greenhouse. Plant another species and repeat the cycle.',
      },
      {
        title: 'Unlock the Mystic',
        detail: 'Complete all eight species at least once to unlock the exclusive ninth tree.',
      },
    ],
    studyTools: [
      {
        title: 'Stopwatch',
        detail:
          'Free study time counting with no duration limit. Ideal for long sessions or when you do not want fixed intervals.',
      },
      {
        title: 'Pomodoro',
        detail:
          'Configurable study, short break and long break cycles. The timer shows the current session (e.g. 1 of 4), section state and play, pause and restart controls.',
      },
    ],
    architecture: [
      'Study and Grow is a React 19 SPA with Vite and React Router. Separate routes cover home, tree, greenhouse, stopwatch, Pomodoro setup and active timer. Global state — garden, locale, Pomodoro session and preferences — lives in context providers; dedicated hooks encapsulate stopwatch, countdown and Pomodoro cycle logic.',
      'Each species has ten pixel-art SVG illustrations (one per stage), served from assets organized by species. pt/en translations live in i18n modules; unlocks, stage calculation and time formatting in pure utilities. Everything persists via localStorage. Static Vite build and Vercel deployment.',
    ],
    projectStructure: `src/
├── assets/tree/     # SVGs per species and stage
├── components/      # reusable UI
├── context/         # garden, locale, pomodoro
├── data/            # species catalog
├── hooks/           # stopwatch, pomodoro
├── i18n/            # pt/en translations
├── pages/           # app routes
└── utils/           # stages, unlocks`,
    techStack: [
      { name: 'React 19', detail: 'components and context API' },
      { name: 'TypeScript', detail: 'typing throughout' },
      { name: 'Vite', detail: 'dev server and build' },
      { name: 'React Router', detail: 'page navigation' },
      { name: 'Custom CSS', detail: 'no UI framework' },
      { name: 'Montserrat Alternates', detail: 'main typography' },
    ],
    flow: {
      browser: 'Browser / User',
      spa: 'React 19 SPA',
      spaSub: 'Vite + React Router',
      context: 'Context providers',
      contextSub: 'garden · locale · pomodoro',
      hooks: 'Hooks',
      hooksSub: 'stopwatch · countdown · pomodoro',
      persistence: 'Persistence',
      persistenceSub: 'localStorage',
      i18n: 'i18n',
      i18nSub: 'pt / en',
      deploy: 'Deploy',
      deploySub: 'Vercel',
    },
  },
} as const

export const projectDetailsContent = {
  pt: {
    snake: snake.pt,
    sentinela: sentinela.pt,
    pokeGuess: pokeGuess.pt,
    calcula: calcula.pt,
    studyAndGrow: studyAndGrow.pt,
  },
  en: {
    snake: snake.en,
    sentinela: sentinela.en,
    pokeGuess: pokeGuess.en,
    calcula: calcula.en,
    studyAndGrow: studyAndGrow.en,
  },
} as const

export type ProjectDetailsKey = keyof typeof projectDetailsContent.pt
export type ProjectDetailsContentMap = typeof projectDetailsContent.pt

const PROJECT_ID_TO_KEY: Record<string, ProjectDetailsKey> = {
  '1': 'snake',
  '2': 'sentinela',
  '3': 'pokeGuess',
  '4': 'calcula',
  '5': 'studyAndGrow',
}

export function getProjectDetailsKey(projectId: string): ProjectDetailsKey | undefined {
  return PROJECT_ID_TO_KEY[projectId]
}

export function getProjectDetailsContent<K extends ProjectDetailsKey>(
  locale: Locale,
  projectId: string,
  expectedKey: K,
): ProjectDetailsContentMap[K] | undefined {
  const key = getProjectDetailsKey(projectId)
  if (key !== expectedKey) return undefined
  return projectDetailsContent[locale][expectedKey] as ProjectDetailsContentMap[K]
}
