import { useEffect, useRef } from 'react'

const WHEEL_DELTA_THRESHOLD = 28
/** Alinhado à duração da animação da splash (~650ms). */
const NAVIGATION_COOLDOWN_MS = 750

type WheelDirection = 'down' | 'up'

/**
 * Dispara `onNavigate` quando o usuário “empurra” o scroll além do limite
 * (para baixo na splash ou para cima com scroll já no topo).
 */
export function useWheelNavigate(
  target: HTMLElement | null,
  direction: WheelDirection,
  onNavigate: () => void,
  options?: {
    enabled?: boolean
    isAtScrollTop?: () => boolean
  },
) {
  const cooldownRef = useRef(false)
  const onNavigateRef = useRef(onNavigate)
  const isAtScrollTopRef = useRef(options?.isAtScrollTop)
  const enabled = options?.enabled ?? true

  onNavigateRef.current = onNavigate
  isAtScrollTopRef.current = options?.isAtScrollTop

  useEffect(() => {
    if (!enabled || target == null) return

    const onWheel = (event: WheelEvent) => {
      if (cooldownRef.current) return

      const wantsDown =
        direction === 'down' && event.deltaY > WHEEL_DELTA_THRESHOLD
      const wantsUp =
        direction === 'up' &&
        event.deltaY < -WHEEL_DELTA_THRESHOLD &&
        (isAtScrollTopRef.current?.() ?? true)

      if (!wantsDown && !wantsUp) return

      event.preventDefault()
      cooldownRef.current = true
      onNavigateRef.current()
      window.setTimeout(() => {
        cooldownRef.current = false
      }, NAVIGATION_COOLDOWN_MS)
    }

    target.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      target.removeEventListener('wheel', onWheel)
    }
  }, [direction, enabled, target])
}
