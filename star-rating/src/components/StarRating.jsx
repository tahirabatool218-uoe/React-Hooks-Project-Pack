import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="stars-container">
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star}
            className={star <= (hover || rating) ? "active" : "inactive"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar />
          </span>
        ))}
      </div>

      {rating > 0 && (
        <p className="rating-text">
          You rated {rating} out of 5
        </p>
      )}
    </div>
  );
}

export default StarRating;