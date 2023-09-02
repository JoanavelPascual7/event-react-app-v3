import React from "react";

import './Review.css'

function Review({ review }) {
  console.log("Review Component - review:", review); 
  return (
    <tr className="review">
      <td className='reviewer-name'>{review.reviewer}</td>
      <td className='reviewer-comment'>{review.content}</td>
      <td className='reviewer-rating'>{review.rating}</td>

    </tr>
  );
}

export default Review;
