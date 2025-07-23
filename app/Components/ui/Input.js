"use client";

import {
  FaUser,
  FaPhoneAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaCommentDots,
  FaHome,
  FaCcMastercard,
} from "react-icons/fa";

const iconMap = {
  nom: (
    <FaUser className="transition-transform duration-300 group-hover:scale-110" />
  ),
  prenom: (
    <FaUser className="transition-transform duration-300 group-hover:scale-110" />
  ),
  tel: (
    <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  address: (
    <FaHome className="transition-transform duration-300 group-hover:scale-110 text-primary " />
  ),
  cin: (
    <FaIdCard className="transition-transform duration-300 group-hover:scale-110" />
  ),
  commentaire: (
    <FaCommentDots className="transition-transform duration-300 group-hover:scale-110" />
  ),
  email: (
    <FaUser className="transition-transform duration-300 group-hover:scale-110" />
  ),
  state: (
    <FaMapMarkerAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  city: (
    <FaMapMarkerAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  postal: (
    <FaMapMarkerAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  phone: (
    <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />
  ),
  cardNumber: (
    <FaIdCard className="transition-transform duration-300 group-hover:scale-110" />
  ),
  expiry: (
    <FaIdCard className="transition-transform duration-300 group-hover:scale-110" />
  ),
  cvv: (
    <FaIdCard className="transition-transform duration-300 group-hover:scale-110" />
  ),
  cart: (
    <FaCcMastercard className="transition-transform duration-300 group-hover:scale-110" />
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
  extraControl = null,
}) {
  return (
    <div className={`flex flex-col gap-1 group ${className}`}>
      <label className="font-semibold text-gray-700 transition-colors group-hover:text-primary">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>

      <div
        className="flex items-center justify-between border border-gray-400 rounded px-4 py-2 bg-white transition-all duration-300 
                   hover:shadow-md focus-within:shadow-lg focus-within:ring-2 ring-primary"
      >
        {/* icon left */}
        <span className="text-gray-500 mr-2">{iconMap[name]}</span>

        {/* input / textarea */}
        <div className="flex-1">
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              className="w-full outline-none text-sm resize-none bg-transparent"
              rows={3}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="w-full outline-none text-sm bg-transparent"
              value={value}
              onChange={onChange}
              required={required}
            />
          )}
        </div>

        {/* checkbox  radio*/}
        {extraControl && (
          <div className="ml-2 accent-primary">{extraControl}</div>
        )}
      </div>
    </div>
  );
}
