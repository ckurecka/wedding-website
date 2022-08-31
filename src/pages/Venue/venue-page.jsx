import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';

import splashPhoto from '../../images/lovett-hall.jpg';
import './venue-page.scss';

const VenuePage = () => {
  return (
    <div className="page venue-page">
      <Header />
      <div className='content'>
        <Navigation />
        <img src={splashPhoto} className="splash-image" alt="Lovett Hall" />
        <div className="invite">
          We invite you to celebrate our marriage:<br></br>
          Saturday, June 3, 2023<br></br>
          6 o'clock in the afternoon<br></br>
          <br></br>
          <a
            href="https://www.google.com/maps/place/Lovett+Hall/@42.3048802,-83.2327092,15z/data=!4m5!3m4!1s0x0:0x38dfde2d63759d45!8m2!3d42.3048802!4d-83.2327092"
            className="location"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lovett Hall
          </a>
          20900 Oakwood<br></br>
          Dearborn, MI 48124<br></br>

        </div>
        <Footer />
      </div>
    </div>
  )
};

export default VenuePage;