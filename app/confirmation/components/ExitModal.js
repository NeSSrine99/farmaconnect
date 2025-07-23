"use client";

import { useEffect } from "react";
import { FaSave } from "react-icons/fa";
import Button from "../../components/ui/Button";

export default function ExitModal({
  onClose,
  onSave,
  visible,
  setOptions,
  className = "",
}) {
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
        {/* close button */}
        <Button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </Button>

        {/* icon */}
        <div className="flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <FaSave className="text-primary text-2xl" />
          </div>
        </div>

        {/* title */}
        <h2 className="text-center text-lg font-semibold text-gray-800">
          Save your information for next time?
        </h2>

        {/* save options */}
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

        {/* action Buttons  */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-3">
          <Button
            variant="tertiary"
            onClick={onClose}
            className="w-full sm:w-auto "
          >
            Skip
          </Button>
          <Button onClick={onSave} className="w-full sm:w-auto   ">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
