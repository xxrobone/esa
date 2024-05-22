'use client'
import Section from '@/components/Section';
import IMG from '@/public/images/Hemsida.jpeg';
import IMG2 from '@/public/images/production.png';
import IMG3 from '@/public/images/shiro.gif';
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
    <main className='w-full h-full sections'>
       <Section
        image={IMG2}
        title='Awesome adventure'
        desc='some description of the work'
        tag='written work'
      />
      <Section
        image={IMG}
        title='Defining peace'
        desc='some description of the work'
        tag='works for stage'
      />     
      <Section
        image={IMG3}
        title='Shiro'
        desc='some description of the work'
        tag='Works for film'
      />
    </main>
  );
}
