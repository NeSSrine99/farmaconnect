"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import { products } from "../categories/data";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import DropdownCategories from "../components/DropdownCategories";
import { FaChevronRight, FaHome } from "react-icons/fa";

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
    <div className="px-4 mb-[100px]">
      <nav
        className="px-10 py-20 text-sm text-gray-600"
        aria-label="breadcrumb"
      >
        <ol className="flex items-center flex-wrap gap-2">
          {/* Home */}
          <li>
            <a
              href="/"
              className="text-primary hover:text-hoverButtonPrimary transition flex items-start justify-center gap-1 font-medium"
            >
              <FaHome className="w-4 h-4" />
              Accueil
            </a>
          </li>

          <FaChevronRight className="text-gray-400 w-3 h-3" />

          {/* Catégories */}
          <li>
            <a
              href="/categories"
              className="text-primary hover:text-hoverButtonPrimary transition font-medium"
            >
              Catégories
            </a>
          </li>

          <FaChevronRight className="text-gray-400 w-3 h-3" />

          {/* Nom catégorie */}
          <li>
            <span className="text-gray-700 font-medium">{category}</span>
          </li>

          <FaChevronRight className="text-gray-400 w-3 h-3" />

          {/* Marque & nom */}
          {/* <li className="text-gray-500 font-normal truncate"></li> */}
        </ol>
      </nav>
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

        <div className="  fixed bottom-1/6 right-1 z-50">
          <BsFillChatQuoteFill
            size={70}
            color="white"
            className="rounded-full p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,#4DDEE5_77deg,_#138086_334deg)] shadow-defaultCard"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
