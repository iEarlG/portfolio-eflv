import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app_social">
      <div>
        <a href="https://github.com/iEarlG" target="_blank" rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/itsmearlofficial/" target="_blank" rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://twitter.com/itseaaarloffcl" target="_blank" rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

    </div>
  );
}

export default SocialMedia;