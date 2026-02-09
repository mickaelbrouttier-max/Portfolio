import { useState, useEffect } from "react";
import "./Header.css";

const themes = ["primary", "neon", "dark-red", "purple", "gold"];

export default function Header() { 
  const [current, setCurrent] = useState(themes[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = document.documentElement.getAttribute("data-theme");
    if (savedTheme && themes.includes(savedTheme)) {
      setCurrent(savedTheme);
    }
  }, []);

  const nextTheme = () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || current;
    const currentIndex = themes.indexOf(activeTheme);
    
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setCurrent(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
<header className="header">
  <div className="Moi">
    <h1>Mickaël BROUTTIER</h1>
  </div>

  <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>

  {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
<div className="AllHeaderLink">
  <div className={`HeaderLinks ${isMenuOpen ? 'open' : ''}`}>
    <h2><a href="#accueil" onClick={closeMenu}>Accueil</a></h2>
    <h2><a href="#apropos" onClick={closeMenu}>A propos de moi</a></h2>
    <h2><a href="#skills" onClick={closeMenu}>Skills</a></h2>
    <h2><a href="#contact" onClick={closeMenu}>Contact</a></h2>
    
    <div className="logo">
      <button
        onClick={nextTheme}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "var(--shadow-primary-strong)"}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "var(--shadow-red)"}
        style={{
          padding: "8px 16px",
          borderRadius: "12px",
          border: "2px solid var(--primary-color)",
          background: "transparent",
          color: "var(--primary-color)",
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: "'LinexSweet', system-ui, sans-serif",
          fontSize: "0.9rem",
          boxShadow: "var(--shadow-red)",
          transition: "box-shadow 0.3s ease"
        }}
      >
        Theme
      </button>
      <a href="https://github.com/mickaelbrouttier-max" target="_blank" rel="noreferrer">
        <i className="github-logo"></i>
      </a>
      <a href="https://www.linkedin.com/in/micka%C3%ABl-brouttier-6580082a4/" target="_blank" rel="noreferrer">
        <i className="linkedin-logo"></i>
      </a>
    </div>
  </div>
</div>
</header>
  );
}
