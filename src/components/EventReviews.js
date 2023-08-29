import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventReviews({ eventId }) {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events/${eventId}/reviews`)
      .then((response) => {
        console.log('Event Reviews:', response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event reviews:', error);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, [eventId]);
  
  return (
    <div>
      <h2>Event Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Reviewer</th>
            <th>Content</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.reviewer}</td>
              <td>{review.content}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/events/${eventId}/reviews/new`}>Leave a Review</Link>
      
    </div>
  );
}

export default EventReviews;


