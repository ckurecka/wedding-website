import React from 'react';
import Navigation from '../../components/Navigation/navigation';

import splashPhoto from '../../images/engagement-photo-179.jpg';
import './venue-page.scss';

const VenuePage = () => {
  return (
      <div className=" page venue-page">
        <div className='content'>


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


        
        
        </div>
      </div>
  )
};

export default VenuePage;