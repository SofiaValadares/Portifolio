import { BrowserRouter } from 'react-router-dom'
import AppRouter from './shell/AppRouter'
import './App.css'

export default function Root() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
