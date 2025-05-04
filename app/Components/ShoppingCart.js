// components/ShoppingCart.js
"use client";
import { useCart } from "@/context/CartContext";
import { MdDelete } from "react-icons/md";
import Button from "./Button";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4 bg-white rounded shadow-md w-[300px] ">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.nom}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-[14px]  truncate w-[130px]">
                    {item.nom}
                  </h3>
                  <p className="text-[12px] text-gray-600">{item.prix} DT</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div>
        <Button onClick={clearCart}>Supprimer</Button>
      </div>
    </div>
  );
}
