import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DetailsProjectRoute from './DetailsProjectRoute'
import PortfolioRoute from './PortfolioRoute'
import RootRedirect from './RootRedirect'
import SplashRoute from './SplashRoute'
import './routeTransitions.css'

function routeStageVariant(pathname: string): string {
  if (pathname === '/splash') return 'splash'
  return 'portfolio'
}

export default function AppRouter() {
  const location = useLocation()

  return (
    <div
      className="route-stage"
      data-route={location.pathname}
      data-variant={routeStageVariant(location.pathname)}
      key={location.pathname}
    >
      <Routes location={location}>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/splash" element={<SplashRoute />} />
        <Route path="/home" element={<Navigate to="/portfolio" replace />} />
        <Route path="/portfolio" element={<PortfolioRoute />} />
        <Route path="/portfolio/projeto/:projectId" element={<DetailsProjectRoute />} />
        <Route path="/portifolio/projeto/:projectId" element={<DetailsProjectRoute />} />
        <Route path="/portifolio/detalhes-projeto/:projectId" element={<DetailsProjectRoute />} />
        <Route path="*" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </div>
  )
}
