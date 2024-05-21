'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import GridLines from '@/components/Gridlines';
import BgEllipse from '@/components/bgellipse/BgEllipse';
import Button from '@/components/Button';
import CodeInMotion from '@/components/CodeInMotion';
import TableComponent from '@/components/table';
import StackedCards from '@/components/StackedCards';
import mockData from '@/components/table/mockData';
import { AnimatedText } from '@/components/animations/AnimatedText';
import Circle from '@/components/animations/Circle';
import AnimatedCraze from '@/components/AnimationCraze';
import TheDrop from '@/components/AnimationCraze/TheDrop';
import WaterDrop from '@/components/WaterDrop';

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
      {/* { <section className={styles.section1}>
        <TheDrop />
        <AnimatedCraze />
        <WaterDrop />
      </section>} */}
      <GridLines />
      <section className={styles.section}>
        <div className={styles.description}>
          {/*  <Image
          className={styles.logo}
          src='/walkingcode.gif'
          alt='Degaming Logo'
          width={120}
          height={120}
          priority
        /> */}
          <p
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => setSize('small')}
          >
            LIA Presentation
          </p>
          <div
            onMouseEnter={() => {
              setSize('bordered');
            }}
            onMouseLeave={() => setSize('small')}
          >
            <a href='/' target='_blank' rel='noopener noreferrer'>
              By <h2 className={styles.sub}>Robert Wägar FEA20ST</h2>
            </a>
          </div>
        </div>
        {/*  <div className={styles.buttons}>
          <Button theme='outline' background='' color='' onClick={handleClick}>
            Play Now
          </Button>
          <Button background=''>Documentation</Button>
        </div> */}
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
            <AnimatedText text='DeGaming' className={styles.title} el='h1' />
            {/*  <h1 className={styles.title}>DeGaming</h1> */}
          </div>
          <p>
            {' '}
            DeGaming is positioned at the vanguard of blockchain-integrated
            gambling solutions. They provide an interactive, safe, and
            transparent space for their gaming clients to experience the future
            of iGaming
          </p>
        </div>

        <div className={styles.grid}>
          <Circle />
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
              they`re an online platform. Pioneering a new ecnomic model for the
              industry.
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
            <p>Learn about DeGaming!</p>
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
              Explore Web3 Casino Bankroll Liquidity Provider And Seize The
              Opportunity To Grow Your Investments In An Exciting, Evolving
              Market.{' '}
            </p>
          </a>

          <a
            href='https://www.wagmicasino.io/'
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
              Instantly deploy your next Casino and start growing your own
              market! with our customizable SDK
              <br />
              <br />
              Here you can see WagmiCasino as an live example
            </p>
          </a>
        </div>
      </section>
      <div className='bg'></div>
      <BgEllipse />
      <section className={styles.section}>
        <TableComponent gameplayLogs={mockData} />
      </section>
      <section className={styles.section}>
        <StackedCards />
      </section>
    </main>
  );
}
