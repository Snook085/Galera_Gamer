
import { Route, RouterProvider } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/cabecalho'
import Inicio from './components/Inicio'
import './style.css'
import Router from './Route'

function App() {

  return <RouterProvider router={Router}/>
}

export default App
