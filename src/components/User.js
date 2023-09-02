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
      <td className="user-id">{user.id}</td>
      <td className="user-name">{user.username}</td>
      <td className="user-admin">{user.admin}</td>
      <td className="user-verified">{user.verified}</td>
      <td>
        <Link className="view-link" to={`/users/${user.id}`}>View</Link>
      </td>
      <td>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default User;
