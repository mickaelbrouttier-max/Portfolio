import "./Header.css";

export default function Header() {
  return (
<header className="header">
  <div className="Moi">
    <h1>Mickaël BROUTTIER</h1>
  </div>

  <div className="spacer">
    <div className="HeaderLinks">
      <h2>Accueil</h2>
      <h2>A propos de moi</h2>
      <h2>Skills</h2>
      <h2>Projects</h2>
      <h2>Contact</h2>
    </div>

    <div className="logo">
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
