import { useEffect } from 'react';
import { Socials } from '../Socials';
import styles from './Hero.module.css';

export const Hero = () => {
  useEffect(() => {
    const container = document.querySelector(`.${styles.hero}`);
    container?.classList.add(`${styles.active}`);
  }, []);

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.divider}`}>
        <div className={`${styles.circle}`} />
        <div className={`${styles.line}`} />
      </div>
      <div className={styles.bannerText}>
        <h1 className={`${styles.header}`}>Hi, I'm Adam</h1>
        <h3>A Professional Full-Stack Web Developer</h3>
        <div className={styles.socialsContainer}>
          <Socials showUrl={false} alignment='start' />
        </div>
      </div>
    </section>
  );
};
