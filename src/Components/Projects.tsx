import { useState } from "react";
import "./Projects.css";

const projects = [
  { title: "Portfolio", Image: "public/Image/Projects/Portfolio.png" },
  { title: "Création Personnage BG3", Image: "public/Image/Projects/BGBOSS.png" },
  {title: "Zeldalle", Image: "public/Image/Projects/Zeldalle.png"},
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length );
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-sections">
        <div className="projects-container">
          <section className="carousel">
            {projects.map((project, index) => {
              const position = index - currentIndex;

              return (
                <div
                  key={index}
                  className={`carousel-card position-${position}`}
                        onClick={() => {

      }}
                >
                  {project.Image && (
                    <img src={project.Image} alt={project.title} onClick={() => {
                      if (position === 1) next();
                      if (position === -1) prev();
                      if (position === 0) next();
                    }} />
                  )}
                  {project.title}

                </div>
              );
            })}
          </section>

          <div className="carousel-controls">
            <button onClick={prev}>‹</button>
            <button onClick={next}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
