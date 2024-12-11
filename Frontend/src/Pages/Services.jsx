import React, { useState, useEffect } from 'react';
import './Services.css'; // Ensure you have the correct CSS file linked
import api from '../utils/api'; // Axios instance for API calls
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [availability, setAvailability] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchServices();
  }, [category, minPrice, maxPrice, availability]);

  const fetchServices = async () => {
    try {
      const filters = {
        category,
        min_price: minPrice ? parseFloat(minPrice) : undefined,
        max_price: maxPrice ? parseFloat(maxPrice) : undefined,
        availability,
      };
      const response = await api.post('/services/search', filters);
      setServices(response.data);
    } catch (err) {
      console.error('Error fetching services:', err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minPrice') setMinPrice(value);
    if (name === 'maxPrice') setMaxPrice(value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.checked);
  };

  const handleBookNowClick = (id) => {
    navigate(`/book/${id}`); // Navigate to the booking page with the service ID
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      {/* Navigation Bar */}
      <nav>
        <li>
          <a href="#">Services</a>
          <ul className="dropdown">
            <li>
              <a href="#">Home Maintenance Services</a>
              <ul className="sub-dropdown">
                <li>Plumbing: Leak repair, pipe installations, drain cleaning, water heater repair.</li>
                <li>Electricians: Electrical wiring, socket installations, lighting setups, fault repairs.</li>
                <li>Carpentry: Furniture making, door and window installations, repairs, woodwork.</li>
                <li>Home Appliances Repair: Refrigerator, washing machine, microwave, air conditioner repair.</li>
                <li>AC Technicians: Installation, maintenance, repair, cleaning.</li>
              </ul>
            </li>
            {/* Other categories */}
          </ul>
        </li>

        {/* Search and Filter Section */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select value={category} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Pest Control">Pest Control</option>
          </select>
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={minPrice}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handlePriceChange}
          />
          <label>
            Available Only
            <input
              type="checkbox"
              checked={availability}
              onChange={handleAvailabilityChange}
            />
          </label>
          <button className="search-btn" onClick={fetchServices}>
            Search
          </button>
        </div>
      </nav>

      {/* Services Section */}
      <h1>Our Services</h1>
      <ul className="services-list">
        {filteredServices.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>Category: {service.category}</p>
            <p>Description: {service.description}</p>
            <p>Price: ${service.price}</p>
            <p>Availability: {service.availability ? 'Available' : 'Not Available'}</p>
            {/* Book Now Button */}
            <button className="book-now-btn" onClick={() => handleBookNowClick(service.id)}>
              Book Now
            </button>
          </li>
        ))}
      </ul>

      <p>
        Offering efficient, reliable, and accessible maintenance services. From electrical work to plumbing, AC repair to pest control, our expert professionals are just a click away for all your home and business needs.
      </p>
      <img src="https://img3.goodfon.com/wallpaper/nbig/a/14/tables-wood-plumbing-wrench.jpg" alt="Services" />
    </div>
  );
};

export default Services;
