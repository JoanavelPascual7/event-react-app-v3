import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from "../components/User";
import { Link } from "react-router-dom";

function UsersIndex() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((response) => {
        console.log('API Response:', response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div className="index-container">
      <h1 className='show-title'> List of Users </h1>
      <table>
        <thead>
          {/* Your table header */}
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} /> 
          ))}
        </tbody>
      </table>
      <td>
      <Link to="/users/new">Add New User</Link>
      </td>
    </div>
  );
}

export default UsersIndex;
