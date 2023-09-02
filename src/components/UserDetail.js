import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom

import "./UserDetail.css"

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
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2 className='title'>User Details</h2>
      <p className='user-id'>ID: {user.id}</p>
      <p className='user-name'>User Name: {user.username}</p>

 
      <Link className='edit-user' to={`/users/${user.id}/edit`}>Edit User</Link>
      <Link className='add-new' to="/users/new">Add New User</Link>
    </div>
  );
}

export default UserDetail;
