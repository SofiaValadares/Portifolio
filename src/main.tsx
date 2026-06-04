import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './ds/collors.css'
import './ds/typography.css'
import './index.css'
import Root from './Root.tsx'
import { store } from './store'

const storedLocale = window.localStorage.getItem('portfolio-locale')
document.documentElement.lang = storedLocale === 'en' ? 'en' : 'pt-BR'

function ensureFavicon() {
  const pngHref = '/favicon-32x32.png?v=2'
  const icoHref = '/favicon.ico?v=2'

  document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]').forEach((link) => {
    if (link.href.includes('favicon.ico') || link.getAttribute('sizes') === 'any') {
      link.href = icoHref
      link.removeAttribute('type')
      return
    }

    link.type = 'image/png'
    link.href = pngHref
  })

  if (!document.querySelector('link[rel="icon"]')) {
    const pngLink = document.createElement('link')
    pngLink.rel = 'icon'
    pngLink.type = 'image/png'
    pngLink.sizes = '32x32'
    pngLink.href = pngHref
    document.head.prepend(pngLink)

    const icoLink = document.createElement('link')
    icoLink.rel = 'icon'
    icoLink.sizes = 'any'
    icoLink.href = icoHref
    document.head.prepend(icoLink)
  }
}

ensureFavicon()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
)
