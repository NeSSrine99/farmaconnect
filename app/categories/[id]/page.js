"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import { products } from "../data";
import { MdDiscount, MdOutlineAddShoppingCart } from "react-icons/md";

import { useCart } from "../../context/CartContext";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Button from "@shared/Button";
import Favorite from "@shared/Favorite";
import ProductSlider from "@categories/ProductSlider";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [addedToCart, setAddedToCart] = useState(false);
  const itemInCart = cartItems.find((item) => item.id === product?.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  if (!product) return <p className="text-center py-10">Produit non trouvé</p>;

  return (
    <div className="flex flex-col lg:mx-[100px] mx-[8px] lg:px-[120px] sm:px-[35px] px-4 ">
      {/* Breadcrumb */}
      <nav
        className="flex flex-col items-center   py-20 text-sm text-gray-600"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center flex-wrap gap-2">
          <li>
            <a
              href="/categories"
              className="text-primary font-medium hover:underline"
            >
              Catégories
            </a>
          </li>
          <FaChevronRight className="text-gray-400 w-3 h-3" />
          <li>
            <a
              href={`/categories/${product.category.toLowerCase()}`}
              className="text-primary font-medium hover:underline"
            >
              {product.category}
            </a>
          </li>
          <FaChevronRight className="text-gray-400 w-3 h-3" />
          <li className="text-gray-500 font-normal truncate">
            {product.marque} | {product.nom}
          </li>
        </ol>
      </nav>

      {/* Product Content */}
      <div className="flex flex-wrap gap-10 lg:gap-20 items-start">
        {/* Image & Discount */}
        <div className="relative">
          {product.reduction && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              <MdDiscount className="inline-block mr-1" />
              {product.reduction}%
            </div>
          )}
          <Image
            src={product.image}
            alt={product.nom}
            className="rounded-2xl shadow-md w-full max-w-[400px] object-cover"
            width={400}
            height={400}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4 py-4">
          <div>
            <p className="text-neutral-400 text-sm font-semibold">
              {product.marque}
            </p>
            <h1 className="text-xl font-bold text-black">{product.nom}</h1>
          </div>

          <p className="text-sm leading-relaxed text-gray-700 max-w-xl">
            {product.Description}
          </p>

          <div className="space-y-1">
            <p className="text-neutral-400 text-sm line-through">
              {product.discount}
            </p>
            <p className="text-black text-lg font-bold">{product.prix}</p>
          </div>

          <div className="text-sm">
            <p className="font-medium text-green-600">{product.nouveaux}</p>
            <p className="text-neutral-500">{product.rupture}</p>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 font-semibold">{quantity}</span>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <Button
              variant="primary"
              className="flex items-center gap-2 px-4"
              onClick={() => {
                addToCart(product);
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 2000);
              }}
            >
              <MdOutlineAddShoppingCart />
              {addedToCart ? "Ajouté ✔️" : "Ajouter"}
            </Button>

            <div className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition">
              <Favorite />
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-12">
        <ProductSlider product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
