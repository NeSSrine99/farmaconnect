"use client";

import { useSearchParams } from "next/navigation";

import { products } from "../categories/data";
import Card from "../components/Card";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // فلترة المنتجات حسب الاسم أو الماركة أو التصنيف
  const filteredProducts = products.filter((product) => {
    const nom = product.nom?.toLowerCase() || "";
    const marque = product.marque?.toLowerCase() || "";
    const category = product.category?.toLowerCase() || "";
    return (
      nom.includes(query) || marque.includes(query) || category.includes(query)
    );
  });

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-sky-900">
        Résultats pour : <span className="text-violet-600">"{query}"</span>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Aucun produit trouvé.</p>
      )}
    </div>
  );
}
