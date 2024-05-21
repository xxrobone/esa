import React from 'react';
import styles from './WaterDrop.module.scss';

const WaterDrop = () => {
  return (
    <div className={styles['wrapper']}>
      <div
        className={`${styles['wave_1 outer-shadow']} ${styles['outer-shadow']}`}
      >
        <div
          className={`${styles['inner-shadow']} ${styles['align-center']}`}
        ></div>
      </div>
      <div
        className={`${styles['wave_2']} ${styles['outer-shadow']} ${styles['align-center']}`}
      >
        <div
          className={`${styles['inner-shadow']} ${styles['align-center']}`}
        ></div>
      </div>
      <div
        className={`${styles['wave_3']} ${styles['outer-shadow']} ${styles['align-center']}`}
      >
        <div
          className={`${styles['inner-shadow']} ${styles['align-center']}`}
        ></div>
      </div>
      <div className={`${styles['drop']} ${styles['align-center']}`}></div>
    </div>
  );
};

export default WaterDrop;
