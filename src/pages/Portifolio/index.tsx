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
import { useTranslation } from '../../i18n/useTranslation'
import { getSectionsPortifolioList } from '../../mocks/portifolio/sectionsPortifolioList'

export default function Portifolio() {
  const { locale, t } = useTranslation()
  const sectionsPortifolioList = useMemo(
    () => getSectionsPortifolioList(locale),
    [locale],
  )
  const [scrollRoot, setScrollRoot] = useState<HTMLDivElement | null>(null)

  const defaultAnchor = useMemo(
    () => sectionsPortifolioList[0]?.anchorId ?? '',
    [sectionsPortifolioList],
  )

  const resolveAnchorFromHash = useCallback(() => {
    const id = window.location.hash.slice(1)
    if (!id) return null
    return sectionsPortifolioList.some((s) => s.anchorId === id) ? id : null
  }, [sectionsPortifolioList])

  const [activeAnchorId, setActiveAnchorId] = useState(() => {
    if (typeof window === 'undefined') return defaultAnchor
    return resolveAnchorFromHash() ?? defaultAnchor
  })

  useEffect(() => {
    setActiveAnchorId((prev) => {
      if (sectionsPortifolioList.some((section) => section.anchorId === prev)) {
        return prev
      }
      return defaultAnchor
    })
  }, [defaultAnchor, sectionsPortifolioList])

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
  }, [defaultAnchor, scrollRoot, sectionsPortifolioList])

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
  }, [scrollRoot, syncActiveFromScroll, resolveAnchorFromHash])

  return (
    <PageConteiner
      onScrollViewportRef={setScrollRoot}
      ariaLabel={t('chrome.portfolio')}
      nav={
        <NavConteiner
          sections={sectionsPortifolioList}
          activeAnchorId={activeAnchorId}
        />
      }
    >
      {sectionsPortifolioList.map(({ anchorId, title, content: Section }) => (
        <Section key={anchorId} anchorId={anchorId} title={title} />
      ))}
    </PageConteiner>
  )
}
