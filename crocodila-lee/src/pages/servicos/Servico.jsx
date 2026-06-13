import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VoltarParaCima from "../../components/VoltarParaCima";
import ServicoHeader from "./components/ServicoHeader";

// Substitua pelos caminhos reais das suas imagens
import banner from "../../assets/Logo/outrosservicos_banner.jpg"
import image0 from "../../assets/Servico/10-DSC05030.jpeg";
import image1 from "../../assets/Servico/17-DSC05172.jpeg";
import image2 from "../../assets/Servico/29-DSC05138.jpeg";
import image3 from "../../assets/Servico/796c4ff7-d1ae-44e1-a1ba-299aa1f0b182.jpg";
import image4 from "../../assets/Servico/FernandaeCelso-lambuze-3.jpg";
import image5 from "../../assets/Servico/FernandaeCelso-lambuze-54.jpg";

export default function Portfolio() {
  const categories = [
    {
      title: "Fotografia",
      description:
        "Acabamento impecável para as lentes. Uma preocupação com técnicas de luz e sombra que facilitam a edição e valorizam o cenário real, resultando em imagens poderosas.",
      image: image0,
      flipped: false,
    },
    {
      title: "Cabelos",
      description:
        "Arquitetura capilar que complementa o estilo e o conceito do look. Penteados estruturados ou orgânicos, executados com precisão para garantir movimento, fixação e harmonia estética.",
      image: image1,
      flipped: true,
    },
    {
      title: "Eventos",
      description:
        "Experiência e acolhimento por meio da imagem. Atendimento dinâmico para festas temáticas e eventos corporativos, onde a maquiagem funciona como um atrativo exclusivo para o público.",
      image: image2,
      flipped: false,
    },
    {
      title: "Teatro",
      description:
        "Expressão e resistência. Caracterizações que suportam o calor do palco e a distância da plateia, garantindo que a alma do personagem chegue com clareza.",
      image: image3,
      flipped: true,
    },
    {
      title: "Cinema",
      description:
        "Construção de personagens com rigor técnico e continuidade. Da maquiagem HD aos efeitos especiais, o trabalho serve à narrativa e à visão do diretor para criar realismo em cada frame.",
      image: image4,
      flipped: false,
    },
    {
      title: "Social",
      description:
        "Sua melhor versão para o dia a dia de momentos marcantes. Um atendimento cuidadoso que prioriza o bem-estar e realça a beleza natural com elegância e sofisticação.",
      image: image5,
      flipped: true,
    },
  ];

  return (
    <>
    <Navbar/>
      <ServicoHeader banner={banner} />
      <Container fluid className="portfolio-container bg-dark text-white p-0">
        <Row className="no-gutters divider-row">
          <Col className="divider"></Col>
        </Row>

        {categories.map((category, index) => (
          <Row
            key={index}
            className={`category-row ${category.flipped ? "flex-row-reverse" : ""} align-items-center`}
          >
            <Col md={6} className="p-0">
              <Card className="bg-transparent border-0 category-card d-flex">
                <Card.Img
                  src={category.image}
                  alt={category.title}
                  className="img-fluid "
                />
              </Card>
            </Col>
            <Col md={6} className="p-5 text-column">
              <h5 className="gold-text2 mb-2 text-center h1 mb-5">
                {category.title}
              </h5>
              <p className="lead-text lh-lg fw-light mt-4 mt-md-0 me-md-4 mb-5 text-justify">{category.description}</p>
            </Col>
            <Col className="divider"></Col>
          </Row>
        ))}
      </Container>
       <div className="container mt-5">
        <div className="d-flex justify-content-end">
          <VoltarParaCima />
        </div>
      </div>
      <Footer/>
    </>
  );
}
