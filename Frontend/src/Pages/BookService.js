import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../utils/api'; // Axios instance for API calls

const BookService = () => {
  const { id } = useParams(); // Get service ID from the URL
  const [service, setService] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', contact: '', date: '' });
  const history = useHistory();

  useEffect(() => {
    // Fetch the service details based on the ID
    const fetchServiceDetails = async () => {
      try {
        const response = await api.get(`/services/${id}`);
        setService(response.data);
      } catch (err) {
        console.error('Error fetching service details:', err);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here, you would send the booking request to your backend
      // For now, we'll just log the details
      console.log('Booking details:', userDetails);

      // Redirect to a confirmation page or show a success message
      history.push('/booking-success');
    } catch (err) {
      console.error('Error during booking:', err);
    }
  };

  if (!service) return <div>Loading service details...</div>;

  return (
    <div className="booking-container">
      <h1>Book {service.name}</h1>
      <p>Category: {service.category}</p>
      <p>Description: {service.description}</p>
      <p>Price: ${service.price}</p>

      {/* Booking Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={userDetails.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Preferred Date:</label>
          <input
            type="date"
            name="date"
            value={userDetails.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookService;
