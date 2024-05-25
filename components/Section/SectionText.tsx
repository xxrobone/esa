'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

type SectionProps = {
  title: string;
  desc: string;
  desc2?: string;
  desc3?: string;
  tag: string;
};

const Section = ({ title, desc, desc2, desc3, tag }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section
      className='relative h-fit overflow-hidden bg-purple-500 p-56 sm:py-10 sm:px-8 sm:w-full w-2/3 mx-auto'
      ref={secRef}
    >
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/30 z-10'></div>
      </motion.div>
      <div className='flex flex-col gap-4 '>
        <span className='uppercase text-xs'>{tag}</span>
        <h2 className='font-branding text-6xl'>{title}</h2>
        <p className='font-primary text-xl max-w-[50'>{desc}</p>
        {desc2 ? <p className='font-primary text-xl max-w-[50'>{desc2}</p> : ''}
        {desc3 ? <p className='font-primary text-xl max-w-[50'>{desc3}</p> : ''}
      </div>
    </section>
  );
};

export default Section;
