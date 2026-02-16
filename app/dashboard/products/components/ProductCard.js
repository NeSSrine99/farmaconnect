"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaEye, FaEllipsisV } from "react-icons/fa";

export default function ProductCard({ product, onEdit, onDelete, onDetails }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between 
      bg-white rounded-2xl border border-gray-100 
      shadow-sm hover:shadow-md 
      p-2 md:gap-4 w-full relative transition-all duration-300"
    >
      {/* Product image + name */}
      <div className="flex items-center gap-4 min-w-60">
        <div
          className="w-16 h-16 shrink-0 bg-white shadow-sm 
        flex items-center justify-center 
        overflow-hidden rounded-xl"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661751776826-0ac0ed5b8424?fm=jpg&q=60&w=3000&auto=format&fit=crop"
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase tracking-wide">
            {product.brand}
          </span>
          <span className="font-semibold text-gray-800 text-sm">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex items-center justify-around w-full   text-sm">
        {/* Price */}
        <div className="font-semibold text-green-800">${product.price}</div>

        {/* Stock */}
        <div className="text-gray-500">{product.stock || 0} pcs</div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          ⭐
          <span className="text-gray-700 text-xs">
            {product.rating || 0} ({product.reviews || 0})
          </span>
        </div>

        {/* Availability Badge */}
        <div>
          <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${
              product.availability === "in stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product.availability}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-2">
        {/* Desktop */}
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => onDetails(product)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaEye size={15} />
          </button>

          <button
            onClick={() => onEdit(product)}
            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaEdit size={15} />
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            <FaTrash size={15} />
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden absolute top-3 right-3">
          <button
            onClick={() => setShowActions(!showActions)}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <FaEllipsisV size={15} />
          </button>

          {showActions && (
            <div
              className="absolute right-0 mt-2 w-36 bg-white 
            shadow-xl rounded-xl border z-50 flex flex-col overflow-hidden"
            >
              <button
                onClick={() => {
                  onDetails(product);
                  setShowActions(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
              >
                <FaEye /> Details
              </button>

              <button
                onClick={() => {
                  onEdit(product);
                  setShowActions(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
              >
                <FaEdit /> Edit
              </button>

              <button
                onClick={() => {
                  onDelete(product.id);
                  setShowActions(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-red-600"
              >
                <FaTrash /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
