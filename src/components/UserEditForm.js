import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserEditForm.css'; 

function UserEditForm() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    admin: '',
    verified: ''
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((response) => {
        console.log('User Detail:', response.data);
        setUser(response.data);
        setFormData({
          username: response.data.username,
          admin: response.data.admin,
          verified: response.data.verified
        });
      })
      .catch((error) => {
        console.error('Error fetching user detail:', error);
      });
  }, [id]);

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
      .put(`${process.env.REACT_APP_API_URL}/users/${id}`, formData)
      .then((response) => {
        console.log('User updated:', response.data);
        // Redirect to the home page
        window.location.href = '/'; // Redirect to the home page
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='user-title'>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label className='user-name'>
          User Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label className='user-admi'>
          Admin:
          <input
            type="text"
            name="admin"
            value={formData.admin}
            onChange={handleChange}
          />
        </label>
        <label className='user-verified'>
          Verified:
          <input
            type="text"
            name="verified"
            value={formData.verified}
            onChange={handleChange}
          />
        </label>
        <button className="update-button" type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserEditForm;
