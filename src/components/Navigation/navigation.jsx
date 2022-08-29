import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/wedding-information">WEDDING & RECEPTION</Link>
          </li>
          <li>
            <Link to="/hotel-information">ACCOMODATIONS</Link>
          </li>
          <li>
            <Link to="/registry">REGISTRY</Link>
          </li>
        </ul>
      </nav>
    )
};

export default Navigation;