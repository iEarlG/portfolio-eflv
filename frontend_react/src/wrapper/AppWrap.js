import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div 
        id={idName}
        className={`app_container ${classNames}`}
    >
        <SocialMedia />
        <div className="app_wrapper app_flex">
            <Component />

            <div className="copyright">
                <p className="p-text">@2022 iEarl V</p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots 
            active={idName}
        />
    </div>
  );
}

export default AppWrap;