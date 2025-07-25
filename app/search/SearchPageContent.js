"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../categories/data";
import Card from "../components/Card";

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) => {
    const nom = product.nom?.toLowerCase() || "";
    const marque = product.marque?.toLowerCase() || "";
    const category = product.category?.toLowerCase() || "";
    return (
      nom.includes(query) || marque.includes(query) || category.includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-100 p-[100px] lg:px-[120px] sm:px-[35px] px-4 ">
      {" "}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold  text-gray-400 tracking-tight">
          Résultats pour :{" "}
          <span className="text-textDark italic">"{query}"</span>
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="mt-20 flex flex-col items-center  gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <img
              src="/no-results.svg"
              alt="No results"
              className="w-52 h-52 mb-6 opacity-80"
            />
            <p className="text-lg text-gray-600">
              Aucun produit trouvé pour "<strong>{query}</strong>"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
