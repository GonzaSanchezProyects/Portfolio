import AOS from "aos";
import { useEffect } from "react";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects({ texts }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 0,
      once: true,
      startEvent: "DOMContentLoaded",
      disableMutationObserver: true,
    });
    AOS.refreshHard();
  }, []);
  return (
    <section id="projects" className="projects">
      <h2>{texts?.title || "Cargando..."}</h2>
      <div className="projects-grid">
        <div class="parent">
          <div data-aos="fade-up" data-aos-duration="500" class="div1">
            <h3>{texts?.cards1Name || "Cargando..."}</h3>
            <p>{texts?.parrafo1 || "Cargando..."}</p>
            <div className="SvgProyecto">
                <img src="/html.svg" alt=""/>
                <img src="/css.svg" alt=""/>
                <img src="/js.svg" alt=""/>
                <img src="/react.svg" alt=""/>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" class="div2">
            <h3>Malbec Bytes</h3>
            <p>{texts?.parrafo2 || "Cargando..."}</p>
            <div className="SvgProyecto">
                <img src="/html.svg" alt=""/>
                <img src="/css.svg" alt=""/>
                <img src="/js.svg" alt=""/>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" class="div3">
            <h3>Las Lomitas LLC</h3>
            <p>{texts?.parrafo3 || "Cargando..."}</p>
            <div className="SvgProyecto">
                <img src="/html.svg" alt=""/>
                <img src="/css.svg" alt=""/>
                <img src="/js.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
