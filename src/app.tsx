import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Alunos } from "./pages/alunos";
import { Streamings } from "./pages/streamings";
import { Graficos } from "./pages/graficos";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="home" element={<Home />} />
        <Route path="streaming" element={<Streamings />} />
        <Route path="graficos" element={<Graficos />} />
      </Routes>
    </Router>
  )
}
