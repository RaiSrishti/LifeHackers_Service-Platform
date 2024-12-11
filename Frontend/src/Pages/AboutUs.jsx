import React from 'react';
import aboutUsImage1 from '../assets/images/about-us-image1.jpg';
import aboutUsImage2 from '../assets/images/about-us-image2.jpg';
import aboutUsImage3 from '../assets/images/about-us-image3.jpg';
import aboutUsImage4 from '../assets/images/about-us-image4.jpg';
import aboutUsImage5 from '../assets/images/about-us-image5.jpg';
import aboutUsImage6 from '../assets/images/about-us-image6.jpg';
import aboutUsImage7 from '../assets/images/about-us-image7.jpg';
import aboutUsImage8 from '../assets/images/about-us-image8.jpg';
import aboutUsImage9 from '../assets/images/about-us-image9.jpg';
import aboutUsImage10 from '../assets/images/about-us-image10.jpg';
import aboutUsImage11 from '../assets/images/about-us-image11.jpg';
import aboutUsImage12 from '../assets/images/about-us-image12.jpg';

import './AboutUs.css'; // Make sure you have the right CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          We are a team of professionals dedicated to providing excellent
          services to our clients. Our goal is to create innovative solutions
          that drive success.
        </p>
      </div>

      <div className="image-gallery">
        <div className="image-frame">
          <img src={aboutUsImage1} alt="Image 1" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage2} alt="Image 2" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage3} alt="Image 3" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage4} alt="Image 4" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage5} alt="Image 5" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage6} alt="Image 6" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage7} alt="Image 7" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage8} alt="Image 8" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage9} alt="Image 9" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage10} alt="Image 10" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage11} alt="Image 11" className="gallery-image" />
        </div>
        <div className="image-frame">
          <img src={aboutUsImage12} alt="Image 12" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
