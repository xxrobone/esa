'use client';
''

import React, { useContext, useRef, useEffect } from 'react';
import { CursorContext } from './CursorProvider';
import './style.scss';

const CustomCursor: React.FC = () => {
  const secondaryCursor = useRef<HTMLDivElement>(null); 
  const { size } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (secondaryCursor.current) {
        // Check if secondaryCursor.current is not null
        const { clientX, clientY } = event;
        const mouseX = clientX;
        const mouseY = clientY;

        secondaryCursor.current.style.transform = `translate3d(${
          mouseX - secondaryCursor.current.clientWidth / 2
        }px, ${mouseY - secondaryCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className={`secondary-cursor ${size}`} ref={secondaryCursor}></div>
    </div>
  );
};

export default CustomCursor;
