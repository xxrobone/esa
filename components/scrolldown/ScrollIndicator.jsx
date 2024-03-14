import React from 'react';
import styles from './scrolldownindicator.module.scss';

const ScrollIndicator = () => {
  return (
    <div className={styles['top-scroll-wrapper']}>
      <div className={styles['top-scroll-text']}>
        <span className={styles['top-scroll-txtIn']}>scroll</span>
      </div>
      <div className={styles['top-scroll-line']}>
        <div className={styles['top-scroll-line-in']}></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
