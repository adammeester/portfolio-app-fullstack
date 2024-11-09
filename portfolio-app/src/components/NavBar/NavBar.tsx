import styles from './Navbar.module.css';
import { navItems } from '../../constants';
import { useEffect, useState } from 'react';
import amLogo from '../../assets/am-logo.svg';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

export const NavBar = () => {
  const [active, setActive] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navBar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href='#' onClick={() => setActive('')}>
          <img className={styles.logo} src={amLogo} alt={'adam meester logo'} />
        </a>

        <ul className={styles.navItems}>
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={`#${item.target}`}
                onClick={() => setActive(item.title)}
                className={`${active === item.title && styles.active}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.mobileMenu}>
        {isNavOpen ? (
          <IoClose size={30} onClick={() => setIsNavOpen(false)} />
        ) : (
          <IoMenu size={30} onClick={() => setIsNavOpen(!isNavOpen)} />
        )}

        <div
          className={`${styles.mobileMenuContent} ${
            !isNavOpen ? styles.hidden : ''
          }`}
        >
          <ul className={`${styles.navItems} ${styles.mobileNavLinks}`}>
            {navItems.map((item) => (
              <li
                key={item.title}
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                  setActive(item.title);
                }}
              >
                <a
                  href={`#${item.target}`}
                  onClick={() => setActive(item.title)}
                  className={`${active === item.title && styles.active}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
