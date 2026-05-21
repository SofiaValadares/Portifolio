import { useCallback, useEffect, useState } from 'react'
import { useNavigateWithTransition } from '../hooks/useNavigateWithTransition'
import SplashScreen from '../pages/SplashScreem'
import { useWheelNavigate } from '../hooks/useWheelNavigate'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { completeFirstVisit, selectIsFirstVisit } from '../store'
import './shellLayout.css'
import '../App.css'

export default function SplashRoute() {
  const isFirstVisit = useAppSelector(selectIsFirstVisit)
  const dispatch = useAppDispatch()
  const navigate = useNavigateWithTransition()
  const [splashRoot, setSplashRoot] = useState<HTMLDivElement | null>(null)
  const [splashEntered, setSplashEntered] = useState(false)
  const [splashExiting, setSplashExiting] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSplashEntered(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  const goToHome = useCallback(() => {
    if (splashExiting) return
    setSplashExiting(true)

    const finish = () => {
      if (isFirstVisit) {
        dispatch(completeFirstVisit())
      }
      navigate('/portfolio', { replace: true })
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.setTimeout(finish, prefersReducedMotion ? 0 : 520)
  }, [dispatch, isFirstVisit, navigate, splashExiting])

  useWheelNavigate(splashRoot, 'down', goToHome, {
    enabled: splashRoot != null,
  })

  return (
    <div className="app-shell">
      <div
        ref={setSplashRoot}
        className={[
          'splash-layer',
          splashEntered ? 'splash-layer--open' : '',
          splashExiting ? 'splash-layer--exit' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="app app--splash-only">
          <SplashScreen photo="/photo/cropped.png" />
        </div>
      </div>
    </div>
  )
}
