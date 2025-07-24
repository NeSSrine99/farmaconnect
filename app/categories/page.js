"use client";
import React, { useState, useEffect } from "react";
import { products } from "../categories/data";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "./components/CategoryFilter";
import { FaChevronRight, FaHome } from "react-icons/fa";
import Card from "../components/Card";

const Categories = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [selectedBrand, setSelectedBrand] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [itemsPerClick, setItemsPerClick] = useState(8);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4);
        setItemsPerClick(4);
      } else {
        setVisibleCount(8);
        setItemsPerClick(8);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const marque = [...new Set(products.map((product) => product.marque))];

  const filteredProducts = products.filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchBrand = selectedBrand ? product.marque === selectedBrand : true;
    return matchCategory && matchBrand;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleVoirPlus = () => {
    setVisibleCount((prev) => prev + itemsPerClick);
  };

  return (
    <div className="w-full ">
      <nav
        className="flex items-center justify-center pt-20"
        aria-label="breadcrumb"
      >
        <ol className="flex items-center flex-wrap gap-2">
          <li>
            <a
              href="/"
              className="text-primary hover:text-hoverButtonPrimary transition flex items-start justify-center gap-1 font-medium"
            >
              <FaHome className="w-4 h-4" />
            </a>
          </li>
          <FaChevronRight className="text-gray-400 w-3 h-3" />
          <li>
            <a
              href="/categories"
              className="text-primary hover:text-hoverButtonPrimary transition font-medium"
            >
              Catégories
            </a>
          </li>
          {category && (
            <>
              <FaChevronRight className="text-gray-400 w-3 h-3" />
              <li>
                <span className="text-gray-700 font-medium">{category}</span>
              </li>
            </>
          )}
        </ol>
      </nav>

      <main className="flex flex-col items-center py-10  w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <CategoryFilter />
        </div>

        {/* Products */}
        <div className="flex items-center  py-10  ">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl mx-auto">
            {visibleProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Voir Plus button */}
        {visibleCount < filteredProducts.length && (
          <button
            onClick={handleVoirPlus}
            className="mt-6 px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition"
          >
            Voir plus
          </button>
        )}
      </main>

      {/* Chat icon */}
      <div className="fixed bottom-1/6 right-1 z-50">
        <BsFillChatQuoteFill
          size={70}
          color="white"
          className="rounded-full p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,#4DDEE5_77deg,_#138086_334deg)] shadow-defaultCard"
        />
      </div>
    </div>
  );
};

export default Categories;
