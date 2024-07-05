"use client";
import styles from "./Interest.module.css";

const Interests: React.FC = () => (
	<section className={styles.interests}>
		<h2>Intereses</h2>
		<ul>
			<li>Desarrollo Web</li>
			<li>Programacion</li>
			<li>Streaming</li>
			<li>Aviacion</li>
			<li>Astrofísica</li>
			<li>Historia</li>
		</ul>
	</section>
);

export default Interests;
