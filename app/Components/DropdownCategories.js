"use client";

import { useState } from "react";
import DropdownSubCategory from "./DropdownSubCategory";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

export default function DropdownCategories({
  className = "absolute bg-white flex flex-col w-[200px] p-4 mt-2 shadow-defaultCard z-56",
}) {
  const [openSub, setOpenSub] = useState(null);

  const categories = [
    { name: "Médicaments", sub: [] },
    { name: "Homeopathic", sub: [] },
    { name: "Parapharmacie", sub: [] },
    { name: "Compléments alimentaires", sub: [] },
    { name: "Beauté Soins", sub: [] },
    { name: "Bébé Maman", sub: [] },
    { name: "Bio Médecines naturelles", sub: [] },
    { name: "Matériel médical", sub: [] },
    { name: "Promotion", sub: [] },
  ];

  return (
    <div className={className}>
      {categories.map((category, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenSub(openSub === index ? null : index)}
            className="flex items-center justify-between w-full py-1 text-left text-textLight hover:bg-gray-100 gap-1"
          >
            <Link
              href={`/categories?category=${encodeURIComponent(category.name)}`}
            >
              {category.name}
            </Link>
            {category.sub.length > 0 && (
              <span>
                <FaAngleDown />
              </span>
            )}
          </button>

          {openSub === index && category.sub.length > 0 && (
            <DropdownSubCategory subcategories={category.sub} />
          )}
        </div>
      ))}
    </div>
  );
}
