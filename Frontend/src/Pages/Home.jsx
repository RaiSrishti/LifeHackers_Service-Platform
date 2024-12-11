import React from 'react';
import './Home.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>One-Stop Solution for All Your Service Needs - Anytime, Anywhere!</h1>
        <p>Your All-in-One Service Platform
        Finding trusted professionals for maintenance and repair services is now effortless with our unified platform. Whether it's AC repair, electrical fixes, plumbing, carpentry, home cleaning, or pest control, our app bridges the gap between you and verified service providers.With intuitive features like GPS tracking, instant booking, secure payments, and real-time chat, we make life hassle-free by bringing services to your doorstep. 
        Tailored for both customers and professionals, our solution is efficient, reliable, and accessible. Experience seamless convenience for all your home and business service needs -anytime, anywhere!</p>
      </div>

      {/* Stats Section */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-value">Fix It All with Just a Tap</div>
          <p>of senior executives are excited or optimistic about AI's potential impact.</p>
        </div>
        <div className="stat-card">
          <div className="stat-value"> Clean Homes, Happy Lives </div>
          <p>believe AI's business impact will be more than or equal to that of smartphones.</p>
        </div>
        <div className="stat-card">
          <div className="stat-value">24/7 On-the-go Assistance </div>
          <p>Whether it’s an emergency AC repair or scheduled maintenance, our app ensures expert help at your convenience. Anytime, anywhere, we’ve got your back.</p>
        </div>
        <div className="stat-card">
          <div className="stat-value">Your Trusted Home Repair Hub </div>
          <p>Say goodbye to unverified services. Our platform guarantees certified professionals for your home appliances, repairs, and renovation needs. Reliable service is just a click away!</p>
        </div>
      </div>
      {/* Scrollable Cards Section */}
      <div className="info-section">
        <h2>Our Services</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Web Development</h3>
            <p>Building responsive and innovative websites for your business needs.</p>
          </div>
          <div className="info-card">
            <h3>AI Solutions</h3>
            <p>Custom AI solutions to enhance efficiency and decision-making.</p>
          </div>
          <div className="info-card">
            <h3>Digital Marketing</h3>
            <p>Grow your brand with cutting-edge digital marketing strategies.</p>
          </div>
          <div className="info-card">
            <h3>Consulting</h3>
            <p>Expert advice to align your business goals with modern technologies.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Service Platform. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Home;
