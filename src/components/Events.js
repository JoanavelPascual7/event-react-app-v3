import React from "react";
import { Link } from "react-router-dom";

import '../CSS/Events.css'

function Event({ event }) {
  return (
    <tr className="event-list-page">
      <td className=" event-id">{event.id}</td>
      <td className="event-name">{event.name}</td>
      <td className="event-date">{event.date}</td>
      <td className="event-loacation">{event.location}</td>
      <td className="event-rating">{event.rating}</td>
      <td className="event-comment">{event.comment}</td>
      <td className="event-favorite">{event.is_favorite}</td>
      <td className="event-user-name">{event.user_name}</td>
      <td>
        <img className="" src={event.image_url} alt={event.name} style={{ maxWidth: "100px" }} />
      </td>
      <td>
        <Link to={`/events/${event.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default Event;
