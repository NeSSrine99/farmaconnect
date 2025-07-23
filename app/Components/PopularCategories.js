"use client";

import Link from "next/link";
import { FaBaby, FaLeaf, FaCapsules, FaGift, FaHeart } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const categories = [
  {
    id: 1,
    link: "/categories?category=Médicaments",
    name: "Médicaments",
    icon: <MdOutlineMedicalServices className="text-4xl text-red-500" />,
  },

  {
    id: 3,
    link: "/categories?category=Parapharmacie",
    name: "Parapharmacie",
    icon: <FaHeart className="text-4xl text-pink-500" />,
  },
  {
    id: 4,
    link: "/categories?category=Compléments%20alimentaires",
    name: "Compléments alimentaires",
    icon: <FaCapsules className="text-4xl text-indigo-500" />,
  },
  {
    id: 5,
    link: "/categories?category=Beauté%20Soins",
    name: "Beauté Soins",
    icon: <FaLeaf className="text-4xl text-green-600" />,
  },
  {
    id: 6,
    link: "/categories?category=Bébé%20Maman",
    name: "Bébé Maman",
    icon: <FaBaby className="text-4xl text-pink-400" />,
  },

  {
    id: 9,
    link: "/venteflash",
    name: "Promotion",
    icon: <FaGift className="text-4xl text-yellow-500" />,
  },
];

export default function PopularCategories() {
  return (
    <section className="py-[100px] lg:px-[120px] sm:px-[32px] px-4">
      <h2 className="text-2xl font-bold mb-20 text-sky-800 text-center">
        Catégories Populaires
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {categories.map((cat) => {
          const href = cat.link
            ? cat.link
            : `/categories?category=${encodeURIComponent(cat.name)}`;

          return (
            <Link href={href} key={cat.id}>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition cursor-pointer w-40 h-[120px]">
                {cat.icon}
                <h3 className="mt-4 font-semibold text-sm text-gray-700">
                  {cat.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
