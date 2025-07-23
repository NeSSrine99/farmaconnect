"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./ui/Button";

export default function SanteConseilsSection() {
  return (
    <section className="bg-white py-[100px] lg:px-[120px] sm:px-[32px] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-16">
          Nos conseils santé
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between">
            <Image
              src="/cardImgs/CeraveHydratant.jpeg"
              alt="Advil"
              width={300}
              height={180}
              className="object-contain rounded-lg mb-4 mx-auto"
            />
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Comment choisir son Advil ? Nos conseils simples
            </h3>
            <Link href="/blog/1">
              <Button className="mt-auto self-start">Lire le dossier</Button>
            </Link>
          </div>

          {/*  Carte 2 : Info ordonnances */}
          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg flex flex-col justify-end">
            <Image
              src="/contact.jpeg"
              alt="Pharmacienne"
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="relative z-10 p-6 bg-black/35">
              <h3 className="text-lg font-bold text-primary mb-4">
                Médicaments sur ordonnance
              </h3>
              <ul className="list-disc list-inside text-white text-sm space-y-2">
                <li>Ordonnances médicales acceptées</li>
                <li>Commandez les médicaments manquants</li>
                <li>Confidentialité & sécurité assurées</li>
                <li>Réponse sous 60 à 90 minutes</li>
              </ul>
              <Link href="/ordonnance">
                <Button className="mt-6">Demander un médicament</Button>
              </Link>
            </div>
          </div>

          {/*  Carte 3 : Contact */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full justify-between">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-black mb-2">
                Besoin d'un conseil personnalisé ?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nos pharmaciens sont à votre écoute pour toute question santé ou
                médicament.
              </p>
            </div>
            <div className="bg-orange-500 p-6 rounded-b-xl space-y-3 text-white">
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
