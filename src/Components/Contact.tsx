import { useRef, type FormEvent } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ContactForm() {
	const form = useRef<HTMLFormElement | null>(null);
	const [contactRef, isContactVisible] = useScrollAnimation({ threshold: 0.1 });

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		const showAlert = (message: string, type: "success" | "error") => {
			const div = document.createElement("div");
			div.className = `email-alert ${type}`;
			div.textContent = message;
			document.body.appendChild(div);
			setTimeout(() => div.remove(), 4000);
		};
		e.preventDefault();

		if (!form.current) return;

		const {
			VITE_EMAILJS_SERVICE_ID,
			VITE_EMAILJS_TEMPLATE_ID,
			VITE_EMAILJS_PUBLIC_KEY,
		} = import.meta.env;

		if (
			!VITE_EMAILJS_SERVICE_ID ||
			!VITE_EMAILJS_TEMPLATE_ID ||
			!VITE_EMAILJS_PUBLIC_KEY
		) {
			console.error("EmailJS environment variables are missing");
			showAlert(
				"Impossible d'envoyer le message : variables manquantes",
				"error",
			);
			return;
		}

		emailjs
			.sendForm(
				VITE_EMAILJS_SERVICE_ID,
				VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				VITE_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				showAlert("Message envoyé avec succès !", "success");
				form.current?.reset();
			})
			.catch((error) => {
				console.error("Erreur EmailJS :", error);
				showAlert("Une erreur est survenue, veuillez réessayer.", "error");
			});
	};

	return (
		<div
			id="contact"
			className={`contact-form-container reveal ${isContactVisible ? "visible" : ""}`}
			ref={contactRef}
		>
			<h1>Contact</h1>
			<form className="cf" ref={form} onSubmit={sendEmail}>
				<div className="half left">
					<input type="name" name="name" placeholder="Name" required />
					<input
						type="email"
						name="email"
						placeholder="Email address"
						required
					/>
				</div>
				<div className="half right">
					<textarea name="message" placeholder="Message" required />
				</div>
				<input type="submit" value="Submit" id="input-submit" />
			</form>
		</div>
	);
}
