import { usePopInObserver } from '../../hooks/usePopInObserver';
import { About } from '../About';
import styles from './FeaturesContainer.module.css';
import popinStyles from '../../hooks/popinObserver.module.css';
import { ExperienceTimeline } from '../ExperienceTimeline';
import { Contact } from '../Contact';
import { Projects } from '../Projects';

export const FeaturesContainer = () => {
  usePopInObserver(popinStyles.hidden, popinStyles.show);

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.section} ${popinStyles.hidden}`}>
        <About />
      </div>
      <div className={`${styles.section} ${popinStyles.hidden}`}>
        <ExperienceTimeline />
      </div>
      <div className={`${styles.section} ${popinStyles.hidden}`}>
        <Projects />
      </div>
      <div className={`${styles.section} ${popinStyles.hidden}`}>
        <Contact />
      </div>
    </section>
  );
};
