import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './EventReviews.css'

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
      <h2 className='event-reviews-title'>Event Reviews</h2>
      <table>
        <thead>
          <tr>
            <th className='sub-title-1'>Reviewer</th>
            <th className='sub-title-2'>Comment</th>
            <th className='sub-title-3'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td className='reviewer-name'>{review.reviewer}</td>
              <td className='reviewer-comment'>{review.content}</td>
              <td className='reviewer-rating'>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className='leave-a-review-link' to={`/events/${eventId}/reviews/new`}>Leave a Review</Link>
    </div>
  );
}

export default EventReviews;
