import React from 'react';
import './Preview.scss'

interface ItemProps {
  index: number;
  preview: {
    title: string;
    img: string;
    tags: string;
    desc: string;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Item: React.FC<ItemProps> = ({ preview, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className='item'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p>{preview.title}</p>
    </div>
  );
};

export default Item;
