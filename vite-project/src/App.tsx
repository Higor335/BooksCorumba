import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FrameSI from './Components/FrameSI/FrameSI'
import Login from './Components/Login/Login'
import Cadastro from './Components/Cadastro/Cadastro'

/*adicionar Route
<Route path='/Login' element={<Login />} />
<Route path='/Vendas' element={<Vendas />} />
<Route path='/Produto' element={<Produto />} />
*/
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Cadastro' element={<Cadastro />} />
    </Routes>
  </Router>
  )
}

export default App
