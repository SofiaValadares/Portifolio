import Portifolio from './pages/Portifolio'
import { togglePortfolioMaximized } from './store'
import { useAppDispatch } from './store/hooks'
import './App.css'

export type AppProps = {
  isMaximized?: boolean
  onWindowClose: () => void
}

export default function App({
  isMaximized = false,
  onWindowClose,
}: AppProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="app">
      <div className="app__page-screen">
        <Portifolio
          isMaximized={isMaximized}
          windowControls={{
            onClose: onWindowClose,
            onMaximize: () => dispatch(togglePortfolioMaximized()),
            isMaximized,
          }}
        />
      </div>
    </div>
  )
}
