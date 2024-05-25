import React, { useState, useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SiHomebridge } from 'react-icons/si';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { CursorContext } from '@/components/Cursor/CursorProvider';

// styles
import styles from './MenuBtn.module.scss';

const MenuBtn = ({ active, setActive }) => {
  /*  const [active, setActive] = useState(false) */
  const { setSize } = useContext(CursorContext);

  const menuRef = useRef();

  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.scrollY;

      const handleScroll = () => {
        let currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
          menuRef.current.classList.add(`${styles.hamburger_wrapper}`);
          menuRef.current.classList.remove(`${styles.hide}`);
        } else {
          menuRef.current.classList.add(`${styles.hide}`);
          menuRef.current.classList.remove(`${styles.hamburger_wrapper}`);
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
    <div className={styles.hamburger_wrapper} ref={menuRef}>
      <div className={styles.container}>
        <button
          className={styles.logoBtn}
          onMouseEnter={() => {
            setSize('regular');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <Image
            src='/cogwork.png'
            alt='money'
            width={24}
            height={24}
            style={{ position: 'relative' }}
          />
        </button>
        <div
          className={
            active ? `${styles.home}` : `${styles.home} ${styles.active}`
          }
          onMouseEnter={() => {
            setSize('large');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <button className={styles.homeBtn}>
            <SiHomebridge />
          </button>
          {active ? (
            ''
          ) : (
            <h2 className={active ? styles.notActive : styles.text}>Home</h2>
          )}
        </div>
        <button
          className={styles.listBtn}
          onMouseEnter={() => {
            setSize('mask-large');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <MdOutlineLeaderboard />
        </button>
        <div
          className={
            active ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
          onMouseEnter={() => {
            setSize('regular-purple');
          }}
          onMouseLeave={() => setSize('small')}
        >
          {active ? (
            <h2 className={active ? styles.text : styles.notActive}>Menu</h2>
          ) : (
            ''
          )}
          <button className={styles.menuBtn} onClick={(e) => onClickHandler()}>
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
    </div>
  );
};

export default MenuBtn;
