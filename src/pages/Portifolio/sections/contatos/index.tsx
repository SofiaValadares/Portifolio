import { Download, Mail } from 'lucide-react'
import { LinkButton } from '../../../../components/button'
import { SectionConteiner } from '../../../../components/conteiner'
import { TecnologicLabelList } from '../../../../components/label'
import { IconGithub, IconLinkedin } from '../../../../components/icons/socialIcons'
import { contactTechnologiesList } from '../../../../mocks/portifolio/contactTechnologies'
import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { useTranslation } from '../../../../i18n/useTranslation'
import { getYearsOfExperience } from '../../../../utils'
import PhotoCard from './components/PhotoCard'
import './contatos.css'

const CAREER_START = new Date(2024, 8, 19) // 19/09/2024

const RESUME_BY_LOCALE = {
  pt: {
    href: '/curriculo/Curriculo-PTBR.pdf',
    download: 'Sofia-Valadares-Cavalcanti-Curriculo.pdf',
  },
  en: {
    href: '/curriculo/Curriculo-EN.pdf',
    download: 'Sofia-Valadares-Cavalcanti-Resume.pdf',
  },
} as const

export default function Contatos({ anchorId, title }: SectionContentProps) {
  const { t, locale } = useTranslation()
  const yearsOfExperience = getYearsOfExperience(CAREER_START)

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/sofia-v-cavalcanti/', '_blank', 'noopener,noreferrer')
  }

  const openGithub = () => {
    window.open('https://github.com/SofiaValadares', '_blank', 'noopener,noreferrer')
  }

  const openEmail = () => {
    window.location.href = 'mailto:sofiav.cav@gmail.com'
  }

  const downloadCurriculo = () => {
    const resume = RESUME_BY_LOCALE[locale]
    const link = document.createElement('a')
    link.href = resume.href
    link.download = resume.download
    link.rel = 'noopener'
    link.click()
  }

  return (
    <SectionConteiner
      sectionId={anchorId}
      blockClass="page-portfolio-format"
      className="contatos page-portfolio-format--no-gap"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <div className="contatos__content">
        <div className="contatos__left">
          <div className="contatos__intro-group">
            <p className="contatos__intro">
              {yearsOfExperience === 1
                ? t('contacts.introOneYear')
                : t('contacts.intro', { years: yearsOfExperience })}
            </p>

            <TecnologicLabelList
              technologies={contactTechnologiesList}
              ariaLabel={t('contacts.technologiesWorked')}
              className="contatos__tech-list"
            />
          </div>

          <div className="contatos__actions">
            <LinkButton
              label="/in/sofia-v-cavalcanti/"
              icon={<IconLinkedin />}
              onClick={openLinkedin}
            />
            <LinkButton
              label="/SofiaValadares"
              icon={<IconGithub />}
              onClick={openGithub}
            />
            <LinkButton
              label="sofiav.cav@gmail.com"
              icon={<Mail strokeWidth={2} />}
              onClick={openEmail}
            />
            <LinkButton
              label={t('contacts.resume')}
              icon={<Download strokeWidth={2} />}
              onClick={downloadCurriculo}
            />
          </div>
        </div>

        <div className="contatos__right">
          <PhotoCard />
        </div>
      </div>
    </SectionConteiner>
  )
}
