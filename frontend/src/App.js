import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from './componentes/EstilosGlobais'
import Menu from './componentes/Menu'
import Admin from './paginas/Admin'
import Bemvindo from './paginas/Bemvindo'
import Medidas from './paginas/Medidas'
import Mensagens from './paginas/Mensagens'

function App(){
  return(
    <Router>
      <EstilosGlobais/>
      <Menu/>
      <Routes>
        <Route path = '/' element = {<Bemvindo/>} />
        <Route path = '/medidas' element = {<Medidas/>} />
        <Route path = '/admin' element = {<Admin/>} />
        <Route path = '/mensagens' element = {<Mensagens/>} />
      </Routes>
    </Router>
  )
}
export default App