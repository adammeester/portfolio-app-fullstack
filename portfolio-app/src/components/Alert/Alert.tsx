import { useEffect, useState } from 'react';
import styles from './Alert.module.css';
import { IoIosCheckmark } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

type AlertProps = {
  type: 'success' | 'warning' | 'error';
  label: string;
  content?: string;
};

const getIcon = (type: 'success' | 'warning' | 'error') => {
  switch (type) {
    case 'success':
      return <IoIosCheckmark size={35} />;
    case 'error':
      return <IoClose size={25} />;
  }
};

export const Alert = ({ type, label, content }: AlertProps) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showAlert]);
  return (
    <div
      className={`${styles.container} ${showAlert ? '' : styles.hidden} ${
        styles[type]
      }`}
    >
      <div className={styles.header}>
        {getIcon(type)}
        <div className={styles.label}>
          <p>{label}</p>
        </div>
      </div>
      {content ? <div className={styles.content}>{content}</div> : null}
    </div>
  );
};
