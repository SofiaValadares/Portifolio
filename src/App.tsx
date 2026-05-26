import type { ReactNode } from 'react'
import Portifolio from './pages/Portifolio'
import DesktopDock from './pages/DesktopHome/DesktopDock'
import { togglePortfolioMaximized } from './store'
import { useAppDispatch } from './store/hooks'
import type { BrowserWindowControls } from './components/conteiner'
import './App.css'

export type AppProps = {
  isMaximized?: boolean
  onWindowClose: () => void
  renderPage?: (windowControls: BrowserWindowControls) => ReactNode
}

export default function App({
  isMaximized = false,
  onWindowClose,
  renderPage,
}: AppProps) {
  const dispatch = useAppDispatch()
  const windowControls = {
    onClose: onWindowClose,
    onMaximize: () => dispatch(togglePortfolioMaximized()),
    isMaximized,
  }

  return (
    <div className="app">
      <div className="app__page-screen">
        {renderPage ? (
          renderPage(windowControls)
        ) : (
          <Portifolio
            isMaximized={isMaximized}
            windowControls={windowControls}
          />
        )}
      </div>
      {!isMaximized && <DesktopDock />}
    </div>
  )
}
