import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Flipcard.module.css';

type FlipcardProps = {
  frontContent?: ReactNode;
  backContent?: ReactNode;
  children?: Array<ReactNode>;
  onClick?: () => void;
};

export const Flipcard = ({
  frontContent,
  backContent,
  children,
  onClick,
}: FlipcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = Math.max(
        cardRef.current.scrollHeight,
        cardRef.current.clientHeight
      );
      cardRef.current.style.height = `calc(${cardHeight}px)`;
    }
  }, [frontContent, backContent]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (children?.[1] || backContent) {
      setIsFlipped((prev) => !prev);
    }
  };

  const cardClass = isFlipped
    ? `${styles.card} ${styles.flipped}`
    : styles.card;

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={cardClass} ref={cardRef}>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          {children?.[1] || backContent}
        </div>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          {children?.[0] || frontContent}
        </div>
      </div>
    </div>
  );
};
