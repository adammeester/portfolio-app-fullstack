import { useEffect, useState } from 'react';
import styles from './ShootingStar.module.css';

// type ShootingStarProps = {
//   direction: 'left' | 'right';
//   starCount?: number;
// };

export const ShootingStar = () => {
  const [showStar, setShowStar] = useState(false);
  const minPosition = 0;
  const maxPosition = 300;
  const starPosition =
    Math.floor(Math.random() * (maxPosition - minPosition + 1)) + minPosition;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowStar(true);
      setTimeout(() => setShowStar(false), 2000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return showStar ? (
    <div className={styles.shootingStar} style={{ top: `${starPosition}px` }} />
  ) : null;
};
