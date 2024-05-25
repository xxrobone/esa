import React from 'react';
import styles from './Grid.module.scss';
import Image from 'next/image';
import { SlideUp } from '../animations/reveal/SlideUp';

type GridItemProps = {
  image: string;
  title: string;
  description: string;
};

const GridItem: React.FC<GridItemProps> = ({ image, title, description }) => {
    return (
      <SlideUp>
      <div className={styles.gridItem}>
     {/*  <div className={styles.gridItem} style={{ backgroundImage: `url(${image})` }}> */}
          <div className={styles.bg}>
              <Image
                  alt={title}
                  src={image}
                  fill
                  className='object-cover object-center relative'                  
              />
        </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>            
      </SlideUp>
  );
};

export default GridItem;
