'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating() {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);  

  return (
    
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                className="hidden"
              />
              <FaStar
                size={20}
                className={`cursor-pointer transition-colors ${
                  currentRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
  );
}
