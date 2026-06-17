import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import "./Contato.css"; // Arquivo para os estilos de cores e espaçamentos específicos

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const handleClear = () => {
    setFormData({ nome: "", email: "", whatsapp: "", mensagem: "" });
  };

  return (
    <div className="contato-section bg-main text-white py-5">
        <Navbar/>
      <Container>
        {/* Título de Destaque */}
        <Row className="mb-5">
          <Col lg={8}>
            <h1 className="display-5 gold-text2 font-weight-bold text-uppercase mb-3 tracking-wide mt-5">
              Vamos eternizar a sua <br /> própria narrativa
            </h1>
                <p className="lead-text lh-lg fw-light mt-4 mt-md-0 me-md-4 mb-5 text-justify max-w-xl ">
              Seja para produções cinematográficas, design de personagens ou
              beleza nupcial exclusiva, estou disponível para transformar visões
              em arte visual.
            </p>
          </Col>
        </Row>

        <Row className="gap-y-4">
          {/* Coluna do Formulário */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="form-container p-4 p-md-5 h-100">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label className="text-gold-light small">Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-gold-light small">E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="seuemail@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formWhatsapp">
                  <Form.Label className="text-gold-light small">Whatsapp</Form.Label>
                  <Form.Control
                    type="text"
                    name="whatsapp"
                    placeholder="(61) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMensagem">
                  <Form.Label className="text-gold-light small">Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensagem"
                    rows={4}
                    placeholder="Envie sua mensagem aqui"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="custom-input custom-textarea"
                    required
                  />
                </Form.Group>

                <div className="d-flex gap-3">
                  <Button type="submit" className="btn-gold px-4 py-2 text-uppercase fw-bold">
                    Enviar
                  </Button>
                  <Button type="button" onClick={handleClear} className="btn-dark-custom px-4 py-2 text-uppercase fw-bold">
                    Limpar
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* Coluna dos Contactos Diretos */}
          <Col lg={5} className="offset-lg-1 d-flex flex-column justify-content-start gap-4">
            <div>
              <h5 className="text-gold-light mb-3 fw-normal">Conexão Direta</h5>
              
              {/* Card WhatsApp */}
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="contact-card d-flex align-items-center justify-content-between p-3 mb-3 text-decoration-none text-white">
                <div className="d-flex align-items-center gap-3">
                  <FaWhatsapp className="contact-icon" />
                  
                    <div className="contact-value">+ 55 11 99999-9999</div>
                  
                </div>
                <FiArrowUpRight className="arrow-icon" />
              </a>

              {/* Card E-mail */}
              <a href="mailto:bbbbbbb@gmail.com" className="contact-card d-flex align-items-center justify-content-between p-3 text-decoration-none text-white">
                <div className="d-flex align-items-center gap-3">
                  <FaEnvelope className="contact-icon" />
                  
                  
                    <div className="contact-value">bbbbbbb@gmail.com</div>
                  
                </div>
                {/* Sem seta no layout da imagem para o email */}
                <div></div> 
              </a>
            </div>

            <div>
              <h5 className="text-gold-light mb-3 fw-normal">Siga o Processo</h5>
              
              {/* Card Instagram */}
              <a href="https://instagram.com/crocodila_lee" target="_blank" rel="noreferrer" className="contact-card d-flex align-items-center justify-content-between p-3 text-decoration-none text-white">
                <div className="d-flex align-items-center gap-3">
                  <FaInstagram className="contact-icon" />
                  
                    <div className="contact-value">@crocodila_lee</div>
                 
                </div>
                <FiArrowUpRight className="arrow-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contato;