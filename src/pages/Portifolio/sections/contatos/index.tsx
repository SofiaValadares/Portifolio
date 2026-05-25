import { Download, Mail } from 'lucide-react'
import { LinkButton } from '../../../../components/button'
import { SectionConteiner } from '../../../../components/conteiner'
import { IconGithub, IconLinkedin } from '../../../../components/icons/socialIcons'
import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { getYearsOfExperience } from '../../../../utils'
import PhotoCard from './components/PhotoCard'
import './contatos.css'

const CAREER_START = new Date(2024, 8, 19) // 19/09/2024

export default function Contatos({ anchorId, title }: SectionContentProps) {
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
    const link = document.createElement('a')
    link.href = '/curriculo.pdf'
    link.download = 'Sofia-Valadares-Cavalcanti-Curriculo.pdf'
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
          <p className="contatos__intro">
            Com {yearsOfExperience} {yearsOfExperience === 1 ? 'ano' : 'anos'} de experiência em
            desenvolvimento Full Stack, estou à disposição para novos desafios. Entre em contato
            para conhecer uma profissional dedicada e criativa.
          </p>

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
              label="currículo"
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
