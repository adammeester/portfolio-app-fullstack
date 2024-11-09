import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './ExperienceCard.module.css';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from '../../utils/types';
import { usePopInObserver } from '../../hooks/usePopInObserver';

type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  usePopInObserver(styles.hidden, styles.show);

  return (
    <VerticalTimelineElement
      className={`${styles.node} ${styles.hidden}`}
      contentStyle={{
        background: '#2a2c30',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  white' }}
      date={experience.date}
      // dateClassName={`${classes.date}`}
      iconStyle={{ background: experience.logoBackground }}
      icon={
        <div className={styles.icon}>
          <a
            href={experience.website}
            target='_blank'
            aria-label={`${experience.company} website`}
            aria-description={`${experience.company} website link`}
          >
            <img
              src={experience.logo}
              className={styles.companyLogo}
              alt={`${experience.logo} logo`}
            />
          </a>
        </div>
      }
    >
      <div className={styles.experienceBody}>
        <div>
          <h3>{experience.role}</h3>
          <ul>
            {experience.duties?.map((duty, i) => (
              <li className={styles.experiencePoint} key={`experience-${i}`}>
                <p>{duty}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
