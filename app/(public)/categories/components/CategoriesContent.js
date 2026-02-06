"use client";

import React, { useState, useEffect } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import CategoryFilter from "./CategoryFilter";
import Card from "@shared/Card";

const CategoriesContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [itemsPerClick, setItemsPerClick] = useState(8);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/products`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        console.log("Products:", data); 
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  // Update visibleCount on resize
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

  // Unique brands for filter
  const brands = [...new Set(products.map((product) => product.brand))];

  // Filter products by category and brand
  const filteredProducts = products.filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    return matchCategory && matchBrand;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleVoirPlus = () => {
    setVisibleCount((prev) => prev + itemsPerClick);
  };

  if (loading) return <p className="text-center py-20">Loading products...</p>;

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-col items-center justify-center w-full py-10">
        <CategoryFilter
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      </div>

      {/* Products grid */}
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

      {/* Chat icon */}
      <div className="fixed bottom-1/6 right-1 z-50">
        <BsFillChatQuoteFill
          size={70}
          color="white"
          className="rounded-full p-3 bg-\[conic-gradient\(from_180deg_at_50\.00\%_50\.00\%\,\#4DDEE5_77deg\,_\#138086_334deg\)\] {
    background-image: conic-gradient(from 180deg at 50.00% 50.00%,#4DDEE5 77deg, #138086 334deg) shadow-defaultCard"
        />
      </div>
    </div>
  );
};

export default CategoriesContent;
