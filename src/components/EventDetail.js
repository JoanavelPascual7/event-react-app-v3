
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


import '../CSS/EventDetail.css'

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
    <div className="event-detail-container">
      <h2 className='event-details'>Event Details</h2>
      <ul className="event-info">
        <li>
          <span className="event-detail-heading">Name:</span>
          <span className="event-detail">{event.name}</span>
        </li>
        <li>
          <span className="event-detail-heading">Date:</span>
          <span className="event-detail">{event.date}</span>
        </li>
        <li>
          <span className="event-detail-heading">Location:</span>
          <span className="event-detail">{event.location}</span>
        </li>
        <li>
          <span className="event-detail-heading">Rating:</span>
          <span className="event-detail">{event.rating}</span>
        </li>
        <li>
          <span className="event-detail-heading">Comment:</span>
          <span className="event-detail">{event.comment}</span>
        </li>
        <li>
          <span className="event-detail-heading">Favorite:</span>
          <span className="event-detail">{event.is_favorite ? 'Yes' : 'No'}</span>
        </li>
        <li>
          <span className="event-detail-heading">User Name:</span>
          <span className="event-detail">{event.user_name}</span>
        </li>
      </ul>

      <img
        src={event.image_url}
        alt={event.name}
        className="event-image"
      />
      
      <div className="event-actions">
        <Link to={`/events/${id}/edit`} className="event-action-link">
          Edit
        </Link>
        <button onClick={handleDelete} className="event-action-button">
          Delete
        </button>
      </div>

      <div className="event-action-links">
        <Link to={`/events/${id}/reviews`} className="event-action-link">
          Event Reviews
        </Link>
        <Link to={`/events/${id}/reviews/new`} className="event-action-link">
          Leave A Review
        </Link>
        <Link to="/events/new" className="event-action-link">
          Create New Event
        </Link>
      </div>
    </div>
  );
}

export default EventDetail;
