import { useEffect, useState } from "react";

export default function VoltarParaCima() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    let ultimoScroll = window.scrollY;

    const handleScroll = () => {
      const scrollAtual = window.scrollY;

      if (scrollAtual > ultimoScroll && scrollAtual > 1000) {
        // rolando para baixo
        setMostrar(true);
      } else {
        // rolando para cima
        setMostrar(false);
      }

      ultimoScroll = scrollAtual;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      className="btn"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        border: "1px solid #8f7422",
        color: "#121212",
        backgroundColor: "#E5D1B0",

        opacity: mostrar ? 1 : 0,
        transform: mostrar
          ? "translateY(0) scale(1)"
          : "translateY(60px) scale(0.8)",

        transition: "all 0.6s ease",

        pointerEvents: mostrar ? "auto" : "none",
      }}
    >
      Voltar ao começo
    </a>
  );
}
