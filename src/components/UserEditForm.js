import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        // You can redirect or show a success message here
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
      <h2>Edit User</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserEditForm;
