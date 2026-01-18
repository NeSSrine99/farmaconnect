"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDeleteLeft } from "react-icons/fa6";

export default function ProductCard({
  product,
  onOpenDetails,
  onEdit,
  onDelete,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className=" bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-row relative w-full"
    >
      {/* Image */}
      <div className="relative  bg-white flex items-center justify-center ">
        <img
          src={product.image}
          alt={product.name}
          className=" w-20 h-20 object-contain"
        />

        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gray-500 mb-1">{product.brand}</div>

        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
          {product.name}
        </h2>

        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-green-700 font-bold">{product.price}</p>
            <p className="text-xs text-gray-500">{product.availability}</p>
          </div>

          <div className="text-xs text-gray-500">
            ⭐ {product.rating} ({product.reviews})
          </div>
          {/* Actions */}
          <div className="flex gap-2 mt-4">
            <button
              className="w-full px-3 py-2 rounded-lg bg-blue-600 text-white text-sm cursor-pointer"
              onClick={() => onOpenDetails(product)}
            >
              Details
            </button>

            <button
              className="w-full px-3 py-2 rounded-lg bg-green-600 text-white text-sm cursor-pointer"
              onClick={() => onEdit(product)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-red-600 text-white text-sm cursor-pointer"
        onClick={() => onDelete(product.id)}
      >
        Delete
        {/* <FaDeleteLeft /> */}
      </button>
    </motion.div>
  );
}
