import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DesktopRoute from './DesktopRoute'
import PortfolioRoute from './PortfolioRoute'
import RootRedirect from './RootRedirect'
import SplashRoute from './SplashRoute'
import './routeTransitions.css'

function routeStageVariant(pathname: string): string {
  if (pathname === '/splash') return 'splash'
  if (pathname === '/portfolio') return 'portfolio'
  return 'desktop'
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
        <Route path="/home" element={<DesktopRoute />} />
        <Route path="/portfolio" element={<PortfolioRoute />} />
        <Route path="*" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </div>
  )
}
