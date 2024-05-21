'use client';
import React, { useContext } from 'react';
import styles from './table.module.scss';
import { CursorContext } from '@/components/Cursor/CursorProvider';

interface TableRowCellProps {
  align: 'left' | 'right';
  children: React.ReactNode;
  payoutAmount?: number;
}

const TableRowCell: React.FC<TableRowCellProps> = ({
  children,
  align,
  payoutAmount,
}) => {
  const { setSize } = useContext(CursorContext);
  let cellStyle = {}; // Default empty style

  if (payoutAmount !== undefined) {
    cellStyle = {
      color: payoutAmount > 0 ? '#07FFBB' : '#f36e67',
      filter: payoutAmount > 0 ? 'drop-shadow(1px 1px 5px #07ffbb80)' : '',
    };
  }

  return (
    <td
      className={`${styles['table-row-cell']} ${styles[align]}`}
      style={cellStyle}
      onMouseEnter={() => {
        setSize('bordered-table');
      }}
      onMouseLeave={() => setSize('small')}
    >
      {children}
    </td>
  );
};

export default TableRowCell;
