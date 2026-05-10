import cinema1 from "../../../assets/Logo/Camila_sobre_mim.png";

function HomeTransforma() {
  return (
    <section
      id="ela-transforma"
      className="py-5"
      style={{ backgroundColor: "#0c0c0c" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 d-flex justify-content-start">
            <img
              src={cinema1}
              className="img-fluid img-perfil-ajuste"
              alt="Camila Lee"
            />
          </div>

          <div className="col-md-7 ps-md-5">
            <h2 className="display-5 fw-bold text-uppercase ls-5 mb-4 gold-text1">
              CAMILLA LEE<br/> TORRES<br/> EUFRÁSIO
            </h2>

            <div className="gold-text1 fw-light text-justify">
              <p className="lh-lg" style={{ fontSize: "1.1rem" }}>
                Sou branca, mãe de filha negra de pele clara e cabelos crespos.
                O desafio de pentear minha filha de forma a fortalecer sua
                autoestima e identidade me levaram a conhecer e aprofundar
                estudos nessas áreas. Por minha formação na área técnica da
                enfermagem, sempre considerei fundamental a saúde no tratamento
                com a pele e tudo relativo aos cabelos. Com o passar dos anos
                fui aprimorando e aperfeiçoando técnicas de maquiagem e
                tratamento capilar que me tornaram uma profissional de alta
                qualidade e requisitada por vários nichos dentro dos mercados de
                beleza e da caracterização realista. <br />
                <br />
                Tenho muito claro para mim, que é profundamente gratificante
                fazer parte significativa da felicidade e realização de sonhos
                de pessoas, de famílias, de artistas, numa profunda e
                transformadora troca humana num momento especial de uma noiva
                rumando a uma nova vida ou de um artista realizando sua arte
                dando vida a um personagem por vezes belos ou assustadores. Para
                mim a arte da maquiagem reside na realizarão do sonho do outro.
              </p>
              <hr className="gold-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTransforma;
