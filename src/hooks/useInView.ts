import { useEffect, useRef, useState } from 'react'
import { usePortfolioScrollRoot } from '../context/PortfolioScrollContext'

type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const scrollRoot = usePortfolioScrollRoot()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      {
        root: scrollRoot,
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [scrollRoot, threshold, rootMargin, once])

  return { ref, inView }
}
