"use client";

import React, { useState, useEffect } from "react";
import Input from "../components/ui/Input";
import ExitModal from "./components/ExitModal";

import AddressShipping from "./components/AddressShipping";
import MethodShipping from "./components/MethodShipping";
import PaymentMethodSwitcher from "./components/PaymentMethodSwitcher";
import ProductsShop from "./components/ProductsShop";

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
    <div className="bg-gray-50 py-[100px] lg:px-[120px] sm:px-[35px] px-4 ">
      <h2 className="text-xl font-semibold mb-10">Checkout</h2>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Col gauche */}
        <div className="lg:col-span-2 space-y-8">
          {/* Adresse */}
          <AddressShipping />

          {/* Livraison */}
          <MethodShipping />

          {/* Paiement */}
          <PaymentMethodSwitcher />
        </div>

        {/* Résumé panier */}

        <ProductsShop />

        {/* Modal Exit */}
        <ExitModal
          visible={showExitModal}
          onClose={() => setShowExitModal(false)}
          onSave={handleSave}
          setOptions={setSaveOptions}
        />
      </div>
    </div>
  );
}
