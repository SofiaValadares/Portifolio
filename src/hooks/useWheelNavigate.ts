import { useEffect, useRef } from 'react'

const WHEEL_DELTA_THRESHOLD = 28
const SWIPE_THRESHOLD_PX = 48
/** Alinhado à duração da animação da splash (~650ms). */
const NAVIGATION_COOLDOWN_MS = 750

type WheelDirection = 'down' | 'up'

function isTouchInsideTarget(target: HTMLElement, touch: Touch): boolean {
  const element = document.elementFromPoint(touch.clientX, touch.clientY)
  return element != null && target.contains(element)
}

/**
 * Dispara `onNavigate` no limite do scroll: wheel (desktop) ou swipe vertical (mobile).
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
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const enabled = options?.enabled ?? true

  onNavigateRef.current = onNavigate
  isAtScrollTopRef.current = options?.isAtScrollTop

  useEffect(() => {
    if (!enabled || target == null) return

    const triggerNavigate = () => {
      if (cooldownRef.current) return
      cooldownRef.current = true
      onNavigateRef.current()
      window.setTimeout(() => {
        cooldownRef.current = false
      }, NAVIGATION_COOLDOWN_MS)
    }

    const matchesDirection = (deltaY: number) => {
      if (direction === 'down' && deltaY > 0) return true
      if (
        direction === 'up' &&
        deltaY < 0 &&
        (isAtScrollTopRef.current?.() ?? true)
      ) {
        return true
      }
      return false
    }

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
      triggerNavigate()
    }

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStartRef.current = null
        return
      }

      const touch = event.touches[0]
      if (!isTouchInsideTarget(target, touch)) {
        touchStartRef.current = null
        return
      }

      touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current
      touchStartRef.current = null
      if (start == null || event.changedTouches.length !== 1) return

      const touch = event.changedTouches[0]
      if (!isTouchInsideTarget(target, touch)) return

      const deltaX = touch.clientX - start.x
      const deltaY = start.y - touch.clientY

      if (Math.abs(deltaX) > Math.abs(deltaY)) return
      if (Math.abs(deltaY) < SWIPE_THRESHOLD_PX) return
      if (!matchesDirection(deltaY)) return

      triggerNavigate()
    }

    const onTouchCancel = () => {
      touchStartRef.current = null
    }

    target.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchcancel', onTouchCancel, { passive: true })

    return () => {
      target.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [direction, enabled, target])
}
