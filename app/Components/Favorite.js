'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? (
        <FaHeart size={24} className="text-secondary transition-transform transform hover:scale-110" />
      ) : (
        <FaRegHeart size={24} className="text-secondary transition-transform transform hover:scale-110" />
      )}
    </div>
  );
}
