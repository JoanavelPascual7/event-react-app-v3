import React, { useState } from "react";
import axios from "axios";
import "../CSS/EventNewForm.css";

import logo from "../Images/Reviews.png";

export default function EventNewForm({ openModal, closeModal }) {
  const initialFormData = {
    name: "",
    date: "",
    location: "",
    rating: "",
    comment: "",
    is_favorite: false,
    user_name: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

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
        console.log("New Event added:", response.data);
        setFormData(initialFormData);
        closeModal();
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  return (
    <div id={`modal-overlay ${openModal ? "modal-open" : ""}`}>
      <div id="modal-content">
          <div id="close-container">
        <span id="close" onClick={closeModal}>
          &times;
        </span>
        </div>
        <div id="add-modal-conent">
        <div className="EventNewForm">
            <h2 id="add-h2">Add New Event</h2>
       
          <form onSubmit={handleSubmit}>
            <label id="add-name" className="name"></label>
            <input
              type="text"
              placeholder="Name"
              id="add-name-input"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label id="add-date" className="date"></label>
            <input
              type="date"
              id="add-date-input"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            <label id="add-location" className="location"></label>
            <input
              type="text"
              id="add-location-input"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
            />
            <label id="add-rating" className="rating"></label>
            <input
              type="number"
              id="add-rating-input"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleInputChange}
            />
            <label id="add-comment" className="comment"></label>
            <textarea
              id="add-comment-input"
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleInputChange}
            />

            <label id="add-username" className="user-name"></label>
            <input
              type="text"
              placeholder="User Name"
              id="add-username-input"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <div>
              <label id="add-image" className="image">
              </label>
              <input
                type="text"
                placeholder="Image URL"
                id="add-image-input"
                name="image_url"
                value={formData.image_url}
                onChange={handleInputChange}
              />

              <div>
                <input
                  type="checkbox"
                  id="is_favorite"
                  name="is_favorite"
                  placeholder="User Name"
                  checked={formData.is_favorite}
                  onChange={handleInputChange}
                />
                <label
                  id="add-favorite-label"
                  className="favorite"
                  htmlFor="is_favorite"
                >
                  Favorite
                </label>
              </div>
              <button
                id="add-button"
                className="add-event-button"
                type="submit"
              >
                Add Event
              </button>
            </div>
          </form>
        </div>

        </div>

      </div>
    </div>
  );
}
