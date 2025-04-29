import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { products } from "../categories/data";
import Card from "./Card";

export default function ProductSlider({ product }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const filtered = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
  return (
    <div className="mt-10 relative h-[1000px] ">
      <h2 className="text-black text-[20px] font-bold mb-8">
        D'autres ont aussi regardé
      </h2>

      {/* أزرار التحكم */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
      >
        <BsChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
      >
        <BsChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth py-4"
      >
        {filtered.map((item) => (
          <div key={item.id} className="min-w-[250px] flex-shrink-0">
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
  );
}
