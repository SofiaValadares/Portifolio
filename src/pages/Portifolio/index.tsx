import './portifolio.css'
import Header from './components/Header'

export default function Portifolio() {
  return (
    <main className="portifolio-screem" aria-labelledby="portifolio-heading">
      <div className="portifolio-screem__container">
        <Header logoText="<S/>" links={[]} />
        <div className="portifolio-screem__content">
          <h2 className="portifolio-screem__title" id="portifolio-heading">
            Portfólio
          </h2>
          <p className="portifolio-screem__hint">Conteúdo em construção.</p>
        </div>
      </div>
    </main>
  )
}
