import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './User.css'

function User({ user, onDelete }) {
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
      .then((response) => {
        console.log("User deleted:", response.data);
        onDelete(user.id); 
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <tr className="user-list-page">
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.admin}</td>
      <td>{user.verified}</td>
      <td>
        <Link to={`/users/${user.id}`}>View</Link>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default User;
