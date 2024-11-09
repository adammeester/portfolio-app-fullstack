import { VerticalTimeline } from 'react-vertical-timeline-component';
import styles from './ExperienceTimeline.module.css';
import { experiences } from '../../constants';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { Planet } from '../PlanetCanvas';

export const ExperienceTimeline = () => {
  return (
    <section id='experience' className={`${styles.timeline}`}>
      <div className={styles.content}>
        <h1>Experience</h1>

        <Planet planet='blackBottom' />
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
