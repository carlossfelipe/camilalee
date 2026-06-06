function NoivasHeader({ banner }) {
  return (
    <header
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${banner})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-content">
        <h1
          className="display-4 fw-bold gold-text1"
          style={{
            position: "absolute",
            left: 30,
            bottom: 30,
            whiteSpace: "pre-line",
            textAlign: "left",
          }}
        >
          A CARACTERIZAÇÃO <br />
          DE UMA PERSONAGEM <br />
          INESQUECÍVEL
        </h1>
      </div>
    </header>
  );
}

export default NoivasHeader;
