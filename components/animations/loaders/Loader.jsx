import React, { useCallback, useEffect, useState } from 'react';
import anime from 'animejs';
import './robsvg.scss';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const Animate = useCallback(() => {
    const loader = anime.timeline({
      targets: '.intro',
      duration: 1500,
      easing: 'easeOutSine',
    });
    
    loader
      .add({
        targets: '.loader',
        opacity: [0, 1],
        width: ['0', '20vw'],
        duration: 600,
        delay: 100,
        innerHTML: [0, 100 + '%'],
        round: 10,
      })
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 1500);
    Animate();
    return () => clearTimeout(timeOut);
  }, [Animate]);

  return (
    <div className='loader'>
     <span>0</span>
    </div>
  );
};

export default Loader;


