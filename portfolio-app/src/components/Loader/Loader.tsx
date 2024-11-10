import { Html } from '@react-three/drei';
import styles from './Loader.module.css';

type LoaderProps = {
  is3D?: boolean;
};

export const Loader = ({ is3D = false }: LoaderProps) => {
  return is3D ? (
    <Html>
      <div className={styles.loader}>
        <div className={styles.content}></div>
      </div>
    </Html>
  ) : (
    <div className={styles.loader}>
      <div className={styles.content}></div>
    </div>
  );
};
