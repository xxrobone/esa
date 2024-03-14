import React from 'react';
import styles from './table.module.scss'; // Import SCSS module

interface TableHeadCellProps {
    align: 'left' | 'right';
    children: React.ReactNode;
}

const TableHeadCell: React.FC<TableHeadCellProps> = ({ children, align }) => {
  return <th className={`${styles['table-head-cell']} ${styles[align]}`}>{children}</th>;
};

export default TableHeadCell;
