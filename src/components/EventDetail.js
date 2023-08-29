import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import EventReviews from './EventReviews';

function EventDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
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

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then(() => {
        console.log('Event deleted successfully');
        navigate('/events');
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='event-details'>Event Details</h2>
      <p>Name: {event.name}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Rating: {event.rating}</p>
      <p>Comment: {event.comment}</p>
      <p>Favorite: {event.is_favorite ? 'Yes' : 'No'}</p>
      <p>User Name: {event.user_name}</p>

      {/* Display the image larger */}
      <img
        src={event.image_url}
        alt={event.name}
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '30px' }}
      />
        <div>
      <Link to={`/events/${id}/edit`}>Edit</Link>
      </div>
      <div>
      <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
      <Link to={`/events/${id}/reviews`} onClick={() => navigate(`/events/${id}/reviews`)}>
        Event Reviews
      </Link>
      </div>
      <div>
      <Link to={`/events/${id}/reviews/new`} onClick={() => navigate(`/events/${id}/reviews`)}>
        Leave A Review
      </Link>
      </div>
        <div>
      {/* Add a link to create a new event */}
      <Link to="/events/new">Create New Event</Link>
      </div>
    </div>
  );
}

export default EventDetail;
