import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio",
    Image: "/Portfolio/Image/Projects/Portfolio.png",
    text: "Portfolio développé avec React afin de présenter mes projets et compétences de manière claire et interactive.\nLe projet met l’accent sur l’ergonomie, les animations fluides et la navigation, avec une logique de composants réutilisables et une gestion d’état optimisée.\nTechnos : React, JavaScript, HTML, CSS\n",
    link: "https://mickaelbrouttier-max.github.io/Portfolio/"
  },
  {
    title: "Boss BG3",
    Image: "/Portfolio/Image/Projects/BGBOSS.png",
    text: "Application visant à identifier et classer les boss de Baldur’s Gate 3 selon différents critères (zone, difficulté, spécificités).\nLe projet repose sur une structuration claire des données et une interface pensée pour faciliter la recherche et la préparation des combats.\n\nTechnos : JavaScript, React, gestion de données",
    link:"https://mickaelbrouttier-max.github.io/Boss-BG3/"  },
  {
    title: "Zeldalle",
    Image: "/Portfolio/Image/Projects/Zeldalle.png",
    text: "Application pensée pour une expérience mobile, permettant de sélectionner les ingrédients disponibles et d’afficher les recettes associées. Elle propose également la localisation des ingrédients sur la carte du jeu.L’interface est conçue pour être consultée sur écran réduit, avec un affichage optimisé lors du clic sur le projet.\n\nTechnos : React, JavaScript, logique applicative, responsive design",
    link:"https://mickaelbrouttier-max.github.io/Zeldalle/"
  },
  {
    title: "La Taverne",
    Image: "/Portfolio/Image/Projects/Taverne.png",
    text: "Application immersive permettant de guider les joueurs dans le choix de leur classe et de leur race via un formulaire interactif.\nLe projet met en œuvre une logique conditionnelle afin de proposer des résultats cohérents avec l’univers Donjons & Dragons.\n\nTechnos : JavaScript, React, formulaires dynamiques",
    link:"https://mickaelbrouttier-max.github.io/taverne-dnd-race-and-classe-choice/"
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const getRelativePosition = (index: number) => {
    const raw = index - currentIndex;
    const half = Math.floor(projects.length / 2);

    if (raw > half) return raw - projects.length;
    if (raw < -half) return raw + projects.length;

    return raw;
  };

  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-sections">
        <div className="projects-container">
          <section className="carousel">
            {projects.map((project, index) => {
              const pos = getRelativePosition(index);

              return (
                <div
                  key={index}
                  className={`carousel-card position-${pos}`}
                  onClick={() => {
                    if (pos === 1) next();
                    if (pos === -1) prev();
                  }}
                >
                    {project.Image && (
                      <img src={project.Image} alt={project.title} 
                      onClick={() => {
                        if (pos === 0) {
                          window.open(project.link, "_blank","noreferrer")
                        }
                      }}/>
                    )}
                   <h1>{project.title}</h1>
                </div>
              );
            })}
          </section>
          
          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={prev}>
              &#10094;
            </button>
            
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>

            <button className="carousel-arrow" onClick={next}>
              &#10095;
            </button>
          </div>
          
          <p className="Projecttext">{projects[currentIndex].text}</p>
        </div>
      </div>
    </section>
  );
}
