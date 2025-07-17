"use client";

import {
  FaUser,
  FaPhoneAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";

const iconMap = {
  nom: <FaUser />,
  tel: <FaPhoneAlt />,
  adresse: <FaMapMarkerAlt />,
  cin: <FaIdCard />,
  commentaire: <FaCommentDots />,
};

export default function Input({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      <div className="flex items-center border rounded px-3 py-2 bg-white focus-within:ring-2 ring-primary transition">
        <span className="text-gray-500 mr-2">{iconMap[name]}</span>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm resize-none"
            rows={3}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm"
            value={value}
            onChange={onChange}
            required={required}
          />
        )}
      </div>
    </div>
  );
}
