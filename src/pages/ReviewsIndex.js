import React from 'react';
import { useParams } from 'react-router-dom';
import EventReviews from '../components/EventReviews'; // Update the import path

function ReviewsIndex() {
  const { id } = useParams(); // Get the event ID from the URL

  return (
    <div>
      {/* <h2>Event Reviews</h2> */}
      <EventReviews eventId={id} />
    </div>
  );
}

export default ReviewsIndex;