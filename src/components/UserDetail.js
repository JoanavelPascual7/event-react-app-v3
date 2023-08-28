import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom

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
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>User Name: {user.username}</p>

      {/* Add links to UserEdit and UserNew */}
      <Link to={`/users/${user.id}/edit`}>Edit User</Link>
      <Link to="/users/new">Add New User</Link>
    </div>
  );
}

export default UserDetail;
