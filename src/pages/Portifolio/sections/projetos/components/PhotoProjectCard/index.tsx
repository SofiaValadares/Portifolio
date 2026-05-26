import './photoProjectCard.css'

interface PhotoProjectCardProps {
  imageUrl: string
  link: string
  ariaLabel?: string
}

export default function PhotoProjectCard({
  imageUrl,
  link,
  ariaLabel = 'Pré-visualização do projeto',
}: PhotoProjectCardProps) {
  return (
    <div className="photo-project-card">
      <a className="photo-project-card__image" href={link} aria-label={ariaLabel}>
        <img
          className="photo-project-card__image-content"
          src={imageUrl}
          alt={ariaLabel}
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  )
}