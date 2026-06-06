import nv1 from "../../../assets/Cinema/09667bb7-12e8-4780-8acf-44099d826948.jpg";
import nv2 from "../../../assets/Cinema/0d206f2f-617d-4923-af54-323620b55e5b.jpg";
import nv3 from "../../../assets/Cinema/1bbf3c97-5256-4e96-b15e-ce8fbf774a69.jpg";
import nv4 from "../../../assets/Cinema/1C904EEC-D026-4BD1-8E8E-F9614DF047D3.JPG";
import nv5 from "../../../assets/Cinema/29273eee-0f06-441a-924e-4ac179ae24e1.jpg";
import nv6 from "../../../assets/Cinema/29cec018-aa55-48d9-b5a0-87dbeb1a5085.jpg";
import nv7 from "../../../assets/Cinema/2d6cf5d9-c7f9-48b5-8b13-f16d2ef8a254.jpg";
import nv8 from "../../../assets/Cinema/50defdda-1f2f-4c48-85f2-d1e629535577.jpg";
import nv9 from "../../../assets/Cinema/56248ef8-41ed-4071-8ed2-06603f9538ea.jpg";
import nv10 from "../../../assets/Cinema/6391746c-a7ba-44b0-ad3f-963a7bc41741.jpg";
import nv11 from "../../../assets/Cinema/79b9f521-a2ec-40f3-93dc-4d937210bfb5.jpg";
import nv12 from "../../../assets/Cinema/829a512e-60ea-4f57-9524-bb0eb4cd9e93.jpg";
import nv13 from "../../../assets/Cinema/858c682c-9956-4960-b2fe-d61676562028.jpg";
import nv14 from "../../../assets/Cinema/8cc5ab95-c887-4b8d-9e48-346af398b838.jpg";
import nv15 from "../../../assets/Cinema/974fecc7-76f6-4179-9d38-dd07bf4b205f.jpg";
import nv16 from "../../../assets/Cinema/d1910cf2-ec66-4aa5-a440-8b3ef7cf509e.jpg";
import VoltarParaCima from "../../../components/VoltarParaCima";

export default function CinemaSection() {
  return (
    <section className="py-5 section-dark snap-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="gold-text2 mb-5">GALERIA DE AUDIOVISUAL</h1>

            <p className="lead-text lh-lg fw-light mt-4 mt-md-0 me-md-4 mb-5">
              Presença e impacto visual para vídeos, clipes e publicidade.
              Técnica adaptada para a velocidade do set, com foco em acabamento
              profissional e resistência sob as luzes de estúdio.
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
