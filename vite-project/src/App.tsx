import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Cadastro from './Components/Cadastro/Cadastro'
import Home from './Components/Home/Home'
import Vendas from './Components/Vendas/Vendas'
import Produto from './Components/Produto/Produto'

/*adicionar Route
<Route path='/Login' element={<Login />} />

<Route path='/Produto' element={<Produto />} />
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/Vendas' element={<Vendas />} />
        <Route path='/Produto' element={<Produto />} />
      </Routes>
  </Router>
  )
}

export default App
