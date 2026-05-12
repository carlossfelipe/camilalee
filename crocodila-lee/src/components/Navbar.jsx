import "./Navbar.css";
import banner from "../assets/Logo/Mask_group-removebg-preview.png";

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
              <a className="nav-link" href="#">
                INÍCIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                NOIVAS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AUDIOVISUAL
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                OUTROS SERVIÇOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SOBRE MIM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
