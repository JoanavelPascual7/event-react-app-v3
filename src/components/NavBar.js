import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Reviews.png';
import '../CSS/NavBar.css';
import LoginModal from './LoginModal';

function NavBar({ handleLogout, user, userId, isAdmin }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div id='logo-container'>
        <Link to="/" id="MetroHubLogo" className='navbar-logo'>
          <img src={Logo} alt="MetroHubLogo" />
        </Link>
      </div>
      {/* <Link to="/users">Users</Link> */}
      <div id="navbar-links container">


      <div id='navbar-buttons'>
        <div className="navbar-signup-link">
        <Link id="navbar-signup"  to="/signup">
          Sign Up
        </Link>
        </div>
          <div className='Navbar-login-button-div'>
        <button id="navbar-login" className="navbar-login-button" onClick={openModal}>
          Login
        </button>
        </div>
        </div>
        
      </div>

      {isModalOpen && <LoginModal openModal={closeModal} />}
    </nav>
  );
}

export default NavBar;
