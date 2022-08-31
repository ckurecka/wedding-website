import React from 'react';
import headerImage from '../../images/header.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header-component">
      <div className="art"></div>
      <img src={headerImage} className="header" alt="Stephanie & Chris"></img>
    </div>
  )
};

export default Header;