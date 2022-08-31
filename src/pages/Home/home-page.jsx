import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';
import splashPhoto from '../../images/engagement-photo-166.jpg';
import './home-page.scss';

const HomePage = () => {
  return (
      <div className="page home-page">
        <Header />
        <div className="content">

          <Navigation />
          <img src={splashPhoto} className="splash-image" alt="Chris and Stephanie"/>
          <h1 className="story-header">Our Story</h1>
          <div>
            <p>
              Stephanie and Chris, both software engineers by training, met hanging out with their TD Ameritrade coworkers during and after work in the summer of 2016. In August, they went on their first date, to get breakfast-for-dinner at a Bob Evans. Since then, they've gone on vacations together to the San Francisco Bay Area, Seattle and Vancouver, Korea and Japan, Iceland, and Italy. The two got engaged on their 5-year anniversary in 2021, but with COVID backlogs decided to book a 2023 wedding to get the venue and vendors they wanted.
            </p>
            <p>
              In their free time, they enjoy playing board games together and watching movies and TV shows.
            </p>
          </div>
          <Footer />
        </div>

      </div>
  )
};

export default HomePage;