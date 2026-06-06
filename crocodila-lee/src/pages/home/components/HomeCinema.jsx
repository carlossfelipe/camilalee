import { Link } from 'react-router-dom';
import cinema1 from '../../../assets/Cinema/ae328d6e-a15c-40b8-b739-45bc088aaf03.jpg'
import cinema2 from "../../../assets/Cinema/6391746c-a7ba-44b0-ad3f-963a7bc41741.jpg"


function HomeCinema() {
  return (
    <section className="cinema py-5 bg-black-custom">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <img
              src={cinema1}
              className="img-fluid"
              alt="Cinema"
            />
          </div>
          <div className="col-md-6">
            <img
              src={cinema2}
              className="img-fluid"
              alt="Produção"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="gold-text1">
            Caracterização e efeitos para produções cinematográficas
          </span>
          <Link to="/audiovisual" className="btn btn-link-gold mb-3">
            Ver mais trabalhos →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCinema;
