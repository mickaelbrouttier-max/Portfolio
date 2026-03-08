import "./Skill.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Skill() {
	const [skillRef, isSkillVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<div
			id="skills"
			className={`skill reveal ${isSkillVisible ? "visible" : ""}`}
			ref={skillRef}
		>
			<div className="skill-title">My Skills</div>
			<div className="skill-sections">
				<div className="hard-skills">
					<div className="titlehardskills">
						<h2>Hard Skills</h2>
					</div>
					<div className="TechGrid">
						<div className="TechCard">
							<img src="/Portfolio/Image/Skills/html-5.png" alt="HTML5" />
							<span>HTML5</span>
						</div>

						<div className="TechCard">
							<img src="/Portfolio/Image/Skills/css-3.png" alt="CSS3" />
							<span>CSS</span>
						</div>

						<div className="TechCard">
							<img src="/Portfolio/Image/Skills/js.png" alt="JavaScript" />
							<span>JavaScript</span>
						</div>

						<div className="TechCard">
							<img src="/Portfolio/Image/Skills/react.png" alt="React" />
							<span>React</span>
						</div>

						<div className="TechCard">
							<img src="/Portfolio/Image/Skills/nodejs.png" alt="Node.js" />
							<span>Node.js</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/typescript.png"
								alt="TypeScript"
							/>
							<span>TypeScript</span>
						</div>
					</div>
				</div>
				<div className="soft-skills">
					<div className="titlehardskills">
						<h2>Soft Skills</h2>
					</div>
					<div className="TechGrid">
						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/autonomie.png"
								alt="Autonomie"
							/>
							<span>Autonomie</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/communication.png"
								alt="Communication"
							/>
							<span>Communication</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/learning.png"
								alt="Apprentissage continu"
							/>
							<span>Apprentissage continu</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/personnes.png"
								alt="Relationnel"
							/>
							<span>Relationnel</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/probleme.png"
								alt="Résolution de problèmes"
							/>
							<span>Résolution de problèmes</span>
						</div>

						<div className="TechCard">
							<img
								src="/Portfolio/Image/Skills/Softskill/teamwork.png"
								alt="Travail d’équipe"
							/>
							<span>Travail d’équipe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
