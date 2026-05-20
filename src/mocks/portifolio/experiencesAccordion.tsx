import type { ExperienceAccordionData } from '../../models/ExperienceAccordionModel'
import { langLogo } from '../shared/langLogo'

export const experiencesAccordionData: ExperienceAccordionData[] = [
  {
    local: 'CESAR',
    position: 'Estagiária de desenvolvimento',
    dateStart: new Date(2024, 8, 16),
    description:
      'Na CESAR, transformo desafios do setor bancário em MVPs de alto impacto dentro de squads ágeis. Atuo full stack com Angular, React, Spring Boot, Kotlin, Java, TypeScript e JavaScript, entregando soluções seguras e escaláveis em plataformas financeiras. Com Docker e Git no dia a dia, integro fluxos críticos e me destaco pela adaptação rápida a novas esteiras — sempre com foco em valor contínuo e excelência técnica.',
    logo: '/companesLogos/cesar.png',
    skills: [
      { name: 'Angular', icon: langLogo('angular.png') },
      { name: 'React', icon: langLogo('react.png') },
      { name: 'TypeScript', icon: langLogo('typescript.png') },
      { name: 'JavaScript', icon: langLogo('javascript.png') },
      { name: 'Java', icon: langLogo('java.png') },
      { name: 'Kotlin', icon: langLogo('kotlin.png') },
      { name: 'Spring Boot', icon: langLogo('springboot.png') },
      { name: 'Docker', icon: langLogo('docker.png') },
      { name: 'Git', icon: langLogo('git.png') },
    ],
    isOpenDefault: true,
  },
  {
    local: 'CNPq',
    position: 'Bolsista de Iniciação Científica',
    dateStart: new Date(2023, 0, 1),
    dateEnd: new Date(2023, 6, 31),
    description:
      'No Projeto Bertoleza (UFPE), mergulhei em reconhecimento de voz e ajudei a impulsionar soluções inovadoras em pesquisa aplicada. Levei ciência ao time com relatórios técnicos e apresentações que conectaram resultados complexos a decisões claras para equipe e stakeholders.',
    logo: '/companesLogos/cnpq.png',
    skills: [{ name: 'Python', icon: langLogo('pyhton.png') }],
    isOpenDefault: false,
  },
]
