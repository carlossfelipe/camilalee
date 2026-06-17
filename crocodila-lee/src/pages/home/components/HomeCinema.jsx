import { Link } from 'react-router-dom';
import { useMemo } from "react";
import foto1 from '../../../assets/Cinema/ae328d6e-a15c-40b8-b739-45bc088aaf03.jpg'
import foto2 from "../../../assets/Cinema/6391746c-a7ba-44b0-ad3f-963a7bc41741.jpg"
import foto3 from "../../../assets/Cinema/09667bb7-12e8-4780-8acf-44099d826948.jpg"
import foto4 from "../../../assets/Cinema/0d206f2f-617d-4923-af54-323620b55e5b.jpg"
import foto5 from "../../../assets/Cinema/29273eee-0f06-441a-924e-4ac179ae24e1.jpg"


function HomeCinema() {

  const photos = [foto1, foto2, foto3, foto4, foto5];
  
    const fullList = useMemo(() => {
      const shuffled = [...photos];
  
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
  
      return [...shuffled, ...shuffled];
    }, []);

  return (
    <section className="cinema py-5 bg-black-custom">
      <div className="container">
        <div className="carousel-section">
          <div className="carousel-wrapper">
            <div className="carousel-track" id="track">
              {fullList.map((src, index) => (
                <img key={index} src={src} alt={`Noiva ${index + 1}`} />
              ))}
            </div>
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
