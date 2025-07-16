// components/Banner.jsx
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-r from-violet-100 via-white to-sky-100 lg:h-[550px]  lg:py-20 sm:py-10  ">
      {/* background gradient*/}
      <div className="absolute inset-0 opacity-20 bg-[url('/cardImgs/GelNettoyant.jpeg')] bg-no-repeat" />

      <div className="relative grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-16 z-10">
        {/* المحتوى */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary bg-violet-100 px-3 py-1 rounded-full mb-4">
            <MdLocalShipping className="text-secondary" />
            Livraison 24H disponible
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-tight mb-4">
            Bienvenue chez <span className="text-primary">PharmaConnect</span>
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Médicaments & produits{" "}
            <span className="text-sky-900 font-medium">
              parapharmaceutiques
            </span>{" "}
            livrés chez vous avec <strong>sécurité</strong> &{" "}
            <strong>rapidité</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary  text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 shadow-md hover:scale-105">
              <FaShoppingCart className="w-5 h-5" />
              Commander maintenant
            </Button>

            <Button variant="tertiary" className=" ">
              En savoir plus
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
          <div className="relative w-72 h-72 rounded-full bg-white/60 backdrop-blur-md shadow-lg flex items-center justify-center ring-4 ring-violet-100">
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
