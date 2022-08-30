import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';

import splashPhoto from '../../images/engagement-photo-179.jpg';
import './venue-page.scss';

const VenuePage = () => {
  return (
      <div className=" page venue-page">
        <div className='content'>

          <Header />
          <Navigation />
          <img src={splashPhoto} className="splash-image" alt="chris and stephanie"/>
          <div>
            We invite you to celebrate our marriage:<br></br>
            Saturday, June 3, 2023<br></br>
            6 o'clock in the afternoon<br></br>
            <br></br>
            <div className="location">Lovett Hall</div>
            20900 Oakwood<br></br>
            Dearborn, MI 48124<br></br>
          </div>
          <Footer />
        </div>
      </div>
  )
};

export default VenuePage;