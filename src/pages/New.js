import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import EventNewForm from "../components/EventNewForm";
import "../CSS/NewPage.css";

import nycImage from '../nyc.jpg';
import logo from "../Images/Reviews.png";

Modal.setAppElement('#root');

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
      <div id="add-home-page-header">
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
        <button id="add-events-link" onClick={openModal}>
          Add Events
        </button>

        {/* EventNewForm Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add New Event Modal"
          overlayClassName="Overlay"
          className={`Modal ${isModalOpen ? 'active' : ''}`}
        >
          <div id="new-page-modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <EventNewForm closeModal={closeModal} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default New;