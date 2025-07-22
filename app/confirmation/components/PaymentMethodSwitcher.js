"use client";
import { useState } from "react";
import Input from "../../components/ui/Input";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import Button from "../../components/ui/Button";

export default function PaymentMethodSwitcher() {
  const [selectedMethod, setSelectedMethod] = useState("credit");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full  mx-auto">
      <h2 className="text-left text-2xl font-bold text-primary mb-10">
        Paiement Methods
      </h2>
      {/*  Switch Buttons */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          onClick={() => handleSelect("credit")}
          className={` text-start px-4 py-2 transition-all  ${
            selectedMethod === "credit"
              ? "text-primary border-b-2 border-primary font-semibold"
              : "text-gray-500"
          }`}
        >
          Credit / Cash
        </button>
        <button
          onClick={() => handleSelect("delivery")}
          className={`text-start px-4 py-2 transition-all ${
            selectedMethod === "delivery"
              ? "text-primary border-b-2 border-primary font-semibold"
              : "text-gray-500"
          }`}
        >
          Cash on Delivery
        </button>
      </div>

      {/*  Content depending on selected method */}
      <div className="bg-gray-50 border p-4 rounded">
        {selectedMethod === "credit" ? (
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Input
                  name="cart number"
                  placeholder="Cart Number"
                  className="flex-1 w-full"
                />
                <Input
                  name="Date"
                  placeholder="Date"
                  className="flex-1 w-full"
                />
              </div>
              <Input
                name="Card Security code ICVVI"
                placeholder="Card Security code ICVVI"
              />
            </section>
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaCcMastercard size={40} color="orange" />
                <FaCcVisa size={40} color="blue" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-primary" />
                <span className="text-gray-800">
                  Save your card information ICVVI will not to saved!
                </span>
              </div>
              <div className="flex lg:flex-row items-center gap-4">
                <Input
                  name="discount code"
                  placeholder="Enter Discount code "
                  className="w-full"
                />
                <Button variant="tertiary">Apply</Button>
              </div>
            </section>
          </div>
        ) : (
          <div>
            <h3 className="font-bold mb-2 text-gray-800">
              Paiement à la Livraison
            </h3>
            <p className="text-sm text-gray-600">
              Vous payez en espèces lors de la réception du colis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
