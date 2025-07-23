"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import Input from "../components/ui/Input";
import ExitModal from "./components/ExitModal";
import AddressShipping from "./components/AddressShipping";
import MethodShipping from "./components/MethodShipping";
import PaymentMethodSwitcher from "./components/PaymentMethodSwitcher";
import ProductsShop from "./components/ProductsShop";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  const [form, setForm] = useState({
    nom: "",
    tel: "",
    adresse: "",
    cin: "",
    commentaire: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [showExitModal, setShowExitModal] = useState(false);
  const [saveOptions, setSaveOptions] = useState({
    saveAddress: false,
    saveCard: false,
  });

  const [showSavedAddressSection, setShowSavedAddressSection] = useState(false);
  const [showSavedCardSection, setShowSavedCardSection] = useState(false);

  // ✅ تحميل البيانات من localStorage حسب البريد
  useEffect(() => {
    if (!isSignedIn || !user?.emailAddresses?.[0]?.emailAddress) return;

    const email = user.emailAddresses[0].emailAddress;

    const savedAddress = localStorage.getItem(`savedAddress_${email}`);
    const savedCard = localStorage.getItem(`savedCard_${email}`);

    if (savedAddress) {
      setForm((prev) => ({
        ...prev,
        ...JSON.parse(savedAddress),
      }));
      setShowSavedAddressSection(true);
    }

    if (savedCard) {
      const card = JSON.parse(savedCard);
      setForm((prev) => ({
        ...prev,
        ...card,
      }));
      setShowSavedCardSection(true);
    }
  }, [isSignedIn, user]);

  // 🔁 Modal عند محاولة مغادرة الصفحة
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

  // ✅ تحديث النموذج
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ حفظ حسب المستخدم المسجل
  const handleSave = () => {
    if (!isSignedIn || !user?.emailAddresses?.[0]?.emailAddress) return;
    const email = user.emailAddresses[0].emailAddress;

    if (saveOptions.saveAddress) {
      localStorage.setItem(`savedAddress_${email}`, JSON.stringify(form));
      setShowSavedAddressSection(true);
    }

    if (saveOptions.saveCard) {
      const cardData = {
        cardNumber: form.cardNumber,
        expiry: form.expiry,
        cvv: form.cvv,
      };
      localStorage.setItem(`savedCard_${email}`, JSON.stringify(cardData));
      setShowSavedCardSection(true);
    }

    setShowExitModal(false);
    // router.push("/confirmation"); // أزل التعليق إذا أردت التوجيه
  };

  return (
    <div className="bg-gray-50 py-[100px] lg:px-[120px] sm:px-[35px] px-4">
      <h2 className="text-xl font-semibold mb-10">Checkout</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* القسم الأيسر */}
        <div className="lg:col-span-2 space-y-8">
          {/* العنوان */}
          <AddressShipping
            showSavedSection={showSavedAddressSection}
            form={form}
            onChange={handleChange}
          />

          {/* التوصيل */}
          <MethodShipping />

          {/* الدفع */}
          <PaymentMethodSwitcher
            showSavedSection={showSavedCardSection}
            form={form}
            onChange={handleChange}
          />
        </div>

        {/* ملخص السلة */}
        <ProductsShop />

        {/* نافذة الخروج */}
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
