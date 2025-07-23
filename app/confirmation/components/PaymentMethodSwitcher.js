"use client";

import { useState } from "react";
import Input from "../../components/ui/Input";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import Button from "../../components/ui/Button";
import { FiAlertCircle } from "react-icons/fi";

export default function PaymentMethodSwitcher({ showSavedSection }) {
  const [selectedMethod, setSelectedMethod] = useState("credit");

  return (
    <div className="w-full border border-gray-400 p-4 rounded bg-white shadow-md">
      <h2 className="text-left text-lg font-medium text-gray-700 mb-5">
        Payment Methods
      </h2>

      {/* التبديل */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          onClick={() => setSelectedMethod("credit")}
          className={`text-start px-4 py-2 transition-all ${
            selectedMethod === "credit"
              ? "text-primary border-b-2 border-primary font-semibold"
              : "text-gray-500"
          }`}
        >
          Credit / Cash
        </button>
        <button
          onClick={() => setSelectedMethod("delivery")}
          className={`text-start px-4 py-2 transition-all ${
            selectedMethod === "delivery"
              ? "text-primary border-b-2 border-primary font-semibold"
              : "text-gray-500"
          }`}
        >
          Cash on Delivery
        </button>
      </div>

      {/* القسم العادي */}
      <div className={showSavedSection ? "hidden" : "block"}>
        {selectedMethod === "credit" ? (
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-4">
              <Input
                name="cardNumber"
                placeholder="Card Number"
                className="flex-1 w-full"
              />
              <Input
                name="expiry"
                placeholder="Expiry Date"
                className="flex-1 w-full"
              />
            </div>
            <Input name="cvv" placeholder="CVV" />
            <div className="flex items-center gap-4">
              <FaCcMastercard size={40} color="orange" />
              <FaCcVisa size={40} color="blue" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              <span className="text-gray-800">
                Save your card information (CVV won't be saved)
              </span>
            </div>
            <div className="flex gap-4">
              <Input
                name="discount"
                placeholder="Enter Discount Code"
                className="w-full"
              />
              <Button variant="tertiary">Apply</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl bg-teal-100">
              <FiAlertCircle size={24} />
              <span className="font-semibold">
                Non-refundable COD fees of $1 will be applied
              </span>
            </div>
            <div className="flex gap-4">
              <Input
                name="discount"
                placeholder="Enter Discount Code"
                className="w-full"
              />
              <Button variant="tertiary">Apply</Button>
            </div>
          </div>
        )}
      </div>

      {/* القسم المحفوظ */}
      <section className={showSavedSection ? "space-y-4 block" : "hidden"}>
        <Input
          name="cart"
          placeholder="Saved Card: **** **** **** 1234"
          extraControl={<input type="radio" name="cart-option" />}
        />
        <Input
          name="cart"
          placeholder="CVV"
          extraControl={<input type="radio" name="cart-option" />}
        />
        <Button variant="third" className="flex items-center gap-4">
          + Add New Card
        </Button>
      </section>
    </div>
  );
}
