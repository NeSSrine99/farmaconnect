import { FaBolt, FaClock } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

export default function Highlights() {
  return (
    <section className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="bg-white rounded-lg shadow-md p-6">
        <FaClock className="text-primary text-3xl mb-2 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Offres limitées</h3>
        <p className="text-gray-600">
          Les remises expirent bientôt, profitez-en vite !
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <MdOutlineHealthAndSafety className="text-green-600 text-3xl mb-2 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Produits sûrs</h3>
        <p className="text-gray-600">
          Produits sélectionnés avec soin pour votre bien-être.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <FaBolt className="text-yellow-500 text-3xl mb-2 mx-auto" />
        <h3 className="font-bold text-lg mb-2">Prix imbattables</h3>
        <p className="text-gray-600">Jusqu'à -50% sur des articles phares.</p>
      </div>
    </section>
  );
}
