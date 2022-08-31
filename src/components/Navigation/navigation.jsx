import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const expandedNav = (
  <ul className="expanded-nav">
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/wedding-information">WEDDING</Link>
    </li>
    <li>
      <Link to="/hotel-information">ACCOMODATIONS</Link>
    </li>
    <li>
      <Link to="/gallery">GALLERY</Link>
    </li>
    {/* <li>
      <Link to="/registry">REGISTRY</Link>
    </li> */}
  </ul>
);



const Navigation = () => {
  return (
    <nav className="main-nav">
      {expandedNav}
    </nav>
  )
};

export default Navigation;