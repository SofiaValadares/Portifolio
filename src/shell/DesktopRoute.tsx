import DesktopHome from '../pages/DesktopHome'
import './shellLayout.css'
import '../App.css'

export default function DesktopRoute() {
  return (
    <div className="app-shell">
      <div className="app app--desktop">
        <DesktopHome />
      </div>
    </div>
  )
}
