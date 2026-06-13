import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Noivas from "./pages/noivas/Noivas";
import Cinema from "./pages/cinema/Cinema";
import Servico from "./pages/servicos/Servico"
import Contato from "./pages/contato/Contato";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noivas" element={<Noivas />} />
        <Route path="/audiovisual" element={<Cinema />} />
        <Route path="/servicos" element={<Servico/>} />
        <Route path="/sobre" element={<h1>sobre</h1>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  );
}
