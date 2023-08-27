import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function NewReviewForm() {
  const { id: eventId } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Use for navigation after submitting

  const [review, setReview] = useState({
    reviewer: '',
    title: '',
    content: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to create the new review
    axios
      .post(`${process.env.REACT_APP_API_URL}/events/${eventId}/reviews`, review)
      .then((response) => {
        console.log('Review Created:', response.data);
        // Navigate back to the event details page after successful creation
        navigate(`/events/${eventId}`);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="new-review-form">
      <h2>Create New Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Reviewer:
          <input
            type="text"
            name="reviewer"
            value={review.reviewer}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={review.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={review.content}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
