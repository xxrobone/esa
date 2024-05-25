'use client';
import React, { useState, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/navigation';
import styles from './Navbar.module.scss';

interface NavItemProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, url, icon, children }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown((prev) => !prev);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onTouchS = () => {
    setDropdown(true);
  };

  const onTouchE = () => {
    setDropdown(false);
  };

  // const { events } = useRouter();
  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  // useEffect(() => {
  //   events.on('routeChangeStart', closeMobileMenu);
  //   return () => {
  //     events.off('routeChangeStart', closeMobileMenu);
  //   };
  // }, [closeMobileMenu, events]);

  return (
    <li
      className={styles.nav_item}
      key={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchS}
      onTouchEnd={onTouchE}
    >
      <a href={url} onClick={closeMobileMenu} className={styles.nav_links}>
        {icon && <span className={styles.link_icon}>{icon}</span>}
        <span className={styles.link_title}>{title}</span>
      </a>
      {dropdown && children}
      {click && children}
    </li>
  );
};

export default NavItem;
