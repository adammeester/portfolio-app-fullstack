import { aboutDescription } from '../../constants';
import styles from './About.module.css';
import { Planet } from '../PlanetCanvas';
import { SkillsContainer } from '../SkillsContainer';
import { ShootingStar } from '../ShootingStar';

export const About = () => {
  return (
    <section id='about' className={styles.container}>
      <ShootingStar />
      <div className={styles.about}>
        <div className={styles.content}>
          <h1>About</h1>
          <div>{aboutDescription}</div>
        </div>
        <Planet planet='whiteLarge' />
      </div>
      <SkillsContainer />
    </section>
  );
};
