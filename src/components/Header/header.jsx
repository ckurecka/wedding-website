import React from 'react';
import headerImage from '../../images/header.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header-component">
      <img src={headerImage} className="header"></img>
    </div>
  )
};

export default Header;