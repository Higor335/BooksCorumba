import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/buscar' element={<Login />} />
        <Route path='/listar' element={<Cadastro />} />
      </Routes>
    </Router>
  )
}
// yarn add react-icons
export default App