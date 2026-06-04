export const translations = {
  pt: {
    chrome: {
      portfolio: 'Portfólio',
      menu: 'Menu',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      portfolioSections: 'Seções do portfólio',
      browserWindow: 'Janela do navegador',
      portfolioTabs: 'Abas do portfólio',
      maximize: 'Maximizar janela',
      restore: 'Restaurar janela',
      fullscreen: 'Tela cheia',
      powerOff: 'Desligar — voltar à tela inicial',
      powerOffShort: 'Desligar',
      switchToEnglish: 'Mudar idioma para inglês',
      switchToPortuguese: 'Mudar idioma para português',
      languagePt: 'PT',
      languageEn: 'EN',
      language: 'Idioma',
    },
    desktop: {
      workspace: 'Área de trabalho',
      portfolioApp: 'Portfólio',
      dock: 'Dock do sistema',
    },
    sections: {
      expertises: 'Expertises',
      projects: 'Projetos',
      experience: 'Experiência',
      contacts: 'Contatos',
    },
    expertises: {
      introLead: 'Desenvolvimento Web',
      introAgile: 'Contextos Ágeis',
      introMiddle: 'com soluções de ponta a ponta:',
      introStack: 'Front-end e Back-end',
      cards: {
        frontend: {
          title: 'FrontEnd',
          description:
            'Desenvolvimento de interfaces modernas, componentes reutilizáveis, gestão de estado e integração eficiente com APIs, priorizando UX fluida.',
        },
        backend: {
          title: 'BackEnd',
          description:
            'Construção de sistemas escaláveis e APIs REST com Java/Spring Boot, modelagem de dados em PostgreSQL e foco em performance e segurança.',
        },
        agile: {
          title: 'Metodologias Ágeis',
          description:
            'Atuação em squads ágeis com Scrum, participação em decisões técnicas, code reviews e desenvolvimento de MVPs inovadores.',
        },
      },
    },
    projects: {
      intro: 'Introdução',
      gallery: 'Galeria de projetos',
      headline: ['INOVAÇÃO COM', 'IMPACTO REAL NA', 'VIDA DAS PESSOAS'],
      viewDetails: 'Ver detalhes do projeto {{name}}',
      githubRepo: 'Repositório GitHub de {{name}}',
      viewProject: 'Ver projeto {{name}}',
      technologies: 'Tecnologias',
    },
    experience: {
      current: 'atual',
      expand: 'Expandir experiência',
      collapse: 'Recolher experiência',
      month: 'mês',
      months: 'meses',
      year: 'ano',
      years: 'anos',
      items: {
        cesar: {
          position: 'Estagiária de desenvolvimento',
          description:
            'Na CESAR, transformo desafios do setor bancário em MVPs de alto impacto dentro de squads ágeis. Atuo full stack com Angular, React, Spring Boot, Kotlin, Java, TypeScript e JavaScript, entregando soluções seguras e escaláveis em plataformas financeiras. Com Docker e Git no dia a dia, integro fluxos críticos e me destaco pela adaptação rápida a novas esteiras — sempre com foco em valor contínuo e excelência técnica.',
        },
        cnpq: {
          position: 'Bolsista de Iniciação Científica',
          description:
            'No Projeto Bertoleza (UFPE), mergulhei em reconhecimento de voz e ajudei a impulsionar soluções inovadoras em pesquisa aplicada. Levei ciência ao time com relatórios técnicos e apresentações que conectaram resultados complexos a decisões claras para equipe e stakeholders.',
        },
      },
    },
    contacts: {
      intro:
        'Com {{years}} de experiência em desenvolvimento Full Stack, tenho experiência em projetos do setor financeiro, em marketplaces e em diversas outras áreas, atuando em FrontEnd e BackEnd.',
      introOneYear:
        'Com 1 ano de experiência em desenvolvimento Full Stack, tenho experiência em projetos do setor financeiro, em marketplaces e em diversas outras áreas, atuando em FrontEnd e BackEnd.',
      technologiesWorked: 'Tecnologias com que já trabalhei',
      resume: 'currículo',
    },
    details: {
      ariaLabel: 'Detalhes do projeto {{name}}',
      projectNotFound: 'Projeto não encontrado',
      projectFallback:
        'Estrutura inicial da página de detalhes do projeto. Adicione descrição, imagens e links no mock de projetos para preencher este conteúdo.',
      back: 'Projeto',
      backAria: 'Voltar para a página anterior',
      projectLinks: 'Links do projeto',
      projectPage: 'Página do Projeto',
    },
    projectDescriptions: {
      '1': 'Snake Arcade é um jogo clássico da cobra feito com React 19, TypeScript e React Router, com identidade visual retro/arcade. No menu, o jogador escolhe cor primária e secundária da cobra (presets ou cor personalizada) e vê uma pré-visualização em tempo real. Na partida, a cobra cresce ao comer maçãs, há colisão com paredes e com o próprio corpo, pontuação em tempo real e recorde persistente no navegador. Os controlos funcionam por teclado (setas ou WASD) e por botões no ecrã; o layout adapta-se a desktop e mobile, com tabuleiro e painel de comandos lado a lado. O projeto inclui design system em CSS, testes automatizados com Jest e deploy na Vercel.',
      '2': 'SENTINELA é um sistema de monitoramento e análise ambiental focado na Caatinga, desenvolvido pelo grupo Canidé (CESAR School). A API em FastAPI expõe endpoints para avaliar risco de incêndios e focos de queimadas a partir de latitude, longitude e dias sem chuva, além de análise de imagens enviadas pelo cliente. O projeto transforma dados ambientais brutos em informações úteis para pesquisa e preservação do bioma, com viés educativo para quem está aprendendo a trabalhar com APIs e dados reais. Inclui documentação, coleção Postman e deploy na nuvem (Render).',
      '3': 'PokeGuessTeam é um jogo local de dedução de times Pokémon feito com HTML, CSS e JavaScript puro (ES Modules), sem bibliotecas externas. O jogador cadastra um treinador, monta um time de seis Pokémon (busca, filtro por geração, time aleatório e drag-and-drop) e disputa palpites contra outro jogador ou contra IA. O painel mostra pistas por slot (tipos, cor, geração, altura e peso), placar em tempo real, bloqueio de palpites repetidos e persistência de perfil, XP e partidas em localStorage. Interface inspirada em Pokédex, com deploy estático na Vercel.',
      '4': 'Calcula é uma calculadora web com interface limpa e responsiva, pensada para uso rápido no dia a dia. Suporta operações básicas com feedback visual imediato e layout adaptado a desktop e mobile. Projeto publicado na Vercel com código aberto no GitHub.',
      '5': 'Study and Grow é uma aplicação web de estudo com foco em hábito e motivação: cada sessão de estudo faz a árvore do usuário crescer. Oferece cronômetro e técnica Pomodoro, suporte a português e inglês, e interface responsiva pensada para uso diário. Desenvolvido com React, TypeScript, HTML e CSS, com deploy em produção.',
    },
    projectCopyrights: {
      '2': 'Desenvolvido pelo grupo Canidé (CESAR School): Maria Luiza Calife, Danilo Albuquerque, Guilherme Silveira, Sofia Valadares, João Vítor Fittipaldi, Gabriel Caetano, Arthur Suzuki e Marina Frias.',
    },
  },
  en: {
    chrome: {
      portfolio: 'Portfolio',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      portfolioSections: 'Portfolio sections',
      browserWindow: 'Browser window',
      portfolioTabs: 'Portfolio tabs',
      maximize: 'Maximize window',
      restore: 'Restore window',
      fullscreen: 'Full screen',
      powerOff: 'Shut down — return to home screen',
      powerOffShort: 'Shut down',
      switchToEnglish: 'Switch language to English',
      switchToPortuguese: 'Switch language to Portuguese',
      languagePt: 'PT',
      languageEn: 'EN',
      language: 'Language',
    },
    desktop: {
      workspace: 'Desktop',
      portfolioApp: 'Portfolio',
      dock: 'System dock',
    },
    sections: {
      expertises: 'Expertise',
      projects: 'Projects',
      experience: 'Experience',
      contacts: 'Contact',
    },
    expertises: {
      introLead: 'Web development',
      introAgile: 'agile contexts',
      introMiddle: 'with end-to-end solutions:',
      introStack: 'front-end and back-end',
      cards: {
        frontend: {
          title: 'Front-end',
          description:
            'Building modern interfaces, reusable components, state management and efficient API integration with a focus on smooth UX.',
        },
        backend: {
          title: 'Back-end',
          description:
            'Building scalable systems and REST APIs with Java/Spring Boot, PostgreSQL data modeling and a focus on performance and security.',
        },
        agile: {
          title: 'Agile methods',
          description:
            'Working in agile squads with Scrum, taking part in technical decisions, code reviews and innovative MVP development.',
        },
      },
    },
    projects: {
      intro: 'Introduction',
      gallery: 'Project gallery',
      headline: ['INNOVATION WITH', 'REAL IMPACT ON', "PEOPLE'S LIVES"],
      viewDetails: 'View details for project {{name}}',
      githubRepo: 'GitHub repository for {{name}}',
      viewProject: 'View project {{name}}',
      technologies: 'Technologies',
    },
    experience: {
      current: 'current',
      expand: 'Expand experience',
      collapse: 'Collapse experience',
      month: 'month',
      months: 'months',
      year: 'year',
      years: 'years',
      items: {
        cesar: {
          position: 'Development intern',
          description:
            'At CESAR, I turn banking-sector challenges into high-impact MVPs within agile squads. I work full stack with Angular, React, Spring Boot, Kotlin, Java, TypeScript and JavaScript, delivering secure and scalable solutions for financial platforms. Using Docker and Git daily, I integrate critical flows and stand out for quickly adapting to new pipelines — always focused on continuous value and technical excellence.',
        },
        cnpq: {
          position: 'Scientific initiation fellow',
          description:
            'In the Bertoleza Project (UFPE), I worked on speech recognition and helped drive innovative applied-research solutions. I brought science to the team through technical reports and presentations that connected complex results to clear decisions for the team and stakeholders.',
        },
      },
    },
    contacts: {
      intro:
        'With {{years}} years of experience in Full Stack development, I have worked on financial-sector projects, marketplaces and many other areas on both front-end and back-end.',
      introOneYear:
        'With 1 year of experience in Full Stack development, I have worked on financial-sector projects, marketplaces and many other areas on both front-end and back-end.',
      technologiesWorked: 'Technologies I have worked with',
      resume: 'resume',
    },
    details: {
      ariaLabel: 'Project details for {{name}}',
      projectNotFound: 'Project not found',
      projectFallback:
        'Initial project details page structure. Add description, images and links in the projects mock to fill this content.',
      back: 'Project',
      backAria: 'Go back to the previous page',
      projectLinks: 'Project links',
      projectPage: 'Project page',
    },
    projectDescriptions: {
      '1': 'Snake Arcade is a classic snake game built with React 19, TypeScript and React Router, with a retro/arcade visual identity. In the menu, the player chooses primary and secondary snake colors (presets or custom) and sees a live preview. During the game, the snake grows by eating apples, with wall and self collision, real-time scoring and a browser-persistent high score. Controls work via keyboard (arrows or WASD) and on-screen buttons; the layout adapts to desktop and mobile with board and controls side by side. The project includes a CSS design system, automated tests with Jest and Vercel deployment.',
      '2': 'SENTINELA is an environmental monitoring and analysis system focused on the Caatinga biome, developed by the Canidé group (CESAR School). The FastAPI API exposes endpoints to assess fire risk and burn hotspots from latitude, longitude and days without rain, plus client-submitted image analysis. The project turns raw environmental data into useful information for research and biome preservation, with an educational focus for those learning to work with APIs and real data. Includes documentation, a Postman collection and cloud deployment (Render).',
      '3': 'PokeGuessTeam is a local Pokémon team deduction game built with plain HTML, CSS and JavaScript (ES Modules), with no external libraries. The player registers a trainer, builds a team of six Pokémon (search, generation filter, random team and drag-and-drop) and plays guesses against another player or AI. The panel shows clues per slot (types, color, generation, height and weight), a live scoreboard, repeated-guess blocking and profile, XP and match persistence in localStorage. Pokédex-inspired interface with static Vercel deployment.',
      '4': 'Calcula is a web calculator with a clean, responsive interface designed for quick everyday use. It supports basic operations with immediate visual feedback and a layout adapted to desktop and mobile. Published on Vercel with open source code on GitHub.',
      '5': 'Study and Grow is a study web app focused on habit and motivation: each study session makes the user’s tree grow. It offers a stopwatch and Pomodoro technique, Portuguese and English support, and a responsive interface designed for daily use. Built with React, TypeScript, HTML and CSS, with production deployment.',
    },
    projectCopyrights: {
      '2': 'Developed by the Canidé group (CESAR School): Maria Luiza Calife, Danilo Albuquerque, Guilherme Silveira, Sofia Valadares, João Vítor Fittipaldi, Gabriel Caetano, Arthur Suzuki and Marina Frias.',
    },
  },
} as const

export type Locale = keyof typeof translations

type TranslationTree = Record<string, unknown>

export type TranslationParams = Record<string, string | number>

function resolvePath(tree: TranslationTree, path: string): string | undefined {
  const value = path.split('.').reduce<unknown>((node, key) => {
    if (node && typeof node === 'object' && key in node) {
      return (node as Record<string, unknown>)[key]
    }
    return undefined
  }, tree)

  return typeof value === 'string' ? value : undefined
}

export function translate(
  locale: Locale,
  key: string,
  params?: TranslationParams,
): string {
  const text = resolvePath(translations[locale], key) ?? resolvePath(translations.pt, key) ?? key

  if (!params) return text

  return Object.entries(params).reduce(
    (result, [paramKey, paramValue]) =>
      result.replaceAll(`{{${paramKey}}}`, String(paramValue)),
    text,
  )
}

export function getProjectDescription(locale: Locale, projectId: string, fallback: string) {
  const descriptions = translations[locale].projectDescriptions as Record<string, string>
  return descriptions[projectId] ?? fallback
}

export function getProjectCopyright(locale: Locale, projectId: string, fallback?: string) {
  if (!fallback) return undefined
  const copyrights = translations[locale].projectCopyrights as Record<string, string>
  return copyrights[projectId] ?? fallback
}

export function getHeadlineLines(locale: Locale) {
  return translations[locale].projects.headline
}
