import './pixelDecor.css'

type PixelDecorProps = {
  orientation?: 'column' | 'row'
  count?: number
  className?: string
}

export default function PixelDecor({
  orientation = 'column',
  count = 11,
  className = '',
}: PixelDecorProps) {
  return (
    <div
      className={[
        'pixel-decor',
        orientation === 'row' ? 'pixel-decor--row' : 'pixel-decor--column',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={[
            'pixel-decor__cell',
            index % 2 === 0 ? 'pixel-decor__cell--cyan' : 'pixel-decor__cell--pink',
          ].join(' ')}
        />
      ))}
    </div>
  )

}
