"use client";

import Button from "./Button";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import { SiCcleaner } from "react-icons/si";
import { useCart } from "../context/CartContext";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function ShoppingCart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();
  console.log(cartItems);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-defaultCard w-[340px] md:w-[350px] lg:w-[400px]">
      <h2 className="text-xl font-bold my-4 text-center text-primary">
        Mon panier
      </h2>

      {cartItems.length === 0 ? (
        <div className="p-4 text-gray-500 text-center">
          Aucun article dans votre panier.
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b border-textLight pb-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.nom}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-[14px] truncate w-[130px]">
                      {item.nom}
                    </h3>
                    <p className="text-[12px] text-gray-600">{item.prix} DT</p>
                  </div>
                  <div className="mx-2 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="text-[14px] font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <BsTrash3 size={20} />
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="text-right font-bold mt-4">
            Total: {getTotalPrice()} TND
          </div>

          <div className="flex items-center justify-center gap-2 ">
            {/* Clear Cart */}
            <div className="mt-4 flex justify-center">
              <Button variant="tertiary" onClick={clearCart}>
                <SiCcleaner size={22} className="mr-2" />
              </Button>
            </div>
            {/* Checkout Button */}
            <div className="flex items-center justify-center gap-4 mt-4 w-full ">
              <SignedIn>
                <Link href="/checkout" className="w-full">
                  <Button variant="primary" className="w-full">
                    Checkout
                  </Button>
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="w-full">Checkout</Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
