import "./Navbar.css";

export default function Navbar({ setLanguage }) {
  return (
    <nav className="navbar">
      <h2>Language Selector</h2>
      <div className="language-selector">
        <button className="buttonEs" onClick={() => setLanguage("es")}><img src="/es.svg" alt=""/></button>
        <button className="buttonEn" onClick={() => setLanguage("en")}><img src="/en.svg" alt=""/></button>
      </div>
    </nav>
  );
}
