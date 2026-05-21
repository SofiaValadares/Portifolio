import { useRef, useState } from 'react'
import Portifolio from './pages/Portifolio'
import { useWheelNavigate } from './hooks/useWheelNavigate'
import { togglePortfolioMaximized } from './store'
import { useAppDispatch } from './store/hooks'
import './App.css'

export type AppProps = {
  isMaximized?: boolean
  onOverscrollTop?: () => void
  onWindowClose: () => void
  onWindowMinimize: () => void
}

export default function App({
  isMaximized = false,
  onOverscrollTop,
  onWindowClose,
  onWindowMinimize,
}: AppProps) {
  const dispatch = useAppDispatch()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scrollRoot, setScrollRoot] = useState<HTMLDivElement | null>(null)

  const handleViewportRef = (element: HTMLDivElement | null) => {
    viewportRef.current = element
    setScrollRoot(element)
  }

  useWheelNavigate(scrollRoot, 'up', () => onOverscrollTop?.(), {
    enabled: scrollRoot != null && onOverscrollTop != null,
    isAtScrollTop: () => (viewportRef.current?.scrollTop ?? 0) <= 0,
  })

  return (
    <div className="app">
      <div className="app__page-screen">
        <Portifolio
          isMaximized={isMaximized}
          scrollRoot={scrollRoot}
          onScrollViewportRef={handleViewportRef}
          windowControls={{
            onClose: onWindowClose,
            onMinimize: onWindowMinimize,
            onMaximize: () => dispatch(togglePortfolioMaximized()),
            isMaximized,
          }}
        />
      </div>
    </div>
  )
}
