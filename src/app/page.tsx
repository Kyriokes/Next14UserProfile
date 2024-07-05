'use client';

import { useState } from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Interest from './components/Interest/Interest';
import styles from './page.module.css';
import ContactForm from './components/ContacForm/ContactForm';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return; // Prevent transition if the same tab is clicked

    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
    }, 300); // Duration of the transition in milliseconds
  };

  return (
    <div className={styles.container}>
      <Header setActiveTab={handleTabChange} />
      <div className={styles.content}>
        <div className={`${styles.tabContent} ${transitioning ? styles.transitioning : ''}`}>
          {activeTab === 'about' && <About />}
          {activeTab === 'interests' && <Interest />}
          {activeTab === 'contact' && <ContactForm />}
        </div>
      </div>
    </div>
  );
}
