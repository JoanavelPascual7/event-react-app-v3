import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import '../CSS/EventNewForm.css';

Modal.setAppElement('#root');

export default function EventNewForm({ closeModal }) {
  const initialFormData = {
    name: '',
    date: '',
    location: '',
    rating: '',
    comment: '',
    is_favorite: false,
    user_name: '',
    image_url: '',
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
        closeModal(); // Close the modal after submitting
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="EventNewForm">
      <Modal
        isOpen={true} // Always open, controlled by New.js state
        onRequestClose={closeModal}
        contentLabel="Add New Event Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Add New Event</h2>
          <form onSubmit={handleSubmit}>
          <label htmlFor="user_name" className="userNameLabel">
            {/* User Name: */}
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder='User Name'
            value={formData.user_name}
            onChange={handleInputChange}
          />
          <label htmlFor="name" className="nameLabel">
            {/* Name: */}
          </label>
          <input
            placeholder='Name:'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
               <label htmlFor="location" className="locationLabel">
            {/* Location: */}
          </label>
          <input
            placeholder='Location'
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <label htmlFor="date" className="dateLabel">
            {/* Date: */}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
     
          <label htmlFor="rating" className="ratingLabel">
            {/* Rating: */}
          </label>
          <input
            placeholder='Rating:'
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
          <label htmlFor="comment" className="commentLabel">
            {/* Comment: */}
          </label>
          <textarea
            placeholder='Comments'
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          />
          <div>
            <label htmlFor="image_url" className="imageUrlLabel">
              {/* Image URL: */}
            </label>
            <input
            placeholder='Image URL'
              type="text"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
            />
          </div>
          <div>
          <label htmlFor="is_favorite" id="favoriteLabel">
              Favorite
            </label>
            <input
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={formData.is_favorite}
              onChange={handleInputChange}
            />
          </div>
          <button className="addEventButton" type="submit">
              Add Event
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
