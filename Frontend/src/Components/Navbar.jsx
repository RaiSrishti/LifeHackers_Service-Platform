import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/bookings">Bookings</Link></li> {/* New link for Bookings */}
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/contact-info">Contact Info</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
