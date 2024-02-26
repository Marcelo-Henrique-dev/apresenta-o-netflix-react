import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Alunos } from "./pages/alunos";
import { Streamings } from "./pages/streamings";
import { Graficos } from "./pages/graficos";
import { Streamings2 } from "./pages/streamings2";
import { Valores } from "./pages/valores";
import { Funcionalidades } from "./pages/funcionalidades";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="home" element={<Home />} />
        <Route path="streaming" element={<Streamings />} />
        <Route path="graficos" element={<Graficos />} />
        <Route path="streamings" element={<Streamings2 />} />
        <Route path="valores" element={<Valores />} />
        <Route path="funcionalidades" element={<Funcionalidades />} />
      </Routes>
    </Router>
  )
}
