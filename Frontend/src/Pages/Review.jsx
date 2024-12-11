import React, { useState } from 'react';
import './Review.css'; // Importing CSS for styling

const ReviewPage = () => {
  // Sample reviews data including customer name, photo URL, rating, and comment
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", photo: "https://www.bwillcreative.com/wp-content/uploads/2023/03/how-to-make-a-passport-size-photo-in-photoshop-33.jpg", rating: 4, comment: "Great service!" },
    { id: 2, name: "Jane Smith", photo: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg", rating: 5, comment: "Very satisfied with the product." },
    { id: 3, name: "Robert Brown", photo: "https://i.pinimg.com/736x/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg", rating: 3, comment: "Good, but there is room for improvement." },
  ]);

  // Handle new review submission
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-page">
      <h1>Customer Reviews</h1>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-header">
              <img src={review.photo} alt={review.name} className="review-photo" />
              <div className="review-name">{review.name}</div>
            </div>
            <div className="review-rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < review.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <h2>Submit Your Review</h2>
      <ReviewForm addReview={addReview} />
    </div>
  );
};

const ReviewForm = ({ addReview }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { id: Date.now(), name, photo, rating, comment };
    addReview(newReview);
    setRating(5); // Reset rating to default after submission
    setComment(''); // Reset comment input field
    setName(''); // Reset name field after submission
    setPhoto(''); // Reset photo URL field
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
      </label>

      <label>
        Photo URL:
        <input
          type="url"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Your Photo URL"
          required
        />
      </label>

      <label>
        Rating:
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? 'filled' : ''}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </label>

      <label>
        Review:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          required
        />
      </label>
      <button type="submit" className="submit-btn">Submit Review</button>
    </form>
  );
};

export default ReviewPage;
