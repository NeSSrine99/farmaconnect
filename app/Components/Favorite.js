"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Favorite({
  className = "",
  size = 24,
  initial = false,
  onToggle = () => {},
}) {
  const [isFavorite, setIsFavorite] = useState(initial);

  const toggleFavorite = () => {
    setIsFavorite((prev) => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  return (
    <button
      aria-label="Toggle Favorite"
      onClick={toggleFavorite}
      className={`transition-all duration-200 active:scale-90 ${className}`}
    >
      {isFavorite ? (
        <FaHeart size={size} className="text-secondary drop-shadow-sm" />
      ) : (
        <FaRegHeart
          size={size}
          className="text-secondary opacity-80 hover:opacity-100"
        />
      )}
    </button>
  );
}
