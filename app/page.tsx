'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import GridLines from '@/components/Gridlines';
import BgEllipse from '@/components/bgellipse/BgEllipse';
import Button from '@/components/Button';
import CodeInMotion from '@/components/CodeInMotion';

export default function Home() {
  const [showMoney, setShowMoney] = useState(false);
  const { setSize } = useContext(CursorContext);

  const handleClick = () => {
    setShowMoney(true);
    setTimeout(() => {
      setShowMoney(false);
    }, 3000);
  };
  return (
    <main className={styles.main}>
      <GridLines />
      <div className={styles.description}>
     {/*  <Image
            className={styles.logo}
            src='/walkingcode.gif'
            alt='Degaming Logo'
            width={120}
            height={120}
          priority
          
          onMouseEnter={() => {
            setSize('large');
            console.log('regular');
          }}
          onMouseLeave={() => setSize('small')}
          /> */}
      {/*   <p
         
        >
          Pioneering Web3 Casino Gaming
        </p> */}
        <div
          onMouseEnter={() => {
            setSize('bordered');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <a href='/' target='_blank' rel='noopener noreferrer'>
            By <h2 className={styles.sub}>Rupert von Kodar</h2>
          </a>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button theme='outline' background='' color='' onClick={handleClick}>
          Play Now
        </Button>
        <Button background=''>Documentation</Button>
      </div>
      {showMoney && (
        <Image
          src='/money.gif'
          alt='money'
          width={100}
          height={200}
          style={{ position: 'absolute', left: '10vw', top: '50vh' }}
        />
      )}

      <div
        className={styles.center}
        onMouseEnter={() => {
          setSize('xlarge');
          console.log('xlarge');
        }}
        onMouseLeave={() => setSize('small')}
      >
        <div className={styles.headline}>
          <Image
            className={styles.logo}
            src='/social_1.png'
            alt='Degaming Logo'
            width={120}
            height={120}
            priority
          />
          <h1 className={styles.title}>Code in Motion</h1>
        </div>
        <p>
          {' '}
          DeGaming is positioned at the vanguard of blockchain-integrated
          gambling solutions. We provide an interactive, safe, and transparent
          space for our gaming clients to experience the future of iGaming
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href='https://degaming.io'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => {
            setSize('mask');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <h2>
            DeGaming <span>-&gt;</span>
          </h2>
          <p>
            {' '}
            We`re an online platform. We`re pioneering a new ecnomic model for
            the industry.
          </p>
        </a>

        <a
          href='#'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => {
            setSize('degaming');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Learn about our mission!</p>
        </a>

        <a
          href='https://gls-development.vercel.app/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => {
            setSize('crypto');
            console.log('mask3');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <h2>
            GLS<span>-&gt;</span>
          </h2>
          <p>
            Explore Web3 Casino Bankrolls And Seize The Opportunity To Grow Your
            Investments In An Exciting, Evolving Market.{' '}
          </p>
        </a>

        <a
          href='#'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => {
            setSize('crypto2');
            console.log('mask4');
          }}
          onMouseLeave={() => setSize('small')}
        >
          <h2>
            Deploy a Casino <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your next Casino and start growing your own market!
            with our customizable SDK
          </p>
        </a>
      </div>
      <div className='bg'></div>
      <BgEllipse />
      <section>
        
        </section>
      <section>

        </section>
    </main>
  );
}
