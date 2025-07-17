"use client";

import { products } from "../categories/data";
import Card from "./Card";

export default function NewProductsCarousel() {
  const newProducts = products.filter((product) => product.nouveaux);

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Nouveautés</h2>

      {newProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-4">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] max-w-[250px] snap-start flex-shrink-0"
              >
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Aucun nouveau produit disponible pour le moment.
        </p>
      )}
    </section>
  );
}
