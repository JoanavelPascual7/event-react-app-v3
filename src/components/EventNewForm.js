import React, { useState } from 'react';
import axios from 'axios';

import '../CSS/EventNewForm.css'

export default function EventNewForm() {
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

    axios
      .post(`${process.env.REACT_APP_API_URL}/events`, formData)
      .then((response) => {
        console.log('New Event added:', response.data);
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
        <label className='name'>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label className='date'>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <label className='location'>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <label className='rating'>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <label className='comment'>Comment:</label>
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
          <label className='favorite' htmlFor="is_favorite">Favorite</label>
        </div>
        <label className='user-name'>User Name:</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <div>
        <label className='image'>Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleInputChange}
        />
 
        </div>
        <button  className="add-event-button"  type="submit">Add Event</button>
      </form>
    </div>
  );
}
