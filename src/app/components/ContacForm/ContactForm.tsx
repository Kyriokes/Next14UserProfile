"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [successMessage, setSuccessMessage] = useState<string>("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSuccessMessage("¡Mensaje enviado con éxito!");
	};

	return (
		<section className={styles.contactForm}>
			<h2>Contacto</h2>
			<div className={styles.body}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<label htmlFor="message">Mensaje:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
			{successMessage && (
				<p className={styles.successMessage}>{successMessage}</p>
			)}
		</section>
	);
};

export default ContactForm;
