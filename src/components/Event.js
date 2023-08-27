import React from "react";
import { Link } from "react-router-dom";

function Event({ event }) { 
  return (
    <tr className="movie">
      <td>{event.id}</td>
      <td>{event.name}</td>
      <td>{event.date}</td>
      <td>{event.location}</td>
      <td>{event.rating}</td>
      <td>{event.comment}</td>
      <td>{event.is_favorite}</td>
      <td>{event.user_name}</td>
      <td>
        <Link to={`/events/${events.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default Event;
