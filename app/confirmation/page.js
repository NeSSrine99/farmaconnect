"use client";

import React, { useState, useEffect } from "react";
import Input from "../components/ui/Input";
import ExitModal from "./components/ExitModal";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import AddressShipping from "./components/AddressShipping";
import MethodShipping from "./components/MethodShipping";
import PaymentMethodSwitcher from "./components/PaymentMethodSwitcher";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    nom: "",
    tel: "",
    adresse: "",
    cin: "",
    commentaire: "",
  });

  const [showExitModal, setShowExitModal] = useState(false);
  const [saveOptions, setSaveOptions] = useState({
    saveAddress: false,
    saveCard: false,
  });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
      setShowExitModal(true);
      return "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (saveOptions.saveAddress) {
      localStorage.setItem("savedAddress", JSON.stringify(form));
    }

    if (saveOptions.saveCard) {
      const cardData = {
        cardNumber: form.cardNumber,
        expiry: form.expiry,
        cvv: form.cvv,
      };
      localStorage.setItem("savedCard", JSON.stringify(cardData));
    }

    setShowExitModal(false);

    router.push("/confirmation");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setShowExitModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Col gauche */}
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-xl font-semibold">Checkout</h2>

        {/* Adresse */}
        <AddressShipping />

        {/* Livraison */}
        <MethodShipping />

        {/* Paiement */}
        <PaymentMethodSwitcher />
      </div>

      {/* Résumé panier */}
      <div className="border rounded-md p-4 shadow-sm space-y-4">
        <h3 className="font-semibold text-lg">Shopping Address</h3>

        <div className="space-y-4">
          {[1, 2].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border p-2 rounded"
            >
              <div className="flex flex-col">
                <span className="font-medium">ProductName</span>
                <span className="text-sm text-gray-600">Quantity: 100ml</span>
              </div>
              <div className="flex items-center gap-2">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <span className="font-medium">$50</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>SubTotal</span>
            <span>$3720.27</span>
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
            <span>$3440.00</span>
          </div>
        </div>

        <button className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90 transition">
          Place Order
        </button>

        <p className="text-xs text-center text-gray-500 mt-2">
          🔒 Protected by SSL encryption
        </p>

        <button
          onClick={handleBack}
          className="text-sm text-gray-500 underline mt-4"
        >
          ← Back
        </button>
      </div>

      {/* Modal Exit */}
      <ExitModal
        visible={showExitModal}
        onClose={() => setShowExitModal(false)}
        onSave={handleSave}
        setOptions={setSaveOptions}
      />
    </div>
  );
}
