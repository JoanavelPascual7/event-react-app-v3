import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EventEditForm() {
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Use for navigation after editing

  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
    rating: '',
    comment: '',
    is_favorite: false,
    user_name: '',
  });

  useEffect(() => {
    // Fetch the event details for the specified ID
    axios
      .get(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then((response) => {
        console.log('Event Details:', response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a PUT request to update the event
    axios
      .put(`${process.env.REACT_APP_API_URL}/events/${id}`, event)
      .then((response) => {
        console.log('Event Updated:', response.data);
        // Navigate back to the event details page after successful update
        navigate(`/events/${id}`);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="event-edit-form">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
          />
        </label>
        {/* ... Other form fields */}
        <label>
          Comment:
          <textarea
            name="comment"
            value={event.comment}
            onChange={handleChange}
          />
        </label>
        <label>
          Is Favorite:
          <input
            type="checkbox"
            name="is_favorite"
            checked={event.is_favorite}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
}

export default EventEditForm;