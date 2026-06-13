import "./Navbar.css";
import banner from "../assets/Logo/Mask_group-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <img src={banner} alt="" style={{ width: "4rem" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                INÍCIO
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/noivas" className="nav-link">
                NOIVAS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/audiovisual" className="nav-link">
                AUDIOVISUAL
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/servicos" className="nav-link">
                OUTROS SERVIÇOS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/#ela-transforma" className="nav-link">
                SOBRE MIM
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
