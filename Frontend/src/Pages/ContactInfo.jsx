import React from 'react';
import './ContactInfo.css'; // Import the CSS file

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="contact-info">
        <h2>Head Office - Bengaluru</h2>
        <div className="map-container">
          {/* Replace with your actual map embed code */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.095187256453!2d77.59657852936727!3d13.032111999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e2d%3A0x82c2b7490e39e6a5!2s2nd%20Floor%2C%201st%20Cross%20Rd%2C%20KHB%20Colony%2C%20Gandhi%20Nagar%2C%20Yelahanka%2C%20Bengaluru%2C%20India!5e0!3m2!1sen!2sin!4v1697038624874!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-details">
          <p>2nd Floor, 1st Cross Rd, KHB Colony, Gandhi Nagar, Yelahanka, Bengaluru, India</p>
          <p>info@lifehackers.com, lifehackres@gmail.com</p>
          <p>+91 74847 37474</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Feel free to reach out using the details below.</p>
        <form>
          <div>
            <input type="text" placeholder="Your Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>
          <div>
            <input type="tel" placeholder="Phone Number*" required />
            <input type="email" placeholder="Email*" required />
          </div>
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;