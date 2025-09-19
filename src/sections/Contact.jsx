import { info } from "../data/info";
import "./Contact.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ texts }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 0,
      once: true,
      startEvent: "DOMContentLoaded", // se activa al cargar la página
      disableMutationObserver: true, // no espera al scroll
    });

    AOS.refreshHard(); // fuerza animación inmediata
  }, []);
  
  return (
    <section id="contact" className="contact">
      <h2>{texts?.title || "Cargando..."}</h2>
      <div className="skills-grid">
        <a href="mailto:gonzalo.sanchez.develop@gmail.com" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-right" data-aos-duration="1000" className="hability">
            <span>EMAIL</span>
            <img src="/email.svg" alt="" />
          </div>
        </a>
        <a href="https://github.com/GonzaSanchezProyects" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-right" data-aos-duration="1500" className="hability">
            <span>GITHUB</span>
            <img src="/github.svg" alt="" />
          </div>
        </a>
        <a href="https://wa.me/5492634272885" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-right" data-aos-duration="2000" className="hability">
            <span>WHATSAPP</span>
            <img src="/whatsapp.svg" alt="" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gonzalo-sanchez-126439192/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade-right" data-aos-duration="2500" className="hability">
            <span>LINKENDIN</span>
            <img src="/linkedin.svg" alt="" />
          </div>
        </a>
      </div>
    </section>  
  );
}
