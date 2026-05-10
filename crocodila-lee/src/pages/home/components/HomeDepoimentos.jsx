const depoimentos = [
  {
    text: "Texto texto texto texto texto texto texto texto.",
    name: "Maria Souza",
    job: "Fotógrafa",
  },

  {
    text: "Texto texto texto texto texto texto texto texto.",
    name: "Maria Souza",
    job: "Fotógrafa",
  },
  {
    text: "Texto texto texto texto texto texto texto texto.",
    name: "Maria Souza",
    job: "Fotógrafa",
  },
];

function HomeDepoimentos() {
  return (
    <section className="py-5 bg-dark-custom text-center">
      <div className="container">
        <h5 className="gold-text2 mb-2">Depoimentos</h5>
        <h3 className="mb-5 text-white gold-text1">O QUE DIZEM OS CLIENTES</h3>

        <div className="row">
          <div className="d-flex justify-content-center gap-4">

            {depoimentos.map((item, index) => (
              <div className="testimonial-box" key={index}>
                <span className="quote gold-text2">“</span>
                <p className="text-white">{item.text}</p>
                <h6 className="text-white mt-3">{item.name}</h6>
                <small className="text-white">{item.job}</small>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeDepoimentos;
