import { Navigate } from 'react-router-dom'
import { selectIsFirstVisit } from '../store'
import { useAppSelector } from '../store/hooks'

/** `/` → splash na primeira visita da sessão; caso contrário → portfólio. */
export default function RootRedirect() {
  const isFirstVisit = useAppSelector(selectIsFirstVisit)
  return <Navigate to={isFirstVisit ? '/splash' : '/portfolio'} replace />
}
