import { useEffect, useState } from "react";
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
		const activeTheme =
			document.documentElement.getAttribute("data-theme") || current;
		const currentIndex = themes.indexOf(activeTheme);

		const nextIndex = (currentIndex + 1) % themes.length;
		const nextTheme = themes[nextIndex];

		setCurrent(nextTheme);
		document.documentElement.setAttribute("data-theme", nextTheme);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="header">
			<div className="Moi">
				<h1>
					<a
						href="#accueil"
						style={{ textDecoration: "none", color: "inherit" }}
					>
						Mickaël BROUTTIER
					</a>
				</h1>
			</div>

			{/* biome-ignore lint/a11y/useSemanticElements: styling */}
			<div
				className={`hamburger ${isMenuOpen ? "open" : ""}`}
				onClick={toggleMenu}
				onKeyDown={(e) => {
					if (e.key === "Enter") toggleMenu();
				}}
				role="button"
				tabIndex={0}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>

			{isMenuOpen && (
				// biome-ignore lint/a11y/useSemanticElements: styling overlay
				<div
					className="menu-overlay"
					onClick={closeMenu}
					onKeyDown={(e) => {
						if (e.key === "Enter") closeMenu();
					}}
					role="button"
					tabIndex={0}
				></div>
			)}
			<div className="AllHeaderLink">
				<div className={`HeaderLinks ${isMenuOpen ? "open" : ""}`}>
					<div className="nav-tabs">
						<h2>
							{/* biome-ignore lint/a11y/useValidAnchor: navigation link */}
							<a href="#accueil" onClick={closeMenu}>
								Accueil
							</a>
						</h2>
						<h2>
							{/* biome-ignore lint/a11y/useValidAnchor: navigation link */}
							<a href="#apropos" onClick={closeMenu}>
								About me
							</a>
						</h2>
						<h2>
							{/* biome-ignore lint/a11y/useValidAnchor: navigation link */}
							<a href="#skills" onClick={closeMenu}>
								Skills
							</a>
						</h2>
						<h2>
							{/* biome-ignore lint/a11y/useValidAnchor: navigation link */}
							<a href="#projects" onClick={closeMenu}>
								Projets
							</a>
						</h2>
						<h2>
							{/* biome-ignore lint/a11y/useValidAnchor: navigation link */}
							<a href="#contact" onClick={closeMenu}>
								Contact
							</a>
						</h2>
					</div>

					<div className="logo">
						<button
							type="button"
							onClick={nextTheme}
							onMouseEnter={(e) => {
								e.currentTarget.style.boxShadow =
									"var(--shadow-primary-strong)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.boxShadow = "var(--shadow-red)";
							}}
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
								transition: "box-shadow 0.3s ease",
							}}
						>
							Theme
						</button>
						<a
							href="https://github.com/mickaelbrouttier-max"
							target="_blank"
							rel="noreferrer"
						>
							<i className="github-logo"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/micka%C3%ABl-brouttier-6580082a4/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="linkedin-logo"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
