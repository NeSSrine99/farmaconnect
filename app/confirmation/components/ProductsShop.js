import React from "react";
import { useCart } from "../../context/CartContext";
import { BsTrash3 } from "react-icons/bs";
import Button from "@shared/Button";

const ProductsShop = () => {
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
  const handleBack = () => {
    window.history.back();
  };
  return (
    <main className="border border-gray-300 rounded-md p-4 shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">Shopping Address</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="">
          {/* Left side - products and delivery info */}
          <div className="md:col-span-2 space-y-4 bg-neutral-200 p-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white pb-4 "
              >
                <div className="flex items-center gap-4  ">
                  <img
                    src={item.image}
                    width={70}
                    height={70}
                    alt={item.nom}
                    className="rounded"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-sm">{item.nom}</h2>
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
        </div>
      )}
      <div className="border-t pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>SubTotal</span>
          <span>${getTotalPrice()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$2.00</span>
        </div>
        <div className="flex justify-between">
          <span>COD Fees</span>
          <span>$1.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$229.72</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-800 border-t pt-2">
          <span>Total Including VAT</span>
          <span>${getTotalPrice()}</span>
        </div>
      </div>
      <Button className="w-full">Place Order</Button>

      <p className="text-xs text-center text-gray-500 mt-2">
        🔒 Protected by SSL encryption
      </p>

      <button
        onClick={handleBack}
        className="text-sm text-gray-500 underline mt-4"
      >
        ← Back
      </button>
    </main>
  );
};

export default ProductsShop;
