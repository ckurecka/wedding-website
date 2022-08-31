import React from 'react';
import footerImage from '../../images/footer.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-component">
      <img src={footerImage} className="footer" alt="Love, Stephanie & Chris"></img>
    </div>
  )
};

export default Footer;