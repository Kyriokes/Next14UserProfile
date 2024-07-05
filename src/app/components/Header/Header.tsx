"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

interface HeaderProps {
	setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => (
	<header className={styles.header}>
		<div className={styles.userInfo}>
			<Image
				src="/profile.jpg"
				alt="Profile Picture"
				width={1080}
				height={720}
				className={styles.profilePic}
			/>
			<div className={styles.username}>
				<h2>Hi! I{"'"}m</h2>
			<h1>Sergio<br/> Ferrari<br/> Bryce</h1>
			
			</div>
		</div>
		<nav className={styles.nav}>
			<button onClick={() => setActiveTab("about")}>Sobre mí</button>
			<button onClick={() => setActiveTab("interests")}>Intereses</button>
			<button onClick={() => setActiveTab("contact")}>Contacto</button>
		</nav>
	</header>
);

export default Header;
