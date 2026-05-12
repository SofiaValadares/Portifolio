import './splashscreem.css'

const DEFAULT_NAME = 'Sofia Valadares Cavalcanti'
const DEFAULT_JOB = 'Desenvolvedora Full Stack'

export type SplashScreenProps = {
  photo?: string
  name?: string
  job?: string
}

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  const first = parts[0][0]
  const last = parts[parts.length - 1][0]
  return (first + last).toUpperCase()
}

export default function SplashScreen({
  photo = '',
  name = DEFAULT_NAME,
  job = DEFAULT_JOB,
}: SplashScreenProps) {
  const showPhoto = Boolean(photo?.trim())
  const initials = initialsFromName(name)

  return (
    <main className="splash-screen" aria-labelledby="splash-name">
      <div className="splash-screen__inner">
        <div className="splash-screen__avatar-wrap">
          {showPhoto ? (
            <img
              className="splash-screen__avatar"
              src={photo}
              alt=""
              width={300}
              height={300}
            />
          ) : (
            <div className="splash-screen__avatar splash-screen__avatar--placeholder" aria-hidden>
              {initials}
            </div>
          )}
        </div>
        <div className="splash-screen__text">
          <h1 className="splash-screen__name ds-title" id="splash-name">
            {name}
          </h1>
          <p className="splash-screen__job ds-subtitle">{job}</p>
        </div>
      </div>
    </main>
  )
}
