import type { LanguegeModel } from '../models/LanguegeModel'
import { langLogo } from '../mocks/shared/langLogo'

const technologyLogoByName: Record<string, string> = {
  Angular: 'angular.png',
  Docker: 'docker.png',
  Git: 'git.png',
  Java: 'java.png',
  JavaScript: 'javascript.png',
  Kotlin: 'kotlin.png',
  Python: 'pyhton.png',
  React: 'react.png',
  'Spring Boot': 'springboot.png',
  TypeScript: 'typescript.png',
}

export function resolveProjectTechnology(technology: string): LanguegeModel {
  return {
    name: technology,
    icon: langLogo(technologyLogoByName[technology] ?? 'javascript.png'),
  }
}

export function resolveProjectTechnologies(technologies: string[]): LanguegeModel[] {
  return technologies.map(resolveProjectTechnology)
}
