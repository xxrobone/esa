'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef, ReactNode } from 'react';

type SectionProps = {
  image?: StaticImageData;
  title: string;
  desc: string;
  children: ReactNode;
};

const SectionWrapper = ({ image, title, desc, children }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section className='relative h-screen overflow-hidden' ref={secRef}>
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/30 z-10'></div>
        {image ? (
          <Image
            alt={title}
            src={image}
            fill
            className='object-cover object-center'
          />
        ) : (
          ''
        )}
      </motion.div>
      <div className='flex flex-col gap-4 p-24'>
        <h2 className='font-branding text-4xl'>{title}</h2>
        <p className='font-primary max-w-[500px]'>{desc}</p>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
