import styles from './SkillsContainer.module.css';
import { skills } from '../../constants';
import { usePopInObserver } from '../../hooks/usePopInObserver';
import popinStyles from '../../hooks/popinObserver.module.css';

export const SkillsContainer = () => {
  usePopInObserver(popinStyles.hidden, popinStyles.show);

  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className={`${styles.skillsCard} ${popinStyles.hidden}`}
            >
              <img
                aria-description={skill.description}
                aria-label={skill.name}
                className={styles.skillImage}
                src={skill.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
