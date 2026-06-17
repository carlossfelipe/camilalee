import camila from '../../../assets/Logo/Camila_sobre_mim.png'


function HomePresentation() {
  return (
    <section className="py-5 section-dark snap-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-center pe-md-5">
            <h2 className="gold-text1 fw-bold mb-4 ls-2 reveal-effect">
              TRANSFORMAR IDEIA EM PRESENÇA.
            </h2>
            <img
              src={camila}
              alt="Camila"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7 ps-md-5">
            <p className="lead-text lh-lg fw-light text-justify mt-4 mt-md-0 reveal-effect">
              Maquiadora e hair artist com atuação em TV, cinema e atendimento
              social, desenvolve beleza e caracterização com olhar técnico e
              sensibilidade estética. Especialista em efeitos especiais (SFX),
              cria transformações realistas, próteses e construções que ampliam
              narrativas e dão corpo a personagens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePresentation
