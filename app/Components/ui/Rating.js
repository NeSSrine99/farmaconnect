"use client";

import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Rating({
  value = 0,
  onChange,
  total = 5,
  showCount = true,
  variant = "display", // "interactive" | "display"
}) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  const displayRating = variant === "interactive" ? hover || rating : value;

  const stars = Array.from({ length: total }, (_, index) => {
    const starValue = index + 1;

    let icon = <FaRegStar className="text-yellow-400" size={20} />;
    if (displayRating >= starValue) {
      icon = <FaStar className="text-yellow-400" size={20} />;
    } else if (displayRating >= starValue - 0.5) {
      icon = <FaStarHalfAlt className="text-yellow-400" size={20} />;
    }

    if (variant === "interactive") {
      return (
        <label key={index} className="cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={starValue}
            onClick={() => {
              setRating(starValue);
              onChange && onChange(starValue);
            }}
            className="hidden"
          />
          <span
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className="transition-transform hover:scale-110"
          >
            {icon}
          </span>
        </label>
      );
    } else {
      return <span key={index}>{icon}</span>;
    }
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex">{stars}</div>
      {showCount && <span className="text-sm font-medium text-gray-700"></span>}
    </div>
  );
}
