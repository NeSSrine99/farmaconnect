"use client";

import Link from "next/link";
import { MdOutlineAddShoppingCart, MdDiscount } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Favorite from "./Favorite";
import Button from "./Button";
import Rating from "./Rating";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

export default function Card({
  id,
  marque = "Marque",
  nom = "Nom du produit",
  prix = "19.99 TND",
  discount = "",
  image = "/cardImgs/CetafilEcran.jpeg",
  nouveaux = "",
  rupture = "",
  reduction = null,
  rating = 0,
  reviews = 0,
}) {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
      {/* Image + Réduction */}
      <div className="relative h-40 bg-white flex items-center justify-center">
        <img
          src={image}
          alt={nom}
          className="max-h-full max-w-full object-contain"
        />

        {reduction && (
          <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
            -{reduction}%
          </div>
        )}

        <Favorite className="absolute top-2 right-2" />

        <Link href={`/categories/${id}`}>
          <Button
            className="absolute flex items-center gap-2  bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-sm text-green-700 font-medium px-3 py-1 rounded-md hover:underline"
            variant="ghost"
          >
            <FaRegEye size={14} />
            Voir Plus
          </Button>
        </Link>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div className="text-xs text-gray-500 mb-1">{marque}</div>
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
          {nom}
        </h2>

        {/* Prix et état */}
        <div className="flex justify-between items-center text-sm mt-2">
          <div>
            {discount && (
              <p className="text-gray-400 line-through">{discount}</p>
            )}
            <p className="text-green-700 font-bold">{prix}</p>
          </div>
          <div className="flex items-start  text-gray-500">
            <Rating value={rating} />{" "}
            <p className="text-gray-500">({reviews})</p>
          </div>
        </div>

        {/* Nouveaux / Rupture */}
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span className="text-green-600">{nouveaux}</span>
          <span className="text-red-500">{rupture}</span>
        </div>

        {/* Bouton Ajouter */}
        <Button
          onClick={() => addToCart({ id, nom, prix, image, quantity: 1 })}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-sm"
        >
          <MdOutlineAddShoppingCart />
          Ajouter
        </Button>
      </div>
    </div>
  );
}
