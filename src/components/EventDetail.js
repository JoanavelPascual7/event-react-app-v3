import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import the Link component
import EventReviews from './EventReviews'; // Import the new component

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then((response) => {
        console.log('Event Detail:', response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event detail:', error);
      });
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Event Details</h2>
      <p>Name: {event.name}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Rating: {event.rating}</p>
      <p>Comment: {event.comment}</p>
      <p>Favorite: {event.is_favorite ? 'Yes' : 'No'}</p>
      <p>User Name: {event.user_name}</p>

      <Link to={`/events/${id}/edit`}>Edit</Link>
      <EventReviews eventId={id} /> {/* Display event reviews */}
    </div>
  );
}

export default EventDetail;
