import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((response) => {
        console.log('User Detail:', response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user detail:', error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>; // Add a loading indicator
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>User Name: {user.username}</p>
      <p>Admin: {user.admin}</p>
      <p>Verified: {user.verified}</p>
    </div>
  );
}

export default UserDetail;
