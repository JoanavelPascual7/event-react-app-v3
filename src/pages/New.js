import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventNewForm from "../components/EventNewForm";
import "../CSS/NewPage.css";

import nycImage from '../nyc.jpg';
import logo from "../Images/Reviews.png";

function New() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="new-event-container">
      <div className="nyc-image-section">
        <img src={nycImage} alt="New York City" className="nyc-image" />
      </div>
      <div className="home-page-header">
        <h1 className="home-page-title">
          <img id="homepage-logo-icon" src={logo} alt="MetroHubLogo" />
        </h1>
        <p id="add-page-description">
          <h3>Add an Event</h3>
          Share your latest NYC experience on Metro Hub.
        </p>
        <Link id="new-page-events-link" to="/events">
          View Events
        </Link>
        <button id="new-open-modal-button" onClick={openModal}>
          Add Event
        </button>
      </div>
      {isModalOpen && (
        <EventNewForm openModal={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
}

export default New;
