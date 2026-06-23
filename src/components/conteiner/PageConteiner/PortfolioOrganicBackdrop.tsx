import './portfolioOrganicBackdrop.css'

type OrganicPath = {
  id: string
  d: string
}

const path = (...segments: string[]) => segments.join(' ')

/**
 * 13 formas fechadas nas bordas — curvas (C), preenchidas com degradê azul.
 */
const ORGANIC_PATHS: OrganicPath[] = [
  {
    id: 'a',
    d: path(
      'M -140 60',
      'C 20 -100, 200 -20, 340 80',
      'C 480 180, 520 340, 420 480',
      'C 320 620, 120 680, -40 580',
      'C -200 480, -280 300, -220 160',
      'C -160 20, -180 80, -140 60 Z',
    ),
  },
  {
    id: 'b',
    d: path(
      'M 900 40',
      'C 760 120, 820 300, 960 400',
      'C 1100 500, 1140 680, 1040 860',
      'C 940 1040, 760 1100, 660 960',
      'C 560 820, 680 620, 840 520',
      'C 1000 420, 1020 200, 900 40 Z',
    ),
  },
  {
    id: 'h',
    d: path(
      'M -80 280',
      'C 40 180, 180 220, 240 360',
      'C 300 500, 180 620, 20 580',
      'C -140 540, -200 400, -80 280 Z',
    ),
  },
  {
    id: 'c',
    d: path(
      'M -220 1140',
      'C -40 1000, 200 1040, 320 1200',
      'C 440 1360, 380 1580, 180 1680',
      'C -20 1780, -200 1660, -280 1480',
      'C -360 1300, -340 1140, -220 1140 Z',
    ),
  },
  {
    id: 'i',
    d: path(
      'M 1060 920',
      'C 940 820, 1080 700, 1180 820',
      'C 1280 940, 1200 1120, 1060 1160',
      'C 920 1200, 880 1040, 1060 920 Z',
    ),
  },
  {
    id: 'd',
    d: path(
      'M 1120 1520',
      'C 980 1380, 760 1460, 680 1620',
      'C 600 1780, 680 1980, 860 2080',
      'C 1040 2180, 1200 2100, 1240 1920',
      'C 1200 1720, 1160 1580, 1120 1520 Z',
    ),
  },
  {
    id: 'j',
    d: path(
      'M -160 1960',
      'C 0 1860, 120 1980, 80 2140',
      'C 40 2300, -120 2360, -240 2240',
      'C -360 2120, -300 1980, -160 1960 Z',
    ),
  },
  {
    id: 'e',
    d: path(
      'M 1040 2280',
      'C 920 2160, 1100 2040, 1220 2180',
      'C 1340 2320, 1280 2520, 1120 2580',
      'C 960 2640, 880 2480, 920 2320',
      'C 960 2160, 980 2220, 1040 2280 Z',
    ),
  },
  {
    id: 'k',
    d: path(
      'M 1140 2780',
      'C 1020 2660, 1180 2540, 1280 2680',
      'C 1380 2820, 1300 3000, 1140 3040',
      'C 980 3080, 920 2920, 1000 2780',
      'C 1080 2640, 1100 2720, 1140 2780 Z',
    ),
  },
  {
    id: 'f',
    d: path(
      'M -100 3260',
      'C 100 3100, 380 3120, 540 3280',
      'C 700 3440, 660 3680, 440 3800',
      'C 220 3920, -20 3840, -100 3660',
      'C -140 3520, -120 3380, -100 3260 Z',
    ),
  },
  {
    id: 'l',
    d: path(
      'M 1080 3600',
      'C 960 3480, 1120 3360, 1260 3480',
      'C 1400 3600, 1340 3780, 1180 3840',
      'C 1020 3900, 940 3740, 1000 3600',
      'C 1060 3460, 1080 3540, 1080 3600 Z',
    ),
  },
  {
    id: 'g',
    d: path(
      'M 720 3660',
      'C 940 3520, 1180 3580, 1280 3800',
      'C 1380 4020, 1220 4240, 940 4280',
      'C 660 4320, 480 4120, 520 3880',
      'C 560 3640, 620 3620, 720 3660 Z',
    ),
  },
  {
    id: 'm',
    d: path(
      'M -120 4040',
      'C 20 3920, 180 3980, 220 4140',
      'C 260 4300, 80 4380, -80 4300',
      'C -240 4220, -260 4080, -120 4040 Z',
    ),
  },
]

export default function PortfolioOrganicBackdrop() {
  return (
    <svg
      className="portfolio-organic-backdrop"
      viewBox="0 0 1000 4200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="portfolio-organic-fill"
          className="portfolio-organic-backdrop__fill-gradient"
          gradientUnits="userSpaceOnUse"
          x1="500"
          y1="0"
          x2="500"
          y2="4200"
        >
          <stop offset="0%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--start" />
          <stop offset="52%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--mid" />
          <stop offset="100%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--end" />
        </linearGradient>
        <linearGradient
          id="portfolio-organic-fill-contatos"
          className="portfolio-organic-backdrop__fill-gradient"
          gradientUnits="userSpaceOnUse"
          x1="500"
          y1="3000"
          x2="500"
          y2="4300"
        >
          <stop offset="0%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--contatos-dark" />
          <stop offset="48%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--contatos-mid" />
          <stop offset="100%" className="portfolio-organic-backdrop__fill-stop portfolio-organic-backdrop__fill-stop--contatos-light" />
        </linearGradient>
      </defs>

      {ORGANIC_PATHS.map(({ id, d }) => (
        <path
          key={id}
          className={`portfolio-organic-backdrop__path portfolio-organic-backdrop__path--${id}`}
          d={d}
        />
      ))}
    </svg>
  )
}
