'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
import { AnimatedText } from '../animations/AnimatedText';
import Button from '../Button';

type SectionProps = {
  image?: StaticImageData;
  title: string;
  desc: string;
  tag: string;
};

const Hero = ({ image, title, desc, tag }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section className='relative h-[600px] md:h-screen overflow-hidden' ref={secRef}>
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/70 z-10'></div>
        {image ? (
          <Image
            alt={title}
            src={image}
            fill
            className='object-cover object-bottom'
          />
        ) : (
          ''
        )}
      </motion.div>
      <div className='flex flex-col gap-4 md:p-64 px-8 py-40'>
              <span className='uppercase text-xs'>{tag}</span>
              <AnimatedText
                text={title.toUpperCase()}
                  el='h1'
                  className='title2'
              />
              <p className='font-primary max-w-[700px] text-xl md:text-2xl'>{desc}</p>
              <Button theme='outlined'>Om Oss</Button>
      </div>
    </section>
  );
};

export default Hero;
