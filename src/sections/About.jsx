import "./About.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ texts }) {
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
    <section data-aos="zoom-in" data-aos-duration="1500"  id="about" className="about">
      <img id="avatar" src="/avatar.png" alt="avatar" />
      <div className="infoDiv">
        <h2>{texts?.title || "Cargando..."}</h2>
        <p>{texts?.description || ""}</p>
        <a
          href="/CV-GonzaloSanchez.pdf"
          download
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          <button>{texts?.button || ""}</button>
        </a>
      </div>
    </section>
  );
}
