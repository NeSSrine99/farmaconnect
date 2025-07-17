"use client";

import Link from "next/link";
import {
  FaBaby,
  FaLeaf,
  FaCapsules,
  FaHandHoldingMedical,
  FaStethoscope,
  FaGift,
  FaSpa,
  FaHeart,
} from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const categories = [
  {
    id: 1,
    name: "Médicaments",
    icon: <MdOutlineMedicalServices className="text-4xl text-red-500" />,
  },
  {
    id: 2,
    name: "Homeopathic",
    icon: <FaSpa className="text-4xl text-teal-600" />,
  },
  {
    id: 3,
    name: "Parapharmacie",
    icon: <FaHeart className="text-4xl text-pink-500" />,
  },
  {
    id: 4,
    name: "Compléments alimentaires",
    icon: <FaCapsules className="text-4xl text-indigo-500" />,
  },
  {
    id: 5,
    name: "Beauté Soins",
    icon: <FaLeaf className="text-4xl text-green-600" />,
  },
  {
    id: 6,
    name: "Bébé Maman",
    icon: <FaBaby className="text-4xl text-pink-400" />,
  },
  {
    id: 7,
    name: "Bio Médecines naturelles",
    icon: <FaHandHoldingMedical className="text-4xl text-lime-600" />,
  },
  {
    id: 8,
    name: "Matériel médical",
    icon: <FaStethoscope className="text-4xl text-blue-700" />,
  },
  {
    id: 9,
    name: "Promotion",
    icon: <FaGift className="text-4xl text-yellow-500" />,
  },
];

export default function PopularCategories() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-sky-800 text-center">
        Catégories Populaires
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition cursor-pointer"
          >
            <Link href="/medicaments">
              {cat.icon}
              <h3 className="mt-4 font-semibold text-sm text-gray-700">
                {cat.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
