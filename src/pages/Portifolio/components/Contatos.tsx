import { Download, Mail } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../../../components/icons/socialIcons'
import type { SectionContentProps } from '../../../models/SectionsPortifolioModel'
import { SectionConteiner } from '../../../components/conteiner'
import './Contatos.css'
import ContactButton from "../../../components/ContactButton";

const CAREER_START = new Date(2024, 8, 19) // 19/09/2024

function getYearsOfExperience(since: Date): number {
  const now = new Date()
  let years = now.getFullYear() - since.getFullYear()
  const anniversaryPassed =
    now.getMonth() > since.getMonth() ||
    (now.getMonth() === since.getMonth() && now.getDate() >= since.getDate())
  if (!anniversaryPassed) years -= 1
  return Math.max(years, 0)
}

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
            <ContactButton
              label="/in/sofia-v-cavalcanti/"
              icon={<IconLinkedin />}
              onClick={openLinkedin}
            />
            <ContactButton
              label="/SofiaValadares"
              icon={<IconGithub />}
              onClick={openGithub}
            />
            <ContactButton
              label="sofiav.cav@gmail.com"
              icon={<Mail strokeWidth={2} />}
              onClick={openEmail}
            />
            <ContactButton
              label="currículo"
              icon={<Download strokeWidth={2} />}
              onClick={downloadCurriculo}
            />
          </div>
        </div>

        <div className="contatos__right">
          <div className="contatos__visual">
            <p className="contatos__name-tag" aria-label="Sofia Valadares Cavalcanti">
              <span className="contatos__name-tag-line">
                {'<Sof'}
                <span className="contatos__name-tag-accent">/</span>a&gt;
              </span>
              <span className="contatos__name-tag-line">Valadares</span>
              <span className="contatos__name-tag-line">Cavalcanti</span>
            </p>

            <div className="contatos__photo-wrap">
              <img
                className="contatos__photo"
                src="/photo/full.png"
                alt="Sofia Valadares Cavalcanti"
                width={452}
                height={1034}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionConteiner>
  )
}
