import { ChevronDown } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import type { ExperienceAccordionProps } from '../../models/ExperienceAccordionModel'
import './experiencieAccordion.css'

function formatExperienceDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

/** Meses corridos entre início e fim (mês final conta se o dia do fim >= dia do início). */
function monthsBetween(start: Date, end: Date): number {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  if (end.getDate() >= start.getDate()) {
    months += 1
  }
  return Math.max(months, 1)
}

function experienceDurationLabel(start: Date, end?: Date): string {
  const endDate = end ?? new Date()
  const totalMonths = monthsBetween(start, endDate)

  if (totalMonths < 12) {
    return totalMonths === 1 ? '1 mês' : `${totalMonths} meses`
  }

  const years = Math.floor(totalMonths / 12)
  return years === 1 ? '1 ano' : `${years} anos`
}

export function ExperiencieAcordion({
  local,
  position,
  dateStart,
  dateEnd,
  description,
  logo,
  skills,
  isOpenDefault = false,
}: ExperienceAccordionProps) {
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

  return (
    <article className="experiencie-accordion">
      <button
        type="button"
        className="experiencie-accordion__header"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
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
        <ChevronDown
          className={[
            'experiencie-accordion__toggle-icon',
            isOpen ? 'experiencie-accordion__toggle-icon--open' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden
          strokeWidth={2}
        />
      </button>

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

              {skills.length > 0 ? (
                <ul className="experiencie-accordion__skills" aria-label="Tecnologias">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        className="experiencie-accordion__skill-icon"
                        data-tooltip={skill.name}
                        tabIndex={0}
                        aria-label={skill.name}
                      >
                        {skill.icon}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}
