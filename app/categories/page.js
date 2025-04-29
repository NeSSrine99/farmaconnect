"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import { products } from "../categories/data";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import DropdownCategories from "../components/DropdownCategories";

//@Param

const Categories = () => {
  // fetch information
  const searchParams = useSearchParams();
  // get category information
  const category = searchParams.get("category");

  // Marque selected parte
  // chois brand
  const [selectedBrand, setSelectedBrand] = useState("");
  // fetch brand
  const marque = [...new Set(products.map((product) => product.marque))];

  // filtering product with brands
  const filteredProducts = products.filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchBrand = selectedBrand ? product.marque === selectedBrand : true;
    return matchCategory && matchBrand;
  });

  return (
    <div className="px-4">
      <div className="px-8 py-12">
        <a
          href="/categories"
          className="text-black hover:underline font-semibold"
        >
          Catégories /
        </a>
        <span className="ml-1 text-textLight"> {products.category} </span>
        <span className="ml-1 text-textLight">
          {" "}
          {products.marque} | {products.nom}{" "}
        </span>
      </div>
      <div className="flex gap-4">
        <nav className="nav-hidden  border-r-2 border-textLight px-2  ">
          <DropdownCategories className=" max-w-[120px] " />
          {/* Dropdown الفلترة */}
          {/* <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Brands</option>
            {marque.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select> */}
        </nav>

        <main className="grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-4 p-4 min-w-[300px] pt-8">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card {...product} />
            </div>
          ))}
        </main>

        <aside className="flex items-start min-w-[20px]  max-w-[20px] relative border-l-2 border-textLight ">
          <div className="fixed bottom-6 right-6 z-50">
            <BsFillChatQuoteFill
              size={70}
              color="white"
              className="rounded-full p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,#4DDEE5_77deg,_#138086_334deg)] shadow-defaultCard"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Categories;
