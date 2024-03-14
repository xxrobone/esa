import React from 'react';
import './Hero.scss';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
  imagePosition?: 'left' | 'right' | 'background';
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
  imagePosition = 'left',
}) => {
  return (
    <div className={`hero-banner ${imagePosition}`}>
      {imagePosition !== 'background' && (
        <div className='image-container'>
          <img src={imageSrc} alt='Hero' className='hero-image' />
        </div>
      )}
      <div className='hero-content'>
        <h1 className='title'>{title}</h1>
        <p className='subtitle'>{subtitle}</p>
        <a href={ctaLink} className='cta'>
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
