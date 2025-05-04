"use client";
import { useCart } from "@/context/CartContext";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  return (
    <div className="p-4  mx-auto">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex items-center justify-between sm:gap-8 flex-wrap">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-textLight p-4">
                  <TbTruckDelivery size={35} />
                  <p className=" font-medium text-[14px] ">
                    Livraison et expédition en 24h en Nice{" "}
                  </p>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center "
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item.nom}
                        className="rounded"
                      />
                      <div>
                        <h2 className="font-semibold">{item.nom}</h2>
                        <p className="text-sm text-gray-500">
                          Quantité: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{item.prix} </p>
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
            </div>
            <div className="bg-[#97d6da]">
              <div className="mt-6 flex justify-between items-center ">
                <div className="text-right font-bold text-lg">
                  Total:
                  {getTotalPrice()}
                  TND
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <Button className="flex-1">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
