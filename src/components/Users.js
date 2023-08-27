import React from "react";
import { Link } from "react-router-dom";


function User({ user }) {
  return (
    <tr className="user-list-page">
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.admin}</td>
      <td>{user.verified}</td>
      <td>
        <Link to={`/users/${user.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default User;
