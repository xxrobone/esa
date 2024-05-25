'use client';
import React, { useState, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/router';
import styles from './DropDown.module.scss';

interface DropDownItemProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ title, url, icon, children }) => {
  const [click, setClick] = useState(false);

  // const { events } = useRouter();

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  // using useEffect to navigate from nav to a new page
  // useEffect(() => {
  //   events.on('routeChangeStart', closeMobileMenu);
  //   return () => {
  //     events.off('routeChangeStart', closeMobileMenu);
  //   };
  // }, [closeMobileMenu, events]);

  return (
    <li key={title} className={styles.dropdown_item}>
      <a href={url} onClick={closeMobileMenu} className={styles.dropdown_link}>
        <span className={styles.link_icon}>{icon}</span>
        <span className={styles.link_title}>{title}</span>
      </a>
      {click && children}
    </li>
  );
};

export default DropDownItem;
