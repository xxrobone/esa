'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavBtn from '../navBtn/NavBtn';

// styles
import styles from './Navbar.module.scss';

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = (props) => {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    setClick((prev) => !prev);
    setNavActive(!click);
  };

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.scrollY;

      const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (navRef.current) {
          if (prevScrollpos > currentScrollPos) {
            navRef.current.classList.add(styles.navbar, styles.bgorange);
            navRef.current.classList.remove(styles.hide);
          } else {
            navRef.current.classList.add(styles.hide);
            navRef.current.classList.remove(styles.navbar, styles.bgorange);
          }
        }

        prevScrollpos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <button className={styles.menu_icon} onClick={handleClick}>
        <NavBtn navActive={navActive} handleClick={handleClick} />
      </button>
      <ul className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
        {props.children}
      </ul>
    </nav>
  );
};

export default Nav;
