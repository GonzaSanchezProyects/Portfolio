import { info } from "../data/info";
import "./Hero.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero({ texts }) {
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
    <section data-aos="fade-up" id="hero" className="hero">
		    <h1>{texts?.title}</h1>
      	<h2>{texts?.intro}</h2>
    </section>
  );
}
