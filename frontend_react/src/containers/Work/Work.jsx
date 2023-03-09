import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity:  1 })
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout (() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if(item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <>
      <h2 className="head-text"> Simple but Attractive 
        <span> Portfolios</span> <br /> comes with
        <span> Good Clients</span>
      </h2>

      <div className="app_work-filter">
        {['UI/UX', 'Web Apps', 'Mobile Apps', 'React JS', 'All'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app_work-filter-item app_flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app_work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app_work-item app_flex"
            key={index}>
              <div className="app_work-img app_flex">
                <img 
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app_work-hover app_flex"
                >
                  <a 
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25, }}
                      className="app_flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a 
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25, }}
                      className="app_flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app_work-content app_flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" 
                  style={{ marginTop: 10 }}
                  >
                    {work.description}
                </p>
                <div className="app_work-tag app_flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(MotionWrap(Work, 'app_work'), 'work', "app_primarybg");