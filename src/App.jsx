import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Studies from "./sections/Studies";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const res = await fetch(`/languages/${language}.json`);
        if (!res.ok) throw new Error("Error cargando el JSON");
        const data = await res.json();
        setTexts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadLanguage();
  }, [language]); // ⚡ Cada vez que cambia el idioma, se vuelve a cargar el JSON

  return (
    <div>
      <Navbar setLanguage={setLanguage} /> {/* Pasamos setLanguage al Navbar para cambiar idioma */}
      <Hero texts={texts.hero || {}} />
      <div className="firstSection">
        <Contact texts={texts.contact || {}} />
        <About texts={texts.about || {}}  />
        <Skills texts={texts.skills || {}} />
      </div>
      <Projects texts={texts.projects || {}} />
      <Studies texts={texts.studies || {}} />
      <Footer texts={texts.footer || {}} />
    </div>
  );
}
