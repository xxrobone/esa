'use client';
import Section from '@/components/Section';
import Evo from '@/public/evolution.jpg';
import Unity from '@/public/unity.jpg';
import Fairplay from '@/public/fairplay.jpg';
import Lenis from '@studio-freight/lenis';

import { useEffect, useState } from 'react';

export default function SectionCollection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='w-full h-full relative z-20'>    
      <Section
        image={Evo}
        title='E-Sports Academy'
        desc='Esportskola för barn och unga med fokus på gemenskap, personlig utveckling och fair-play.'
        tag=''
      />        
      <Section
        image={Unity}
        title='Gemenskap'
        desc='Att e-sporta tillsammans hos oss på E-Sports Academy är ett utmärkt sätt att komma ut och träffa likasinnade och lära känna nya vänner.'
        tag=''
      />        
      <Section
        image={Fairplay}
        title='Fair-play'
        desc='Vi är alla olika, men hos oss kan du räkna med att bli behandlad med hänsyn och respekt oavsett vem du är.'
        tag=''
      />        
    </div>
  );
}
