import { ChevronDown } from 'lucide-react'
import { useId, useMemo, useState, type FC } from 'react'
import { IconButton } from '../../../../../../components/button'
import { TecnologicLabelList } from '../../../../../../components/label'
import type { ExperienceAccordionProps } from '../../../../../../models/ExperienceAccordionModel'
import {
  experienceDurationLabel,
  formatExperienceDate,
} from '../../../../../../utils'
import './experienceAcordion.css'

const ExperienceAcordion: FC<ExperienceAccordionProps> = ({
  local,
  position,
  dateStart,
  dateEnd,
  description,
  logo,
  skills,
  isOpenDefault = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)
  const panelId = useId()
  const isCurrent = dateEnd == null

  const duration = useMemo(
    () => experienceDurationLabel(dateStart, dateEnd),
    [dateStart, dateEnd],
  )

  const dateStartLabel = useMemo(
    () => formatExperienceDate(dateStart),
    [dateStart],
  )

  const dateEndLabel = useMemo(
    () => (dateEnd ? formatExperienceDate(dateEnd) : null),
    [dateEnd],
  )

  const toggleOpen = () => setIsOpen((open) => !open)

  return (
    <article className="experiencie-accordion">
      <div className="experiencie-accordion__header">
        <button
          type="button"
          className="experiencie-accordion__header-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggleOpen}
        >
          <span className="experiencie-accordion__header-main">
            <p className="experiencie-accordion__title">
              <span className="experiencie-accordion__title-local">{local}</span>
              {', '}
              {position}
              {isCurrent ? (
                <span className="experiencie-accordion__tag-atual">atual</span>
              ) : null}
            </p>
            <p className="experiencie-accordion__meta">
              <span className="experiencie-accordion__meta-dates">
                {dateStartLabel}
                {dateEndLabel ? (
                  <>
                    {' – '}
                    {dateEndLabel}
                  </>
                ) : null}
                {', '}
              </span>
              <span className="experiencie-accordion__meta-period">
                {duration}
              </span>
            </p>
          </span>
        </button>
        <IconButton
          className={[
            'experiencie-accordion__toggle',
            isOpen ? 'experiencie-accordion__toggle--open' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          icon={
            <ChevronDown
              className="experiencie-accordion__toggle-icon"
              strokeWidth={2}
            />
          }
          ariaLabel={isOpen ? 'Recolher experiência' : 'Expandir experiência'}
          ariaPressed={isOpen}
          onClick={toggleOpen}
        />
      </div>

      {isOpen ? (
        <div id={panelId} className="experiencie-accordion__panel">
          <hr className="experiencie-accordion__divider" />

          <div className="experiencie-accordion__body">
            <div className="experiencie-accordion__logo-wrap">
              <img
                className="experiencie-accordion__logo"
                src={logo}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="experiencie-accordion__copy">
              <p className="experiencie-accordion__description">{description}</p>

              <TecnologicLabelList technologies={skills} />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default ExperienceAcordion
