import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  NavConteiner,
  PageConteiner,
} from '../../components/conteiner'
import type { BrowserWindowControls } from '../../components/conteiner'
import { sectionsPortifolioList } from '../../mocks/portifolio/sectionsPortifolioList'

export type PortifolioProps = {
  isMaximized?: boolean
  windowControls: BrowserWindowControls
}

function resolveAnchorFromHash(): string | null {
  const id = window.location.hash.slice(1)
  if (!id) return null
  return sectionsPortifolioList.some((s) => s.anchorId === id) ? id : null
}

export default function Portifolio({
  isMaximized = false,
  windowControls,
}: PortifolioProps) {
  const [scrollRoot, setScrollRoot] = useState<HTMLDivElement | null>(null)

  const defaultAnchor = useMemo(
    () => sectionsPortifolioList[0]?.anchorId ?? '',
    [],
  )

  const [activeAnchorId, setActiveAnchorId] = useState(() => {
    if (typeof window === 'undefined') return defaultAnchor
    return resolveAnchorFromHash() ?? defaultAnchor
  })

  const syncActiveFromScroll = useCallback(() => {
    if (!scrollRoot) return
    const rootRect = scrollRoot.getBoundingClientRect()
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
  }, [defaultAnchor, scrollRoot])

  useEffect(() => {
    if (!scrollRoot) return

    syncActiveFromScroll()
    scrollRoot.addEventListener('scroll', syncActiveFromScroll, { passive: true })

    const onHash = () => {
      const id = resolveAnchorFromHash()
      if (id) setActiveAnchorId(id)
    }
    window.addEventListener('hashchange', onHash)

    const ro = new ResizeObserver(() => syncActiveFromScroll())
    ro.observe(scrollRoot)

    return () => {
      scrollRoot.removeEventListener('scroll', syncActiveFromScroll)
      window.removeEventListener('hashchange', onHash)
      ro.disconnect()
    }
  }, [scrollRoot, syncActiveFromScroll])

  return (
    <PageConteiner
      isFullscreen={isMaximized}
      onScrollViewportRef={setScrollRoot}
      ariaLabel="Portfólio"
      nav={
        <NavConteiner
          sections={sectionsPortifolioList}
          activeAnchorId={activeAnchorId}
          windowControls={windowControls}
        />
      }
    >
      {sectionsPortifolioList.map(({ anchorId, title, content: Section }) => (
        <Section key={anchorId} anchorId={anchorId} title={title} />
      ))}
    </PageConteiner>
  )
}
