import { useMemo } from "react";

import foto1 from "../../../assets/Noivas/IMG_7068.JPG";
import foto2 from "../../../assets/Noivas/Aline_amp_Gabriel-156_Original.jpg";
import foto3 from "../../../assets/Noivas/NoivaBrinco.jpg";
import foto4 from "../../../assets/Noivas/Alineamp_Gabriel-141_Original.jpg";
import foto5 from "../../../assets/Noivas/noiva_para_esquerda.jpg";

function HomeNoivas() {
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
    <section className="noivas py-5 bg-black-custom">
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
            Beleza atemporal para o dia mais inesquecível
          </span>
          <a href="#" className="btn btn-link-gold mb-3">
            Ver mais fotos →
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeNoivas;
