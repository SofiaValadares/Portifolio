import type { ProjectDetailsComponentProps } from '../../../models/ProjectModel'
import { useTranslation } from '../../../i18n/useTranslation'
import { DEFAULT_PROJECT_IMAGE } from '../projects'

export default function DefaultProjectDetails({ project }: ProjectDetailsComponentProps) {
  const { t } = useTranslation()

  return (
    <img
      className="details-project__details-image"
      src={project.imagePrimary ?? DEFAULT_PROJECT_IMAGE}
      alt={t('details.ariaLabel', { name: project.name })}
      loading="eager"
      decoding="async"
    />
  )
}
