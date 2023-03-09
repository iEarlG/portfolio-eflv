import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app_header app_flex">
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app_header-info"
      >
        <div className="app_header-badge">
          <div className="badge-cmp app_flex">
            <span>🤙</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">EARL</h1>
            </div>
          </div>
          <div className="tag-cmp app_flex">
            <p className="p-text">Mobile and Web Developer</p>
            <p className="p-text">Freelance</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app_header-img"
      >
        <img 
          src={images.primaryProfile}
          alt="profile_bg" 
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header-circles"
      >
        {[images.tailwind, images.react, images.html].map((circle, index) => (
          <div className="circle-cmp app_flex" 
            key={`circle-${index}`}
          >
            <img 
              src={circle}
              alt="profile_bg" 
            />
            </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');