"use client";
import styles from "./Interest.module.css";

const Interests: React.FC = () => (
	<section className={styles.interests}>
		<h2>Intereses</h2>
		<ul>
		<li>
    <h3>Desarrollo Web</h3>
    <p>Mejorar mis habilidades en React y herramientas relacionadas.</p>
</li>
<li>
    <h3>Programación</h3>
    <p>Mi contacto con JavaScript me mostró un mundo que combina matemática y lógica, lo cual me resulta estimulante.</p>
</li>
<li>
    <h3>Streaming</h3>
    <p>¿Por qué solo jugar cuando también puedes crear contenido?</p>
</li>
<li>
    <h3>Aviación</h3>
    <p>Desde chico sentí fascinación por los objetos voladores más pesados que el aire.</p>
</li>
<li>
    <h3>Astrofísica</h3>
    <p>El universo es atrapante y todo sobre él y lo desconocido que encubre me fascina.</p>
</li>
<li>
    <h3>Historia</h3>
    <p>Para entender dónde estamos, todo lo que pasó es relevante.</p>
</li>

		</ul>
	</section>
);

export default Interests;
