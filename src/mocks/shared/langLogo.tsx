import type { ReactNode } from 'react'

/** Ícone de tecnologia a partir de `public/languegesLogos/`. */
export function langLogo(file: string): ReactNode {
  return (
    <img
      src={`/languegesLogos/${file}`}
      alt=""
      loading="lazy"
      decoding="async"
    />
  )
}
