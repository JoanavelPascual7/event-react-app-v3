import React, { useState } from 'react';
import axios from 'axios';

export default function EventNewForm({eventId }) {
  const initialFormData = {
    name: '',
    date: '',
    location: '',
    rating: '',
    comment: '',
    is_favorite: false,
    user_name: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to add a review for the specific eventId
    axios
      .post(`${process.env.REACT_APP_API_URL}/events/${eventId}/reviews`, formData)
      .then((response) => {
        console.log('New Review added:', response.data);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="EventNewForm">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <label>Comment:</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={formData.is_favorite}
            onChange={handleInputChange}
          />
          <label htmlFor="is_favorite">Favorite</label>
        </div>
        <label>User:</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleInputChange}
        />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
