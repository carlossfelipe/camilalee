import nv1 from "../../../assets/Noivas/IMG_7067.JPG";
import nv2 from "../../../assets/Noivas/IMG_7068.JPG";
import nv3 from "../../../assets/Noivas/IMG_7072.JPG";
import nv4 from "../../../assets/Noivas/IMG_7069.JPG";
import nv5 from "../../../assets/Noivas/IMG_20190724_112440_Original.jpg";
import nv6 from "../../../assets/Noivas/IMG_20190724_112458_Original.jpg";
import nv7 from "../../../assets/Noivas/Alineamp_Gabriel-141_Original.jpg";
import nv8 from "../../../assets/Noivas/E252FD5F-70E0-4053-9CC9-0B0B8EBA4539.jpg";
import nv9 from "../../../assets/Noivas/noiva_para_esquerda.jpg";
import nv10 from "../../../assets/Noivas/NoivaBrinco.jpg";
import nv11 from "../../../assets/Noivas/IMG-20200928-WA0019_Original.JPG";
import nv12 from "../../../assets/Noivas/933AC357-F389-41D6-B12A-744ABD87E799.jpg";
import nv13 from "../../../assets/Noivas/IMG_20200905_092044_Original.jpg";
import nv14 from "../../../assets/Noivas/IMG-20210115-WA0031_Original.jpg";
import nv15 from "../../../assets/Noivas/1FFCB997-C942-496E-AB65-37CB50674B37.jpg";
import nv16 from "../../../assets/Noivas/Aline_amp_Gabriel-156_Original.jpg";
import VoltarParaCima from "../../../components/VoltarParaCima";

function NoivasSection() {
  const titulo = "Galeria de Noivas".toUpperCase();

  return (
    <section className="py-5 section-dark snap-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="gold-text2 mb-5">{titulo}</h1>

            <p className="lead-text lh-lg fw-light mt-4 mt-md-0 me-md-4 mb-5">
              Beleza que atravessa o tempo. O foco aqui é o equilíbrio entre a
              sua identidade e a técnica de alta durabilidade, para que você se
              sinta segura e radiante da primeira foto ao fim da festa.
            </p>

            <img src={nv1} alt="" className="img-fluid" />
          </div>

          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img src={nv2} alt="" className="img-fluid mb-4 w-75" />
            <img src={nv3} alt="" className="img-fluid w-100" />
          </div>

          <div className="col-12 mt-4">
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <img
                src={nv4}
                alt=""
                className="img-fluid"
                style={{ maxWidth: "100%", width: "50%", height: "auto" }}
              />
              <img
                src={nv5}
                alt=""
                className="img-fluid"
                style={{ maxWidth: "100%", width: "20%", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="row g-2">
            <div className="col-12 col-md-6 d-flex flex-column">
              <img
                src={nv6}
                alt=""
                className="img-fluid mb-2 align-self-start"
              />

              <img src={nv7} alt="" className="img-fluid " />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column ">
              <img src={nv8} alt="" className="img-fluid mb-2 " />

              <img src={nv9} alt="" className="img-fluid align-self-start" />
            </div>

            <div className="col-12 d-flex  gap-2 my-2">
              <img
                src={nv10}
                alt=""
                className="img-fluid"
                style={{ width: "40%" }}
              />

              <img
                src={nv11}
                alt=""
                className="img-fluid"
                style={{ width: "50%" }}
              />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column">
              <img src={nv12} alt="" className="img-fluid mb-2 " />

              <img src={nv13} alt="" className="img-fluid " />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column">
              <img
                src={nv14}
                alt=""
                className="img-fluid mb-2 align-self-end"
              />

              <img src={nv15} alt="" className="img-fluid align-self-start" />
            </div>

            <div className="col-12 d-flex justify-content-center mt-2">
              <img
                src={nv16}
                alt=""
                className="img-fluid"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-end">
          <VoltarParaCima />
        </div>
      </div>
    </section>
  );
}

export default NoivasSection;
