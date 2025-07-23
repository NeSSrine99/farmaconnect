// components/Banner.jsx
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import Button from "./ui/Button";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-100 via-white to-sky-100 lg:h-[550px] py-16 lg:py-24">
      {/* خلفية شفافة للصورة */}
      <div className="absolute inset-0 opacity-10 bg-[url('/cardImgs/GelNettoyant.jpeg')] bg-no-repeat bg-cover bg-center" />

      {/* المحتوى */}
      <div className="relative grid md:grid-cols-2 items-center gap-12 px-6 md:px-16 z-10">
        {/* النص */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary bg-violet-100 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <MdLocalShipping className="text-secondary" />
            Livraison 24H disponible
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-snug mb-5">
            Bienvenue chez <span className="text-primary">PharmaConnect</span>
          </h1>

          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Médicaments & produits{" "}
            <span className="text-sky-900 font-semibold">
              parapharmaceutiques
            </span>{" "}
            livrés chez vous avec <strong>sécurité</strong> &{" "}
            <strong>rapidité</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="flex items-center gap-2">
              <FaShoppingCart className="w-5 h-5" />
              Commander maintenant
            </Button>

            <Button variant="tertiary" className="">
              En savoir plus
            </Button>
          </div>
        </div>

        {/* الصورة والعرض */}
        <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
          {/* الترويج */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 px-6 py-3 rounded-full shadow-md flex items-center gap-3 backdrop-blur-sm z-20 border border-violet-200">
            <span className="text-pink-600 font-bold text-lg">🔥 -25%</span>
            <span className="text-gray-700 font-medium text-sm">
              sur les produits hydratants jusqu'au <strong>31 Juillet</strong>
            </span>
          </div>

          {/* إطار دائري مع الصورة */}
          <div className="relative w-72 h-72 rounded-full bg-white/60 backdrop-blur-md shadow-xl flex items-center justify-center ring-4 ring-violet-200">
            <Image
              src="/cardImgs/CrèmeRicheHydratation.jpeg"
              alt="Produit parapharmaceutique"
              fill
              className="object-contain p-6 rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
