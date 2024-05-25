'use client';
import React, { useState, useEffect } from 'react';
import { itemVariants, previews } from './data';

import Item from './Item';
import Preview from './Preview';
import './Preview.scss';

const PreviewWrapper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleMouseEnter = (index: number) => {
    if(index === 0) {
      setActiveIndex(1)
  }    
      else {
       setActiveIndex(index + 1)  
    }
    console.log(activeIndex)
  };

  const handleMouseLeave = () => {
    setActiveIndex(1);
  };



  return (
    <div className='container'>
      <div className='items'>
        {previews && previews.map((preview, index) => (
          <Item
            key={index}
            index={index + 1}
            preview={preview}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      {previews && previews.map((preview, index) => (
        <Preview
          key={index}
          preview={preview}
          variant={itemVariants[activeIndex]}
          isActive={activeIndex === index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};

export default PreviewWrapper;
