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
          <img src={splashPhoto} className="splash-image" alt="Chris and Stephanie"/>
          <h1 className="story-header">Our Story</h1>
          <div>
            Stephanie and Chris, both software engineers by training, met hanging out with their TD Ameritrade coworkers during and after work in the summer of 2016. In August, they went on their first date, to get breakfast-for-dinner at a Bob Evans. Since then, they've gone on vacations together to the San Francisco Bay Area, Seattle and Vancouver, Korea and Japan, Iceland, and Italy. The two got engaged on their 5-year anniversary in 2021, but with COVID backlogs decided to book a 2023 wedding to get the venue and vendors they wanted.
          </div>
        </div>

      </div>
  )
};

export default HomePage;