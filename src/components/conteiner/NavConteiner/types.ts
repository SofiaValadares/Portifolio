export type BrowserWindowControls = {
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  isMaximized?: boolean
}
