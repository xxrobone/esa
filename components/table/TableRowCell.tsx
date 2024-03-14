import React from 'react';
import styles from './table.module.scss'; // Import SCSS module

interface TableRowCellProps {
    align: 'left' | 'right';
    children: React.ReactNode;
}

const TableRowCell: React.FC<TableRowCellProps> = ({ children, align }) => {
  return <td className={`${styles['table-row-cell']} ${styles[align]}`}>{children}</td>;
};

export default TableRowCell;
