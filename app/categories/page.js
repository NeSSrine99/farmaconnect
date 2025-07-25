"use client";

import React, { useState, useEffect } from "react";
import { products } from "../categories/data";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "./components/CategoryFilter";
import { FaChevronRight, FaHome } from "react-icons/fa";
import Card from "../components/Card";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* ... breadcrumb nav ... */}

      <main className="flex flex-col items-center py-10  w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <CategoryFilter />
        </div>

        {/* Products with animation */}
        <div className="flex items-center py-10">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {visibleProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <Card {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
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
