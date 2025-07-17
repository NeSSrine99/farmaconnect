"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./Button";

export default function SanteConseilsSection() {
  return (
    <section className="bg-white py-[100px] lg:px-[120px] sm:px-[32px] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-20 ">
          Nos conseils santé
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Carte 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <Image
              src="/cardImgs/CeraveHydratant.jpeg"
              alt="Advil"
              width={300}
              height={150}
              className="object-contain rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Comment choisir son Advil - Nos conseils
            </h3>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-auto w-fit">
              Lire le dossier
            </button>
          </div>

          {/* Carte 2 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/contact.jpeg"
              alt="Pharmacienne"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                Conseils
              </h3>
              <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                <li>Nous acceptons les ordonnances médicales</li>
                <li>Commandez vos médicaments manquants en toute sécurité –</li>
                <li>Traitement confidentiel & sécurisé</li>
                <li>Réponse dans un délai de 60 à 90 minutes</li>
              </ul>
              <Link href="/ordonnance">
                <Button className="mt-6 cursor-pointer bg-orange-500">
                  Demander un médicament
                </Button>
              </Link>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <div className="p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Besoin d'un conseil personnalisé ?
              </h3>
              <p className="text-sm text-gray-600">
                Nos pharmaciens sont là pour répondre à vos questions.
              </p>
            </div>
            <div className="bg-orange-300 p-6 rounded-b-lg space-y-3 text-white">
              <button className="flex items-center gap-2 font-medium hover:underline">
                <FaPhoneAlt /> Faites-vous rappeler
              </button>
              <button className="flex items-center gap-2 font-medium hover:underline">
                <FaEnvelope /> Envoyer un mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
