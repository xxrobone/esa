import React, { useState } from 'react';
import Image from 'next/image';
import { SiHomebridge } from 'react-icons/si';
import { MdOutlineLeaderboard } from 'react-icons/md';

// styles
import styles from './MenuBtn.module.scss';

const MenuBtn = ({ active, setActive }) => {
  /*  const [active, setActive] = useState(false) */

  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div className={styles.hamburger_wrapper} onClick={(e) => onClickHandler()}>
      <div className={styles.container}>
        <button>
          <Image
            src='/degaming.svg'
            alt='money'
            width={24}
            height={24}
            style={{ position: 'relative' }}
          />
        </button>
        <button className={styles.home}>
          <SiHomebridge />
        </button>
        <button>
          <MdOutlineLeaderboard />
        </button>
        <button className={styles.menu}>
          <div
            className={`${styles.hamburger} ${active ? styles.active : ''}`}
            id='hamburger'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuBtn;
