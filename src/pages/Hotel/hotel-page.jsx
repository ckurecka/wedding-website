import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';
import splashPhoto from '../../images/engagement-photo-179.jpg';

const HotelPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Navigation />
        <img src={splashPhoto} className="splash-image" alt="chris and stephanie" />
        We are currently trying to decide which hotel we would like to choose and will update this page as soon as we have more information!
        <Footer />
      </div>
    </div>
  )
};

export default HotelPage;