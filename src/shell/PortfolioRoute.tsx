import { useCallback } from 'react'
import { useNavigateWithTransition } from '../hooks/useNavigateWithTransition'
import App from '../App'
import {
  resetPortfolioWindow,
  selectIsPortfolioMaximized,
} from '../store'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import './shellLayout.css'
import '../App.css'

export default function PortfolioRoute() {
  const navigate = useNavigateWithTransition()
  const dispatch = useAppDispatch()
  const isMaximized = useAppSelector(selectIsPortfolioMaximized)

  const goToSplash = useCallback(() => {
    dispatch(resetPortfolioWindow())
    navigate('/', { replace: true, state: { showSplash: true } })
  }, [dispatch, navigate])

  return (
    <div className="app-shell">
      <div className="app-shell__portfolio">
        <App
          isMaximized={isMaximized}
          onWindowClose={goToSplash}
        />
      </div>
    </div>
  )
}
