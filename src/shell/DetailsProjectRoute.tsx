import App from '../App'
import DetailsProject from '../pages/DetailsProject'
import './shellLayout.css'
import '../App.css'

export default function DetailsProjectRoute() {
  return (
    <div className="app-shell">
      <div className="app-shell__portfolio">
        <App renderPage={() => <DetailsProject />} />
      </div>
    </div>
  )
}
