import { useId } from 'react'

type SocialIconProps = { className?: string }

const iconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
}

export function IconLinkedin({ className }: SocialIconProps) {
  return (
    <svg {...iconAttrs} className={className}>
      <path d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z" />
      <path d="M12 18H4V42H12V18Z" />
      <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" />
    </svg>
  )
}

export function IconGithub({ className }: SocialIconProps) {
  const clipId = useId()

  return (
    <svg {...iconAttrs} className={className}>
      <g clipPath={`url(#${clipId})`}>
        <path d="M18 38.0001C8 41.0001 8 33.0001 4 32.0001M32 44.0001V36.2601C32.075 35.3064 31.9462 34.3477 31.622 33.4477C31.2979 32.5477 30.7859 31.727 30.12 31.0401C36.4 30.3401 43 27.9601 43 17.0401C42.9995 14.2478 41.9254 11.5625 40 9.54012C40.9117 7.09713 40.8472 4.39682 39.82 2.00012C39.82 2.00012 37.46 1.30012 32 4.96012C27.416 3.71776 22.584 3.71776 18 4.96012C12.54 1.30012 10.18 2.00012 10.18 2.00012C9.15275 4.39682 9.08829 7.09713 10 9.54012C8.06025 11.5775 6.98505 14.287 7 17.1001C7 27.9401 13.6 30.3201 19.88 31.1001C19.222 31.7801 18.7145 32.5909 18.3906 33.48C18.0667 34.369 17.9336 35.3163 18 36.2601V44.0001" />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
