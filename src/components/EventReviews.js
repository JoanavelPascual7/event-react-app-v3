import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../CSS/EventReviews.css'
import Review from './Review'; 

function EventReviews({ eventId }) {
  const [reviews, setReviews] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); 

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

  // Function to toggle the sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  // Sort the reviews based on the selected sorting order
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.rating - b.rating;
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <div>
      <h2 className='event-reviews-title'>Event Reviews</h2>
      <div className='sort-button'>
        <button onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? 'Sort by Highest Rating' : 'Sort by Lowest Rating'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='sub-title-1'>Reviewer</th>
            <th className='sub-title-2'>Comment</th>
            <th className='sub-title-3'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {sortedReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </tbody>
      </table>
      <Link className='leave-a-review-link' to={`/events/${eventId}/reviews/new`}>Leave a Review</Link>
    </div>
  );
}

export default EventReviews;
