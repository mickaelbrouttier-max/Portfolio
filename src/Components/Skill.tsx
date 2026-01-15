import "./Skill.css";

export default function Skill() {
  return (
    <div className="skill">
      <div className="skill-title">My Skills</div>
      <div className="skill-sections">
        <div className="hard-skills">
          <div className="titlehardskills">
            <h2>Hard Skills</h2>
          </div>
          <div className="TechGrid">
            <div className="TechCard">
              <img src="/Image/Skills/html-5.png" alt="HTML5" />
              <span>HTML5</span>
            </div>

            <div className="TechCard">
              <img src="/Image/Skills/css-3.png" alt="CSS3" />
              <span>CSS3</span>
            </div>

            <div className="TechCard">
              <img src="/Image/Skills/js.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="TechCard">
              <img src="/Image/Skills/react.png" alt="React" />
              <span>React</span>
            </div>

            <div className="TechCard">
              <img src="/Image/Skills/nodejs.png" alt="Node.js" />
              <span>Node.js</span>
            </div>

            <div className="TechCard">
              <img src="/Image/Skills/typescript.png" alt="TypeScript" />
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
  <img src="/Image/Skills/Softskill/autonomie.png" alt="Autonomie" />
  <span>Autonomie</span>
</div>

<div className="TechCard">
  <img src="/Image/Skills/Softskill/communication.png" alt="Communication" />
  <span>Communication</span>
</div>

<div className="TechCard">
  <img src="/Image/Skills/Softskill/learning.png" alt="Apprentissage continu" />
  <span>Apprentissage continu</span>
</div>

<div className="TechCard">
  <img src="/Image/Skills/Softskill/personnes.png" alt="Relationnel" />
  <span>Relationnel</span>
</div>

<div className="TechCard">
  <img src="/Image/Skills/Softskill/probleme.png" alt="Résolution de problèmes" />
  <span>Résolution de problèmes</span>
</div>

<div className="TechCard">
  <img src="/Image/Skills/Softskill/teamwork.png" alt="Travail d’équipe" />
  <span>Travail d’équipe</span>
</div>
          </div>
          </div>
      </div>
    </div>
  );
}
