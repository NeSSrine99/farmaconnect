"use client";

import {
  FaUser,
  FaPhoneAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";

const iconMap = {
  nom: (
    <FaUser className="transition-transform duration-300 group-hover:scale-110" />
  ),
  tel: (
    <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  adresse: (
    <FaMapMarkerAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  cin: (
    <FaIdCard className="transition-transform duration-300 group-hover:scale-110" />
  ),
  commentaire: (
    <FaCommentDots className="transition-transform duration-300 group-hover:scale-110" />
  ),
};

export default function Input({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 group ${className}`}>
      <label className="font-semibold text-gray-700 transition-colors group-hover:text-primary">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>

      <div
        className="flex items-center gap-2 border border-gray-400 rounded px-4 py-2 bg-white transition-all duration-300 
                   hover:shadow-md focus-within:shadow-lg focus-within:ring-2 ring-primary"
      >
        <span className="text-gray-500">{iconMap[name]}</span>

        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm resize-none bg-transparent"
            rows={3}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm bg-transparent"
            value={value}
            onChange={onChange}
            required={required}
          />
        )}
      </div>
    </div>
  );
}
