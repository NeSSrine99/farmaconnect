"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Confirmation() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart when arriving to this page
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Thank you for your purchase!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your order has been placed successfully.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
