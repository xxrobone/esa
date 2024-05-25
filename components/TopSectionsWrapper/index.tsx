'use client';
import Hero from '@/components/Section/Hero';
import ARENA from '@/public/arena.jpg';
import Lenis from '@studio-freight/lenis';

import { useEffect, useState } from 'react';

export default function TopSectionsWrapper() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='w-full h-fit md:h-full absolute left-0 top-0 right-0 z-20'>    
      <div className='relative'>
      <Hero
        image={ARENA}
        title='E-Sports Academy'
        desc='Esportskola för barn och unga med fokus på gemenskap, personlig utveckling och fair-play.'
        tag=''
      />        
     </div>
    </div>
  );
}
