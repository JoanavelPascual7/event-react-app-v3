import React from "react";
import { Link } from "react-router-dom";

import './Review.css'

function Review({ review }) {
  return (
    <tr className="review">
      <td className='reviewer-name'>{review.reviewer}</td>
      <td className='reviewer-comment'>{review.content}</td>
      <td className='reviewer-rating'>{review.rating}</td>
      <td>
        <Link to={`/reviews/${review.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default Review;

