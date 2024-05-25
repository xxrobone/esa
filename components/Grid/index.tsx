import React from 'react';
import styles from './Grid.module.scss';

type GridProps = {
  children: React.ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;