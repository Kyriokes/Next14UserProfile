"use client";
import styles from "./About.module.css";

const About: React.FC = () => (
	<section className={styles.about}>
		<h2 className={styles.heading}>
			Soy un Desarrollador Full Stack con foco en JavaScript
		</h2>

		<div className={styles.body}>
			<p className={styles.paragraph}>
				Poseo sólidos conocimientos en React, Node.js, Sequelize,
				PostgreSQL y Prisma. Cuento con habilidades en GIT/Github, Unity
				y Blender. Mi formación multidisciplinaria me ha brindado
				excelentes capacidades analíticas que enriquecen mi trabajo como
				desarrollador.
			</p>

			<section className={styles.section}>
				<h3 className={styles.subheading}>Experiencia Profesional</h3>

				<ul className={styles.list}>
					<li className={styles.listItem}>
						<h4 className={styles.itemTitle}>
							Full Stack Developer - Henry Bootcamp
						</h4>
						<div className={styles.itemContent}>
							<ul className={styles.listDisc}>
								<li>
									Desarrollo backend (Node.js, Prisma,
									PostgreSQL) en el proyecto Chilling Time.
								</li>
								<li>
									Colaboración en el diseño del frontend y la
									producción de contenido para la página del
									proyecto.
								</li>
							</ul>
						</div>
					</li>
					<li className={styles.listItem}>
						<h4 className={styles.itemTitle}>
							Evaluador de Código - RemoteTasks
						</h4>
						<div className={styles.itemContent}>
							<ul className={styles.listDisc}>
								<li>
									Evaluación de código generado por IA y
									respuestas relacionadas con desarrollo web.
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.subheading}>Tecnologías</h3>

				<ul className={styles.technologyList}>
					<li className={styles.technologyItem}>
						Frontend: React, HTML, CSS, JavaScript
					</li>
					<li className={styles.technologyItem}>
						Backend: Node.js, Express.js, Prisma, PostgreSQL
					</li>
					<li className={styles.technologyItem}>
						Bases de datos: PostgreSQL
					</li>
					<li className={styles.technologyItem}>
						Control de versiones: GIT/Github
					</li>
					<li className={styles.technologyItem}>
						Herramientas: Unity, Blender
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.subheading}>
					¡Quiero aportar valor a tu equipo!
				</h3>

				<p className={styles.contactText}>
					Contáctame para conversar sobre cómo mis habilidades y
					experiencia pueden contribuir a tus proyectos.
				</p>
			</section>
		</div>
	</section>
);

export default About;
