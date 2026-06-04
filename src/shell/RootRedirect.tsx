import { Navigate, useLocation } from 'react-router-dom'
import { selectIsFirstVisit } from '../store'
import { useAppSelector } from '../store/hooks'
import SplashRoute from './SplashRoute'

type SplashLocationState = {
  showSplash?: boolean
}

/** `/` → splash na primeira visita ou ao voltar da área de trabalho; caso contrário → portfólio. */
export default function RootRedirect() {
  const isFirstVisit = useAppSelector(selectIsFirstVisit)
  const location = useLocation()
  const showSplash =
    isFirstVisit || (location.state as SplashLocationState | null)?.showSplash === true

  if (!showSplash) {
    return <Navigate to="/portfolio" replace />
  }

  return <SplashRoute />
}
