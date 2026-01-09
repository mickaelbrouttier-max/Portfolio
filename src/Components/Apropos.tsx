import "./Apropos.css";
import { useEffect, useState, } from "react";

const texts = [
  "développeur Full Stack",
  "passionné par le code",
  "créateur de solutions innovantes",
  "toujours prêt à apprendre",
];
export default function Apropos() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = isDeleting ? 60 : 90;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="page">
      <div className="Center">
        <div className="MiddleText">
          <h1>Bienvenue sur mon Portfolio</h1>
        </div>
        <div className="SubText">
          <h2>
            Je suis {text}
            <span className="cursor">|</span>
          </h2>
        </div>
<a href="#about" className="NextSection">
  À mon sujet
</a>      </div>
      <section className="Aboutme" id="about">
        <div className="Titre">About me
            </div>
            <section className="Description">
                <img className="Photo" src="Image/FB_IMG_1612273947187(1) (1).jpg" alt="Photo de Mickaël Brouttier" width="500px"/>
               <div className="TextAbout"> 
                <h1>Qui suis-je ?</h1>
                <h2> Mickaël Brouttier - Développeur Full Stack</h2>
                <p>Issu d’un BAC Scientifique, j’ai construit un parcours riche et polyvalent à travers plusieurs expériences professionnelles, allant de gendarme à facteur, en passant par moniteur d’accrobranche, avant de m’épanouir depuis plus de 4 ans comme vendeur-monteur en optique.
Ces expériences m’ont permis de développer un fort sens des responsabilités, une excellente relation client, ainsi qu’une grande capacité d’adaptation.</p>

<p>

Animé par une passion grandissante pour le numérique et la création, j’ai entrepris une reconversion professionnelle en intégrant un bootcamp de formation Développeur Full Stack. J’y ai acquis de solides compétences en JavaScript, HTML, CSS, React et Express, ainsi qu’une bonne maîtrise de l’environnement Node.js, GitHub et Visual Studio Code.</p>

<p>

Aujourd’hui, je souhaite mettre mon esprit logique, ma rigueur et mon expérience terrain au service de projets web ambitieux. Curieux, motivé et orienté solution, je m’intègre facilement au sein d’une équipe et j’ai à cœur de continuer à apprendre et à évoluer dans l’univers du développement web.</p>
<a href="public/cv/CV Mickaël BROUTTIER.pdf" className="NextSection" download>Télécharger mon CV</a>
                </div>
                
            </section>
             </section>
    </div>
  );
}
