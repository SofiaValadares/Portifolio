import type { SectionsPortifolioModel } from '../../../models/SectionsPortifolioModel'
import './Header.css'

interface HeaderProps {
  logoText: string
  links: SectionsPortifolioModel[]
}

export default function Header({ logoText, links: _links }: HeaderProps) {
  return (
    <div className="header__container">
      <p className="header__logo">{logoText}</p>
    </div>
  )
}
