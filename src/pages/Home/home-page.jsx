import React from 'react';
import Navigation from '../../components/Navigation/navigation';
import splashPhoto from '../../images/engagement-photo-166.jpg';
import './home-page.scss';

const HomePage = () => {
  return (
      <div className="page home-page">
        <div className="content">
          <h1>Stephanie & Chris</h1>
          June 3, 2023  &nbsp; &#9829; &nbsp;Dearborn, Michigan
          <Navigation />
          <img src={splashPhoto} className="splash-image" alt="chris and stephanie"/>
        </div>

      </div>
  )
};

export default HomePage;