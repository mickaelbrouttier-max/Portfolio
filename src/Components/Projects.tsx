import { useState } from "react";
import "./Projects.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
	{
		title: "Combatfit",
		Image: "/Portfolio/Image/Projects/Combatfit.png",
		text: "Plateforme web dédiée au coaching de karaté et à la préparation physique. Elle intègre un système interactif de prise de rendez-vous en ligne avec sélection de créneaux en temps réel, un tableau de bord d'administration pour gérer les réservations, ainsi qu'un système d'envoi automatique d'e-mails de confirmation.\n\nTechnos : Angular, TypeScript, Node.js, Express, MySQL, Nodemailer, REST API",
		link: "https://mickaelbrouttier-max.github.io/combatfit/#/",
	},
	{
		title: "TripTogether",
		Image: "/Portfolio/Image/Projects/TripTogether.png",
		text: "Plateforme centralisant la planification de voyages à plusieurs. Les utilisateurs peuvent construire leur itinéraire ensemble en proposant et en votant pour différentes destinations et étapes.\nL'application met en avant une expérience fluide grâce à la mise à jour des données en temps réel et un parcours utilisateur pensé pour la prise de décision collective.\n\nTechnos : React, TypeScript, Node.js, bases de données relationnelles",
		link: "https://triptogether.artis3w.com/",
	},
	{
		title: "Zeldalle",
		Image: "/Portfolio/Image/Projects/Zeldalle.png",
		text: "Application pensée pour une expérience mobile, permettant de sélectionner les ingrédients disponibles et d’afficher les recettes associées. Elle propose également la localisation des ingrédients sur la carte du jeu.L’interface est conçue pour être consultée sur écran réduit, avec un affichage optimisé lors du clic sur le projet.\n\nTechnos : React, JavaScript, logique applicative, responsive design",
		link: "https://mickaelbrouttier-max.github.io/Zeldalle/",
	},
	{
		title: "Portfolio",
		Image: "/Portfolio/Image/Projects/Portfolio.png",
		text: "Portfolio développé avec React afin de présenter mes projets et compétences de manière claire et interactive.\nLe projet met l’accent sur l’ergonomie, les animations fluides et la navigation, avec une logique de composants réutilisables et une gestion d’état optimisée.\nTechnos : React, JavaScript, HTML, CSS\n",
		link: "https://mickaelbrouttier-max.github.io/Portfolio/",
	},
	{
		title: "Boss BG3",
		Image: "/Portfolio/Image/Projects/BGBOSS.png",
		text: "Application visant à identifier et classer les boss de Baldur’s Gate 3 selon différents critères (zone, difficulté, spécificités).\nLe projet repose sur une structuration claire des données et une interface pensée pour faciliter la recherche et la préparation des combats.\n\nTechnos : JavaScript, React, gestion de données",
		link: "https://mickaelbrouttier-max.github.io/Boss-BG3/",
	},

	{
		title: "La Taverne",
		Image: "/Portfolio/Image/Projects/Taverne.png",
		text: "Application immersive permettant de guider les joueurs dans le choix de leur classe et de leur race via un formulaire interactif.\nLe projet met en œuvre une logique conditionnelle afin de proposer des résultats cohérents avec l’univers Donjons & Dragons.\n\nTechnos : JavaScript, React, formulaires dynamiques",
		link: "https://mickaelbrouttier-max.github.io/taverne-dnd-race-and-classe-choice/",
	},
	{
		title: "Character creator",
		Image: "/Portfolio/Image/Projects/DandDcreator.png",
		text: "Application permettant de créer des personnages pour le jeu Donjons & Dragons. Le projet met en œuvre une logique conditionnelle afin de proposer des résultats cohérents avec l’univers Donjons & Dragons. Il permet ainsi un gain de temps pour les joueurs ainsi que le maitre du jeu par l'envoie des personnages générés via un formulaire et donc, ne pas perdre de temps à créer les personnages manuellement lors de la première cession.Technos : JavaScript, React, formulaires dynamiques",
		link: "https://mickaelbrouttier-max.github.io/DandDbyMike/",
	},

];

export default function Projects() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [projectsRef, isProjectsVisible] = useScrollAnimation({
		threshold: 0.1,
	});

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
		<section
			id="projects"
			className={`projects reveal ${isProjectsVisible ? "visible" : ""}`}
			ref={projectsRef}
		>
			<h1 className="projects-title">My Projects</h1>

			<div className="projects-sections">
				<div className="projects-container">
					<section className="carousel">
						{projects.map((project, index) => {
							const pos = getRelativePosition(index);

							return (
								// biome-ignore lint/a11y/useSemanticElements: keeping div for styling purposes
								<div
									key={project.title}
									className={`carousel-card position-${pos} ${
										Math.abs(pos) > 1 ? "hidden-card" : ""
									}`}
									onClick={() => {
										if (pos === 1) next();
										if (pos === -1) prev();
									}}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											if (pos === 1) next();
											if (pos === -1) prev();
										}
									}}
									role="button"
									tabIndex={0}
								>
									{project.Image && (
										<img
											src={project.Image}
											alt={project.title}
											onClick={() => {
												if (pos === 0) {
													window.open(project.link, "_blank", "noreferrer");
												}
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter" && pos === 0) {
													window.open(project.link, "_blank", "noreferrer");
												}
											}}
										/>
									)}
									<h1>{project.title}</h1>
								</div>
							);
						})}
					</section>

					<div className="carousel-controls">
						<button type="button" className="carousel-arrow" onClick={prev}>
							&#10094;
						</button>

						<div className="carousel-dots">
							{projects.map((project, index) => (
								// biome-ignore lint/a11y/useSemanticElements: styling dot
								<span
									key={project.title}
									className={`dot ${index === currentIndex ? "active" : ""}`}
									onClick={() => setCurrentIndex(index)}
									onKeyDown={(e) => {
										if (e.key === "Enter") setCurrentIndex(index);
									}}
									role="button"
									tabIndex={0}
								></span>
							))}
						</div>

						<button type="button" className="carousel-arrow" onClick={next}>
							&#10095;
						</button>
					</div>

					<p className="Projecttext">{projects[currentIndex].text}</p>
				</div>
			</div>
		</section>
	);
}
