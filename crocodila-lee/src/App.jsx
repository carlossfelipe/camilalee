import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Noivas from "./pages/noivas/Noivas";
import Cinema from "./pages/cinema/Cinema";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noivas" element={<Noivas />} />
        <Route path="/audiovisual" element={<Cinema />} />
        <Route path="/servicos" element={<h1>serviços</h1>} />
        <Route path="/sobre" element={<h1>sobre</h1>} />
        <Route path="/contato" element={<h1>contato</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
