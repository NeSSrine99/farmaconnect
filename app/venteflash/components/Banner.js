import Image from "next/image";
import { FaBolt } from "react-icons/fa";

export default function VenteFlashBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-pink-200 via-sky-100 to-white text-gray-800 rounded-xl overflow-hidden my-10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
      {/* content*/}
      <div className="z-10 max-w-xl">
        <span className="inline-block bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Offre Limitée
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-pink-500">
          Jusqu’à <span className="text-secondary">-60%</span> sur nos
          best-sellers
          {/* <FaBolt className="text-yellow-500 animate-ping" /> */}
        </h2>
        <p className="text-md md:text-lg mb-6 text-gray-700">
          Valable jusqu'au <strong>21 Juillet</strong> – Dépêchez-vous, stock
          limité !
        </p>
        <button className="bg-secondary hover:bg-hoverButtonSecondary text-white font-semibold px-6 py-2 rounded-md transition">
          Voir les Offres
        </button>
      </div>

      {/* produit vedette */}
      <div className="relative w-[240px] h-[260px] flex-shrink-0 bg-white rounded-xl shadow-xl p-4 flex flex-col items-center justify-center">
        <Image
          src="/cardImgs/HydranceLightHydrating.jpeg"
          alt="Produit Vedette"
          width={160}
          height={160}
          className="object-contain mb-4"
        />
        <p className="text-sm font-medium text-gray-600 text-center">
          Produit Vedette <br />
          <span className="text-secondary font-bold">-60%</span>
        </p>
      </div>
    </section>
  );
}
