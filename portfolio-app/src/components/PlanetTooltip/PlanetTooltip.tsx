import { usePlanetsContext } from '../PlanetsContextProvider/PlanetsContextProvider';
import styles from './PlanetTooltip.module.css';

export const PlanetTooltip = () => {
  const { tooltip } = usePlanetsContext();

  return (
    <div
      className={`${
        tooltip ? `${styles.container} ${styles.visible}` : styles.container
      }`}
    >
      <span className={styles.tooltip}>{tooltip}</span>
    </div>
  );
};
