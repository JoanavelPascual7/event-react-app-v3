import React, { useState } from 'react';
import axios from 'axios';

import "./UserEditForm.css"

function UserNewForm() {
  const [formData, setFormData] = useState({
    username: '',
    admin: '',
    verified: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`, formData)
      .then((response) => {
        console.log('User created:', response.data);

      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Admin:
          <input
            type="text"
            name="admin"
            value={formData.admin}
            onChange={handleChange}
          />
        </label>
        <label>
          Verified:
          <input
            type="text"
            name="verified"
            value={formData.verified}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default UserNewForm;
