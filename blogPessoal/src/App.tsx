import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
    </>
  )
}

export default App;
