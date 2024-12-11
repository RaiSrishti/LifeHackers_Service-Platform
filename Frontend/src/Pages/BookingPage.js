import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value); // Update the booking date
  };

  const handleBookNow = () => {
    if (bookingDate) {
      // Store booking in localStorage
      localStorage.setItem('bookingDate', bookingDate);

      setIsBooked(true); // Mark as booked
      alert('Booking Successful!');
      navigate('/bookings'); // Redirect to the bookings page
    } else {
      alert('Please select a booking date first.');
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Service</h1>

      {/* Calendar input for booking date */}
      <div className="booking-date">
        <label htmlFor="bookingDate">Select Booking Date: </label>
        <input
          type="date"
          id="bookingDate"
          value={bookingDate}
          onChange={handleBookingDateChange}
        />
      </div>

      {/* Final Book button */}
      <button className="book-now-btn" onClick={handleBookNow}>
        Final Book
      </button>
    </div>
  );
};

export default BookingPage;
