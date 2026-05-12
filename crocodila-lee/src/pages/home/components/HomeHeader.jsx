import logo from "../../../assets/Logo/Mask_group-removebg-preview.png"

function HomeHeader({banner}) {

  return (
    <header className="hero-section d-flex align-items-center justify-content-center text-center" style={{background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${banner})`, backgroundAttachment: 'fixed'}}>
      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo mb-3" />
        <h1 className="display-4 fw-bold gold-text1">CAMILA LEE</h1>
        <p className="subtitle gold-text2">
          MAQUIAGEM • CABELO • CARACTERIZAÇÃO
        </p>
        <a href="#" className="btn btn-gold mt-3">
          Conheça nosso portifólio
        </a>
      </div>
    </header>
  );
}

export default HomeHeader;
