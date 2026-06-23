import type { ReactNode } from 'react'
import Portifolio from './pages/Portifolio'
import './App.css'

export type AppProps = {
  renderPage?: () => ReactNode
}

export default function App({ renderPage }: AppProps) {
  return (
    <div className="app">
      <div className="app__page-screen">
        {renderPage ? renderPage() : <Portifolio />}
      </div>
    </div>
  )
}
