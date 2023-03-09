import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
  }, []);

  const testShort = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app_testimonial-item app_flex">
            <img 
              src={urlFor(testShort.imgurl)}
              alt="testimonials"
            />
            <div className="app_testimonials-content">
              <p className="p-text">
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4 className="bold-text">
                  {testShort.name}
                </h4>
                <h5 className="bold-text">
                  {testShort.company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app_testimonials-btns app_flex">
            <div className="app_flex" 
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
              >
                <HiChevronLeft />
            </div>
            <div className="app_flex" 
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
              >
                <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app_testimonials-brand app_flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{  duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img 
              src={urlFor(brand.imgUrl)} 
              alt={brand.name} 
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(Testimonial, 'app_testimonial'), 'testimonial', "app_primarybg");