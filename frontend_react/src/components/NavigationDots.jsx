/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app_navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`} 
          key={item + index}
          className="app_navigation-dot"
          style={active === item ? { backgroundColor: '#0fac6a' } : { }}
        />
      ))}
    </div>
  );
}

export default NavigationDots;