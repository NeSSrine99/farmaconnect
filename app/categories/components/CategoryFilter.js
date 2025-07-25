"use client";

import { useSearchParams, useRouter } from "next/navigation";
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
import { motion, AnimatePresence } from "framer-motion";

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

const activeBgColor = "#7C3AED";

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(currentCategory);

  const router = useRouter();

  useEffect(() => {
    setActiveCategory(currentCategory);
  }, [currentCategory]);

  const handleCategoryClick = (name) => {
    router.push(`/categories?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide px-4 sm:px-6 py-6">
      <div
        className="flex items-center justify-center gap-4 py-3 min-w-max"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.map(({ name, icon }) => {
          const isActive = activeCategory === name;

          return (
            <button
              key={name}
              onClick={() => handleCategoryClick(name)}
              className="relative group flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-gray-300 text-lg z-10 overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* background for active button */}
              {isActive && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: activeBgColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* الأيقونة والنص فوق الخلفية */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-700 group-hover:text-gray-900"
                }`}
              >
                {icon}
              </span>

              {/* hover in tooltip */}
              <span className="absolute z-20 bottom-full mb-2 px-2 py-1 rounded-md bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
