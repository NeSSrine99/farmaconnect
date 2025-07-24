"use client";

import { useEffect } from "react";

export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // يخفي التوست بعد 3 ثوانٍ

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg transition-all animate-fade-in z-50">
      {message}
    </div>
  );
}
