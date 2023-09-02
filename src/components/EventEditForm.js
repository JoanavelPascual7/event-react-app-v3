import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import './Form.css'

function EventEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: "",
    rating: "",
    comment: "",
    is_favorite: false,
    user_name: "",
    image_url: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then((response) => {
        console.log("Event Details:", response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
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
    axios
      .put(`${process.env.REACT_APP_API_URL}/events/${id}`, event)
      .then((response) => {
        console.log('Event Updated:', response.data);
        navigate(`/events/${id}`); // Redirect to the Show page
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="event-edit-form">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <label className="name">
          Name:
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
        </label>
        <label className="date">
          Date:
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
          />
        </label>
        <label className="comment">
          Comment:
          <textarea
            name="comment"
            value={event.comment}
            onChange={handleChange}
          />
        </label>
        <label className="favorite">
          Is Favorite:
          <input
            type="checkbox"
            name="is_favorite"
            checked={event.is_favorite}
            onChange={handleCheckboxChange}
          />
        </label>
        <label className="image">
          Image URL:
          <input
            type="text"
            name="image_url"
            value={event.image_url}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
}

export default EventEditForm;
