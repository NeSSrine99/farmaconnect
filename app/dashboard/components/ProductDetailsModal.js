"use client";

import React from "react";

export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button
            className="text-gray-500 font-bold hover:text-black"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-contain rounded-xl"
          />

          <div className="space-y-2">
            <p className="text-sm text-gray-500">{product.brand}</p>
            <p className="text-sm font-semibold">{product.price}</p>
            <p className="text-xs text-gray-500">{product.availability}</p>
            <p className="text-sm mt-2">{product.description}</p>

            <div className="mt-3">
              <p className="font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {product.ingredients && product.ingredients.length > 0 ? (
                  product.ingredients.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))
                ) : (
                  <li>No ingredients listed</li>
                )}
              </ul>
            </div>

            <div className="mt-3">
              <p className="font-semibold">Usage:</p>
              <p className="text-sm text-gray-600">{product.usage}</p>
            </div>

            <div className="mt-3">
              <p className="font-semibold">Side Effects:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {product.sideEffects && product.sideEffects.length > 0 ? (
                  product.sideEffects.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))
                ) : (
                  <li>No side effects listed</li>
                )}
              </ul>
            </div>

            <div className="mt-3">
              <p className="font-semibold">Warning:</p>
              <p className="text-sm text-gray-600">{product.warning}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t bg-gray-50 sticky bottom-0">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
