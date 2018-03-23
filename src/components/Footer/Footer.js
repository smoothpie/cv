import React from 'react';
import './Footer.less';

const Footer = () => (
  <div className="footer-container">
    <footer>
      <div className="footer-punchline">
        <span>Karina Kupriyanovich</span>
        <span>Your new Junior Javascript Developer.</span>
      </div>
      <div className="footer-contacts">
        <span>+375 29 391 02 78</span>
        <a href="mailto:kupriyanovichk72@gmail.com" target="_top"><span className="footer-contacts__email">kupriyanovichk72@gmail.com</span></a>
      </div>
    </footer>
  </div>
)

export default Footer;
