import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import Noivas from './pages/noivas/Noivas'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../style.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Noivas />
  </StrictMode>,
);
