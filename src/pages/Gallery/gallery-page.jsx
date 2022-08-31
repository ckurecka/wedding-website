import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';
import image1 from '../../images/gallery/engagement-photo-217.jpg';
import image2 from '../../images/gallery/engagement-photo-186.jpg';
import image3 from '../../images/gallery/engagement-photo-162.jpg';
import image4 from '../../images/gallery/engagement-photo-48.jpg';
import image5 from '../../images/gallery/engagement-photo-21.jpg';
import image6 from '../../images/gallery/engagement-photo-20.jpg';

import image7 from '../../images/gallery/engagement-photo-259.jpg';
import image8 from '../../images/gallery/engagement-photo-236.jpg';
import image9 from '../../images/gallery/engagement-photo-211.jpg';
import image10 from '../../images/gallery/engagement-photo-142.jpg';
import image11 from '../../images/gallery/engagement-photo-14.jpg';
import image12 from '../../images/gallery/engagement-photo-1.jpg';
import './gallery-page.scss';

const GalleryPage = () => {
  return (
    <div className="page gallery-page">
      <Header />
      <div className="content">
        <Navigation />
        
        <p>Here are a few of our favorite engagement photos from our wonderful photographer <a href="https://www.jenniferborisphotography.com/" target="_blank"
            rel="noopener noreferrer">Jennifer Boris!</a></p>
        <div className="photos">
          <img src={image1} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image2} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image3} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image4} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image5} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image6} className="gallery-image" alt="Chris and Stephanie" />

          <img src={image7} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image8} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image9} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image10} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image11} className="gallery-image" alt="Chris and Stephanie" />
          <img src={image12} className="gallery-image" alt="Chris and Stephanie" />
        </div>
        <Footer />
      </div>
    </div>
  )
};

export default GalleryPage;