"use client";

import { useEffect } from "react";
import { FaSave } from "react-icons/fa";

export default function ExitModal({ onClose, onSave, visible, setOptions }) {
  if (!visible) return null;

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl animate-fade-in space-y-6 relative">
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>

        {/* الأيقونة */}
        <div className="flex justify-center">
          <div className="bg-secondary/10 p-4 rounded-full">
            <FaSave className="text-secondary text-2xl" />
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-center text-lg font-semibold text-gray-800">
          Save your information for next time?
        </h2>

        {/* خيارات الحفظ */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <input
              type="checkbox"
              name="saveAddress"
              onChange={handleOptionChange}
              className="accent-secondary"
            />
            <span className="text-gray-700 font-medium">
              Save shipping address
            </span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <input
              type="checkbox"
              name="saveCard"
              onChange={handleOptionChange}
              className="accent-secondary"
            />
            <span className="text-gray-700 font-medium">
              Save payment method
            </span>
          </label>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-gray-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition"
          >
            Skip
          </button>
          <button
            onClick={onSave}
            className="w-full sm:w-auto bg-secondary text-white rounded-md px-4 py-2 hover:bg-secondary/90 transition"
          >
            Save & Exit
          </button>
        </div>
      </div>
    </div>
  );
}
