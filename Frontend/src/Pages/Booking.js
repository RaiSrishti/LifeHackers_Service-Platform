import React, { useState, useEffect } from 'react';

const Bookings = () => {
  const [bookingDate, setBookingDate] = useState(null);

  useEffect(() => {
    // Retrieve the stored booking date from localStorage
    const storedBookingDate = localStorage.getItem('bookingDate');
    if (storedBookingDate) {
      setBookingDate(storedBookingDate); // Set the booking date if it exists
    }
  }, []);

  return (
    <div className="bookings-container">
      <h1>Your Bookings</h1>

      {bookingDate ? (
        <p>Your booking is confirmed for {bookingDate}.</p>
      ) : (
        <p>No bookings made yet.</p>
      )}
    </div>
  );
};

export default Bookings;
