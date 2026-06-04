import type { SectionContentProps } from '../../../../models/SectionsPortifolioModel'
import { SectionConteiner } from '../../../../components/conteiner'
import { useExpertisesCardsData } from '../../../../mocks/portifolio/expertisesCards'
import { useTranslation } from '../../../../i18n/useTranslation'
import ExpertisesCard from './components/ExpertisesCard'
import './expertises.css'

export default function Expertises({ anchorId, title }: SectionContentProps) {
  const { locale, t } = useTranslation()
  const expertisesCardsData = useExpertisesCardsData(locale)

  return (
    <SectionConteiner
      sectionId={anchorId}
      blockClass="page-portfolio-format"
      className="expertises page-portfolio-format--tall"
      title={<h2 id={`${anchorId}-heading`}>{title}</h2>}
    >
      <div className="expertises__content">
        <p className="ds-big-text expertises__intro">
          <span>{t('expertises.introLead')}</span>
          {locale === 'pt' ? ' em ' : ' in '}
          <span>{t('expertises.introAgile')}</span> {t('expertises.introMiddle')}{' '}
          <span>{t('expertises.introStack')}</span>.
        </p>

        <div className="expertises__cards">
          {expertisesCardsData.map((card) => (
            <ExpertisesCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              languegesList={card.languegesList}
            />
          ))}
        </div>
      </div>
    </SectionConteiner>
  )
}
