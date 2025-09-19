import { useState } from "react";
import "./Studies.css";

export default function Studies({ texts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (img) => {
    setActiveImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>{texts?.title || "Cargando..."}</h2>
      <div className="projects-grid">
        <div className="parent">
          <div data-aos="fade-up" data-aos-duration="500" className="divITU">
            <h3>{texts?.titulo1 || "Cargando..."}</h3>
            <p>
              ITU UnCuyo Mendoza <br />
              Inicio 2024 - Actualmente en proceso
            </p>
          </div>

          {/* Primer certificado */}
          <div data-aos="fade-up" data-aos-duration="500" className="divCoder1">
            <h3>{texts?.titulo2 || "Cargando..."}</h3>
            <button
              className="buttonCer"
              onClick={() => openModal("/JavaScript.png")}
            >
              {texts?.certificacion || "Cargando..."}
            </button>
            <p>CoderHouse</p>
          </div>

          {/* Segundo certificado */}
          <div data-aos="fade-up" data-aos-duration="500" className="divCoder1">
            <h3>{texts?.titulo3 || "Cargando..."}</h3>
            <button
              className="buttonCer"
              onClick={() => openModal("/webdev.png")}
            >
              {texts?.certificacion || "Cargando..."}
            </button>
            <p>CoderHouse</p>
          </div>
        </div>
      </div>

      {/* Modal único y reutilizable */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <img src={activeImage} alt="Certificado" />
          </div>
        </div>
      )}
    </section>
  );
}
