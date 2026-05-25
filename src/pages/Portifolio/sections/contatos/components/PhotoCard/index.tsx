import './photoCard.css'

interface PhotoCardProps {
    imageSrc?: string,
    imageAlt?: string,
    className?: string,
}

const PhotoCard: React.FC<PhotoCardProps> = (
    {
        imageSrc = '/photo/full.png',
        imageAlt = 'Sofia Valadares Cavalcanti',
        className,
    }) => {
    return (
        <div className={['photo-card', className].filter(Boolean).join(' ')}>
            <p className="photo-card__name-tag" aria-label={imageAlt}>
                <span className="photo-card__name-tag-line">
                    {'<Sof'}
                    <span className="photo-card__name-tag-accent">/</span>a&gt;
                </span>
                <span className="photo-card__name-tag-line">Valadares</span>
                <span className="photo-card__name-tag-line">Cavalcanti</span>
            </p>

            <div className="photo-card__photo-wrap">
                <img
                    className="photo-card__photo"
                    src={imageSrc}
                    alt={imageAlt}
                    width={452}
                    height={1034}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
    )
}

export default PhotoCard
