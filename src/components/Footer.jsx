import "./Footer.css";

export default function Footer({ texts }) {
  return (
    <footer className="footer">
      <p>{texts?.text || "Cargando..."}</p>
    </footer>
  );
}