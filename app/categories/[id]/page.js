"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import { products } from "../data";
import Button from "@/app/components/Button";
import Favorite from "@/app/components/Favorite";
import { MdDiscount, MdOutlineAddShoppingCart } from "react-icons/md";
import Card from "@/app/components/Card";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const [selectedBrand, setSelectedBrand] = useState("");
  const marque = [...new Set(products.map((product) => product.marque))];

  const filteredProducts = selectedBrand
    ? products.filter((product) => product.marque === selectedBrand)
    : products;

  if (!product) return <p> nothing</p>;
  return (
    <div className="flex flex-col lg:mx-[100px] mx-[8px] ">
      <div className="px-8 py-8">
        <a
          href="/categories"
          className="text-black hover:underline font-semibold"
        >
          Categories /
        </a>
        <span className="text-black hover:underline font-semibold">
          {" "}
          {product.category} /{" "}
        </span>
        <span className="ml-1 text-textLight">
          {" "}
          {product.marque} | {product.nom}{" "}
        </span>
      </div>

      <div className="flex flex-wrap  self-stretch gap-10 lg:gap-32 ">
        <div>
          <div className="absolute items-center">
            <Button
              variant="secondary"
              className="flex items-center gap-2 rounded-bl-none"
            >
              <MdDiscount />
              {product.reduction}%
            </Button>
          </div>
          <img
            src={product.image}
            alt="Book 1"
            className="self-stretch  rounded-2xl shadow-defaultCard md:max-w-[400px]  min-w-[200px] "
          />
        </div>
        <div className="py-4 flex flex-col gap-4">
          <div>
            <p className=" text-neutral-400 text-sm font-semibold">
              {" "}
              {product.marque}{" "}
            </p>
            <h1 className="self-stretch  text-black text-[16px] font-bold ">
              {product.nom}{" "}
            </h1>
          </div>
          <div>
            <p className="max-w-[270px] lg:max-w-[400px]  text-left text-[14px] ">
              {product.Description}
            </p>
          </div>
          <div className="">
            <p className="text-neutral-400 text-sm line-through">
              {product.discount}{" "}
            </p>
            <p className="text-black text-[18px] font-bold"> {product.prix} </p>
          </div>
          <div>
            <p className="text-black text-sm font-medium">{product.nouveaux}</p>
            <p className="text-neutral-400 text-base font-medium">
              {product.rupture}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              -
              <p className="border-2 border-textLight px-4 text-textLight">1</p>
              +
            </div>
            <Button variant="primary" className="flex items-center gap-2">
              <MdOutlineAddShoppingCart />
              Ajouter
            </Button>
            <Favorite />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-center justify-center text-black text-3xl font-semibold">
          D'autres ont aussi regardé
        </h2>
        <div className="flex flex-row">
          {products
            .filter(
              (item) =>
                item.category === product.category && item.id !== product.id
            )
            .map((item) => (
              <div>
                <Card
                  id={item.id}
                  marque={item.marque}
                  nom={item.nom}
                  prix={item.prix}
                  discount={item.discount}
                  image={item.image}
                  nouveaux={item.nouveaux}
                  rupture={item.rupture}
                  reduction={item.reduction}
                  Description={item.Description}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
