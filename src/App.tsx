import './App.css'
import SplashScreen from './pages/SplashScreem'
import Portifolio from './pages/Portifolio'

export default function App() {
  return (
    <div className="app">
      <div className="app__reveal-scroll">
        <div className="app__splash-panel">
          <SplashScreen photo="/photo/cropped.png" />
        </div>
        <div className="app__portfolio-panel">
          <Portifolio />
        </div>
      </div>
    </div>
  )
}
