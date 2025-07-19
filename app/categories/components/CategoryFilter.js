"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCapsules,
  FaLeaf,
  FaHeartbeat,
  FaSpa,
  FaBaby,
  FaStar,
  FaBriefcaseMedical,
  FaMedkit,
} from "react-icons/fa";

const categories = [
  { name: "Médicaments", icon: <FaCapsules /> },
  { name: "Homeopathic", icon: <FaLeaf /> },
  { name: "Parapharmacie", icon: <FaHeartbeat /> },
  { name: "Compléments alimentaires", icon: <FaSpa /> },
  { name: "Beauté Soins", icon: <FaStar /> },
  { name: "Bébé Maman", icon: <FaBaby /> },
  { name: "Bio Médecines naturelles", icon: <FaLeaf /> },
  { name: "Matériel médical", icon: <FaBriefcaseMedical /> },
  { name: "Promotion", icon: <FaMedkit /> },
];

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(currentCategory);

  useEffect(() => {
    setActiveCategory(currentCategory);
  }, [currentCategory]);

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-5">
      <div className="flex items-center gap-4 py-4 px-2">
        {categories.map(({ name, icon }) => {
          const isActive = activeCategory === name;

          return (
            <Link
              key={name}
              href={`/products?category=${encodeURIComponent(name)}`}
              className={`relative group w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out text-lg z-10
                ${
                  isActive
                    ? "bg-secondary text-white border-secondary shadow-lg scale-110"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:scale-105"
                }`}
            >
              {icon}

              {/* Tooltip ظاهر فوق الأيقونة عند الهوفر */}
              <span className="absolute z-20 bottom-full mb-2 px-2 py-1 rounded-md bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {name}
              </span>

              {/* تأثير نبض خفيف عند التفعيل */}
              {isActive && (
                <span className="absolute inset-0 bg-secondary opacity-20 rounded-full animate-pulse z-0"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
