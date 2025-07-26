"use client";

import { BsTrash3 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Button from "@shared/Button";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left side - products and delivery info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4 bg-textLight p-2 rounded">
              <TbTruckDelivery size={24} />
              <p className="font-medium text-sm">
                Livraison et expédition en 24h en Nice
              </p>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.nom}
                    className="rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">{item.nom}</h2>
                    <div className="flex items-center justify-between ">
                      <div className="mx-2 flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2  bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-[14px] font-semibold ">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2  bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold">{item.prix}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-primary hover:text-hoverButtonPrimary"
                  >
                    <BsTrash3 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - order summary */}
          <div className="bg-[#d7e1e2] p-4 rounded h-fit">
            <div className="text-lg font-bold text-right mb-4">
              Total: {getTotalPrice()} TND
            </div>
            <Link href="/confirmation">
              <Button className="w-full">Commander</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
