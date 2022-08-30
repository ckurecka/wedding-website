import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';

const HotelPage = () => {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Navigation />
        We are currently trying to decide which hotel we would like to choose and will update this page as soon as we have more information!
        <Footer />      
      </div>
    </div>
  )
};

export default HotelPage;