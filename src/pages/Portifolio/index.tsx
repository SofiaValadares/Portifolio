import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { sectionsPortifolioList } from '../../models/sectionsPortifolioList'
import './portifolio.css'
import Header from './components/Header'

function resolveAnchorFromHash(): string | null {
  const id = window.location.hash.slice(1)
  if (!id) return null
  return sectionsPortifolioList.some((s) => s.anchorId === id) ? id : null
}

export default function Portifolio() {
  const contentRef = useRef<HTMLDivElement>(null)
  const defaultAnchor = useMemo(
    () => sectionsPortifolioList[0]?.anchorId ?? '',
    [],
  )

  const [activeAnchorId, setActiveAnchorId] = useState(() => {
    if (typeof window === 'undefined') return defaultAnchor
    return resolveAnchorFromHash() ?? defaultAnchor
  })

  const syncActiveFromScroll = useCallback(() => {
    const root = contentRef.current
    if (!root) return
    const rootRect = root.getBoundingClientRect()
    const focusY = rootRect.top + rootRect.height * 0.22
    let best = defaultAnchor
    let bestScore = -1

    for (const { anchorId } of sectionsPortifolioList) {
      const el = document.getElementById(anchorId)
      if (!el) continue
      const r = el.getBoundingClientRect()
      if (r.bottom <= rootRect.top + 4 || r.top >= rootRect.bottom - 4) {
        continue
      }
      const visibleTop = Math.max(r.top, rootRect.top)
      const visibleBottom = Math.min(r.bottom, rootRect.bottom)
      const visibleH = Math.max(0, visibleBottom - visibleTop)
      const band =
        r.top <= focusY && r.bottom >= focusY ? 500 : 0
      const score = visibleH + band
      if (score > bestScore) {
        bestScore = score
        best = anchorId
      }
    }
    setActiveAnchorId((prev) => (prev === best ? prev : best))
  }, [defaultAnchor])

  useEffect(() => {
    const root = contentRef.current
    if (!root) return

    syncActiveFromScroll()
    root.addEventListener('scroll', syncActiveFromScroll, { passive: true })

    const onHash = () => {
      const id = resolveAnchorFromHash()
      if (id) setActiveAnchorId(id)
    }
    window.addEventListener('hashchange', onHash)

    const ro = new ResizeObserver(() => syncActiveFromScroll())
    ro.observe(root)

    return () => {
      root.removeEventListener('scroll', syncActiveFromScroll)
      window.removeEventListener('hashchange', onHash)
      ro.disconnect()
    }
  }, [syncActiveFromScroll])

  return (
    <main className="portifolio-screem" aria-label="Portfólio">
      <div className="portifolio-screem__container">
        <Header
          logoText="<S/>"
          links={sectionsPortifolioList}
          activeAnchorId={activeAnchorId}
        />
        <div ref={contentRef} className="portifolio-screem__content">
          {sectionsPortifolioList.map(({ anchorId, title, content: Section }) => (
            <Section key={anchorId} anchorId={anchorId} title={title} />
          ))}
        </div>
      </div>
    </main>
  )
}
