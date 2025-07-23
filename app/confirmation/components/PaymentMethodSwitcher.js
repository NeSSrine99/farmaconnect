"use client";
import { useState } from "react";
import Input from "../../components/ui/Input";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import Button from "../../components/ui/Button";
import { FiAlertCircle } from "react-icons/fi";

export default function PaymentMethodSwitcher() {
  const [selectedMethod, setSelectedMethod] = useState("credit");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full  mx-auto border border-gray-400 p-4 rounded bg-white shadow-md">
      <h2 className="text-left text-lg font-medium text-gray-700 mb-5">
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
      <div className="">
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
          <div className="flex flex-col gap-4">
            <section className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl bg-teal-100 ">
              <FiAlertCircle size={24} />
              <span className="font-semibold">
                Non-refundable COD fees of $1 will be applied
              </span>
            </section>
            <section className="flex lg:flex-row items-center gap-4">
              <Input
                name="discount code"
                placeholder="Enter Discount code "
                className="w-full"
              />
              <Button variant="tertiary">Apply</Button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
