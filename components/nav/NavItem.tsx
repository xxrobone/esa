import React from 'react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';
import { slide, scale } from '@/components/animations/MenuAnimations';
// styles
import styles from './navItem.module.scss';

interface NavItemProps {
  title: string;
  path: string;
  id: string;
  i: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: React.FC<NavItemProps> = ({ title, path, id, i, active, setActive }) => {
  return (
    <m.li
      className={` ${styles.nav_item}`}
      key={id}
      /* initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }} */
      custom={i}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <m.a
        className={styles.nav_link}
        onClick={() => setActive(false)}
        href={path}
        variants={scale}
        animate={active ? 'open' : 'closed'}
      >
        {title}
      </m.a>
    </m.li>
  );
};

export default NavItem;
