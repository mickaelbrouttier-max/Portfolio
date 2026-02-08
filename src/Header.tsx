import { useState } from "react";
import "./Header.css";
  const themes = ["primary", "neon", "dark-red", "light"];

export default function Header() { 
  const [current, setCurrent] = useState(themes[0]);

  const nextTheme = () => {
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrent(themes[nextIndex]);
    document.documentElement.setAttribute("data-theme", themes[nextIndex]);
  }
  return (
<header className="header">
  <div className="Moi">
    <h1>Mickaël BROUTTIER</h1>
  </div>

  <div className="spacer">
    <div className="HeaderLinks">
      <h2><a href="#accueil">Accueil</a></h2>
      <h2><a href="#apropos">A propos de moi</a></h2>
      <h2><a href="#skills">Skills</a></h2>
      <h2><a href="#projects">Projects</a></h2>
      <h2><a href="#contact">Contact</a></h2>
    </div>

    <div className="logo">
      <button       onClick={nextTheme}
      style={{
        padding: "12px 24px",
        borderRadius: "16px",
        border: "2px solid var(--primary-color)",
        background: "transparent",
        color: "var(--primary-color)",
        cursor: "pointer",
        fontWeight: "bold",
        fontFamily: "'LinexSweet', system-ui, sans-serif",
      }} >Theme</button>
      <a href="https://github.com/mickaelbrouttier-max" target="_blank" rel="noreferrer">
        <i className="github-logo"></i>
      </a>
      <a href="https://www.linkedin.com/in/micka%C3%ABl-brouttier-6580082a4/" target="_blank" rel="noreferrer">
        <i className="linkedin-logo"></i>
      </a>
    </div>
  </div>
</header>
  );
}
