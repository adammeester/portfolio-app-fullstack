import { socials } from '../../constants';
import { getPresentationLink } from '../../utils/getPresentationLink';
import styles from './Socials.module.css';

type SocialsProps = {
  showUrl?: boolean;
  alignment?: 'start' | 'center' | 'end';
};

export const Socials = ({
  showUrl = true,
  alignment = 'center',
}: SocialsProps) => {
  return (
    <div
      className={styles.socialsContainer}
      style={{ justifyContent: alignment }}
    >
      {socials.map((social) => {
        return social.icon ? (
          <a
            className={styles.socialsLink}
            key={social.icon.name}
            href={social.target}
            target='_blank'
          >
            <img
              className={styles.socialsIcon}
              src={social.icon.imageUrl}
              alt={social.icon.name}
              aria-description={social.icon.description}
            />
            {showUrl ? getPresentationLink(social.target) : null}
          </a>
        ) : null;
      })}
    </div>
  );
};
