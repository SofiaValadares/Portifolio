import { useCallback } from 'react'
import {
  useNavigate,
  type NavigateFunction,
  type NavigateOptions,
  type To,
} from 'react-router-dom'

function runViewTransition(update: () => void) {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    document.startViewTransition(() => {
      update()
    })
    return
  }
  update()
}

/**
 * Navegação com View Transitions API (fallback: navigate normal).
 */
export function useNavigateWithTransition(): NavigateFunction {
  const navigate = useNavigate()

  return useCallback(
    (to: To | number, options?: NavigateOptions) => {
      runViewTransition(() => {
        navigate(to as To, options)
      })
    },
    [navigate],
  ) as NavigateFunction
}
