import { products } from "../../categories/data";
import Card from "../../components/Card";

export default function ProductList() {
  const flashProducts = products.filter((product) => product.reduction);

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-sky-800">
        Nos produits en promotion
      </h2>

      {flashProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flashProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              nom={product.nom}
              prix={product.prix}
              discount={product.discount}
              image={product.image}
              marque={product.marque}
              nouveaux={product.nouveaux}
              rupture={product.rupture}
              reduction={product.reduction}
              Description={product.Description}
              category={product.category}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Aucun produit en vente flash pour le moment.
        </p>
      )}
    </section>
  );
}
