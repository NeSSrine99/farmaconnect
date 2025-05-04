// components/CartIcon.js
"use client";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useCart } from "@/context/CartContext";

export default function CartIcon({ onClick }) {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <MdOutlineAddShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
}
