import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navSlide } from '../animations/MenuAnimations';

// styles
import styles from './nav.module.scss';

interface NavProps {
  active: boolean;
  children: ReactNode;
}

const Nav: React.FC<NavProps> = ({ active, children }) => {
  return (
    <motion.nav
      className={styles.nav}
      variants={navSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      {' '}
      <Link className={styles.link} href='/'>
        DeGaming
      </Link>
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        {children}
      </ul>
    </motion.nav>
  );
};

export default Nav;
