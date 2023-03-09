import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  }

  return (
    <>
      <h2 className="head-text">
        If your ship doesn’t come in, <br /> swim out to meet it!
      </h2>
      <div className="app_footer-cards">
        <div className="app_footer-card">
          <img 
            src={images.email} 
            alt="email" 
          />
          <a href="mailto:earlvillapaz1@gmail.com" className="p-text">
            earlvillapaz1@gmail.com
          </a>
        </div>
        <div className="app_footer-card">
          <img 
            src={images.mobile} 
            alt="mobile" 
          />
            <a href="tel: +63(977)422-7996" className="p-text">
              +63(977)422-7996
            </a>
        </div>
      </div>

      {!isFormSubmitted ? 
        <div className="app_footer-form app_flex">
          <div className="app_flex">
            <input 
              type="text"
              placeholder="Your Name"
              className="p-text"
              name="name"
              required="Please enter your name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app_flex">
            <input 
              type="email"
              placeholder="Your Email"
              className="p-text"
              name="email"
              required="Please enter your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea 
              name="message"
              value={message} 
              placeholder="Project in mind"
              className="p-text"
              required="Please enter your Project"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >
            {loading ? 'Sending Message' : 'Send Message'}
          </button>
        </div>
      : <div className="head-text">
          Thankyou for getting in touch!
        </div>
      }
    </>
  );
}

export default AppWrap(MotionWrap(Footer, 'app_footer'), 'contact', "app_whitebg");