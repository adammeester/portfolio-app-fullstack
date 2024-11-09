import styles from './Card.module.css';
import { ReactElement } from 'react';

type ImageProps = { alt: string; url: string };

type CardProps = {
  size?: 'default' | 'large';
  image?: ImageProps;
  header?: ReactElement;
  content: ReactElement;
  footer?: ReactElement;
};

export const Card = ({
  size = 'default',
  image,
  header,
  content,
  footer,
}: CardProps) => {
  const cardClassName =
    size === 'large' ? `${styles.largeCard} ${styles.card}` : styles.card;

  return (
    <div className={cardClassName}>
      {header ? header : null}

      {image ? (
        <img
          className={styles.image}
          src={image?.url}
          alt={`${image?.alt}-image`}
        />
      ) : null}

      {content ? <div className={styles.cardContent}>{content}</div> : null}

      {footer ? <div className={styles.cardFooter}>{footer}</div> : null}
    </div>
  );
};
