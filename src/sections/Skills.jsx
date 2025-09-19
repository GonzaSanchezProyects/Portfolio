import "./Skills.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ texts }) {
  useEffect(() => {
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  // Inicializar AOS según el ancho de pantalla
  if (window.innerWidth > 1100) {
    // Desktop: animaciones desde que carga la página
    AOS.init({
      duration: 800,
      offset: 0,
      once: true,
      startEvent: "load", // se activa al cargar la página
      disableMutationObserver: true,
    });
  } else {
    // Móvil: animaciones al hacer scroll
    AOS.init({
      duration: 800,
      offset: 0,
      once: true,
      startEvent: "scroll", // se activa al hacer scroll
      disableMutationObserver: false,
    });
  }

  // Fuerza refresco de AOS
  AOS.refreshHard();

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">{texts?.title || "Cargando..."}</h2>
      <div className="skills-grid">
        <a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-left" data-aos-duration="500" className="hability">
            <span>HTML</span>
            <img src="/html.svg" alt="HTML logo" />
          </div>
        </a>

        <a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-left" data-aos-duration="1000" className="hability">
            <span>CSS</span>
            <img src="/css.svg" alt="CSS logo" />
          </div>
        </a>

        <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-left" data-aos-duration="1500" className="hability">
            <span>JAVASCRIPT</span>
            <img src="/js.svg" alt="JavaScript logo" />
          </div>
        </a>

        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-left" data-aos-duration="2000" className="hability">
            <span>REACT JS</span>
            <img src="/react.svg" alt="React logo" />
          </div>
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-left" data-aos-duration="2500" className="hability">
            <span>GITHUB</span>
            <img src="/github.svg" alt="GitHub logo" />
          </div>
        </a>
      </div>
    </section>
  );
}
