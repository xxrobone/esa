'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';

const Card = ({
  i,
  title,
  description,
  src,
  bg,
  progress,
  range,
  targetScale,
}) => {
  const [randomAngle, setRandomAngle] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Generate a random angle between -3 and 3 degrees
  useEffect(() => {
    // Generate a random angle between -3 and 3 degrees
    const maxAngle = 1.5;
    let angle = Math.random() * maxAngle * 2 - maxAngle;

    // Adjust angle based on card index
    if (i % 2 === 0) {
      // Even-indexed card, tilt left
      angle = Math.abs(angle) * -1;
    } else {
      // Odd-indexed card, tilt right
      angle = Math.abs(angle);
    }

    setRandomAngle(angle);
  }, [i]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          background: bg,
          scale,
          top: `calc(-5vh + ${i * 5}px)`,
          rotate: randomAngle,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`${src}`} alt='image' />
            </motion.div>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
