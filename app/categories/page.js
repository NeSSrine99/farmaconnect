 'use client';
import React, { useState } from 'react';
import Card from '../components/Card';
import { products } from '../categories/data';
import DropdownCategories from '../components/DropdownCategories';
import { BsFillChatQuoteFill } from "react-icons/bs";

const Categories = () => {
  const [ selectedBrand, setSelectedBrand ] = useState('');
    const marque = [...new Set(products.map(product => product.marque))]; 
  
    const filteredProducts = selectedBrand
      ? products.filter(product => product.marque === selectedBrand)
      : products;
  
  return (
    <div className="px-4">
      {/* Dropdown الفلترة */}
      <select
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
      </select>
      <div className="flex  gap-4 ">
        
        <nav className=" w-[20%] md:flex  p-4">
          <DropdownCategories className='' />
        </nav>

        <main className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4  min-w-[300px]">
          {products.map((product) => (
            <div key={product.id}>
              <Card {...product} />
            </div>
          ))}
        </main>

        <aside className=" flex items-start min-w-[80px] relative">
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
