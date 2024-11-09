import { Html } from '@react-three/drei';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <Html>
      <div className={styles.loader}>
        <div className={styles.content}></div>
      </div>
    </Html>
  );
};
