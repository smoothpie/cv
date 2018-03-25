import React from 'react';
import './Header.less';

const Header = () => (
  <div className="header">
    <h1>Hey, I'm Karina Kupriyanovich</h1>
    <h2>( = your new Junior Javascript Developer )</h2>
    <div className="header-info">
      <div className="header-info__contacts">
        <a href="mailto:kupriyanovichk72@gmail.com" target="_top"><span>kupriyanovichk72@gmail.com</span></a>
        <span>+375 29 391 02 78</span>
      </div>
      <div className="header-info__github">
        <div className="flipper">
          <div className="front">
            <a href="https://github.com/smoothpie/" target="_blank"><img className="header-info__github-img" src={require('../../../public/images/icons/github-logo.png')} /></a>
          </div>
          <div className="back">
            <a href="https://github.com/smoothpie/" target="_blank"><img className="header-info__github-img" src={require('../../../public/images/me.jpg')} /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header;
