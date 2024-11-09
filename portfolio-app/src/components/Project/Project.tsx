import styles from './Project.module.css';

type ProjectProps = {
  title: string;
  description: string;
  features?: Array<string>;
};

export const Project = ({ title, description, features }: ProjectProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features?.length ? (
        <ul className={styles.features}>
          {features.map((feature, i) => {
            return <li key={i}>{feature}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};
