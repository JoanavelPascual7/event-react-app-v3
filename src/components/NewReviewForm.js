import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import '../CSS/Form.css'

function NewReviewForm() {
  const { id: eventIdFromUrl } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Use for navigation after submitting

  const [eventId, setEventId] = useState(eventIdFromUrl); // Set the initial event ID

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'eventId') {
      setEventId(value); // Update the event ID manually
    } else {
      setReview((prevReview) => ({
        ...prevReview,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting review:', review);
  
    // Convert rating to a number
    const ratingNumber = parseFloat(review.rating);
  
    // Make a POST request to create the new review
    const apiUrl = `${process.env.REACT_APP_API_URL}/events/${eventId}/reviews`;
  
    axios
      .post(apiUrl, { ...review, rating: ratingNumber, event_id: eventId }) // Send converted rating and event_id
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
        <label className="id">
          Event ID:
          <input
            type="text"
            name="eventId"
            value={eventId}
            onChange={handleChange}
          />
        </label>
        <label className="user">
          Reviewer:
          <input
            type="text"
            name="reviewer"
            value={review.reviewer}
            onChange={handleChange}
          />
        </label>

        <label className="comment">
          Content:
          <textarea
            name="content"
            value={review.content}
            onChange={handleChange}
          />
        </label>
        <label className="rating">
          Rating:
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleChange}
          />
        </label>
        <button className="button"  type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
