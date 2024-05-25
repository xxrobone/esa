import Magnetic from '../magnetic/magnetic';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FiLinkedin, FiGithub, FiCodepen, FiMail } from 'react-icons/fi';

import './socials.scss';

const Socials = () => {
  return (
    <motion.div
      className='socials'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className='social'>
        <Magnetic>
          <Link
            data-icon='email'
            href='mailto:robert@cogwork.se'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiMail className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='linkedin'
            href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiLinkedin className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='github'
            href='https://github.com/robonexx'
            target='_blank'
            rel='noreferrer'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiGithub className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='codepen'
            href='https://codepen.io/robertwagar/pens/public'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconContext.Provider value={{ style: { strokeWidth: '2px' } }}>
              <FiCodepen className='soc-item soc-icon' />
            </IconContext.Provider>
          </Link>
        </Magnetic>
      </div>
    </motion.div>
  );
};

export default Socials;
