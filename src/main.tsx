import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './ds/collors.css'
import './ds/typography.css'
import './ds/motion.css'
import './index.css'
import Root from './Root.tsx'
import { store } from './store'

const storedLocale = window.localStorage.getItem('portfolio-locale')
document.documentElement.lang = storedLocale === 'en' ? 'en' : 'pt-BR'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
)
