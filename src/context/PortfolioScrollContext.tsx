import { createContext, useContext, type ReactNode } from 'react'

const PortfolioScrollContext = createContext<HTMLDivElement | null>(null)

export function PortfolioScrollProvider({
  scrollRoot,
  children,
}: {
  scrollRoot: HTMLDivElement | null
  children: ReactNode
}) {
  return (
    <PortfolioScrollContext.Provider value={scrollRoot}>
      {children}
    </PortfolioScrollContext.Provider>
  )
}

export function usePortfolioScrollRoot() {
  return useContext(PortfolioScrollContext)
}
