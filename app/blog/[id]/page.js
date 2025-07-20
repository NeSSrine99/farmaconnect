"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogDetails() {
  return (
    <section className="min-h-screen bg-[#f9fafb] py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sky-700 font-medium hover:underline text-sm mb-8"
        >
          <FaArrowLeft />
          Retour au blog
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight mb-4">
          5 conseils pour renforcer votre système immunitaire
        </h1>
        <div className="text-sm text-gray-500 mb-8 flex gap-4">
          <span>Par Dr. Lina B.</span>
          <span>18 Juillet 2025</span>
          <span className="bg-sky-100 text-sky-700 px-2 py-0.5 rounded">
            Santé
          </span>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-[400px] relative mb-10 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/blog/immune.jpg"
            alt="Immune System"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-sky-900 prose-strong:text-sky-800 prose-a:text-sky-700">
          <p>
            Un système immunitaire fort est essentiel pour se protéger contre
            les maladies. Dans cet article, nous allons vous donner 5 conseils
            simples pour améliorer naturellement vos défenses immunitaires.
          </p>

          <h2>1. Adoptez une alimentation équilibrée</h2>
          <p>
            Les fruits et légumes sont riches en antioxydants qui aident votre
            corps à lutter contre les infections. Pensez aussi aux vitamines C,
            D et au zinc.
          </p>

          <h2>2. Dormez suffisamment</h2>
          <p>
            Un bon sommeil renforce le système immunitaire. Essayez de dormir au
            moins 7 à 8 heures par nuit.
          </p>

          <h2>3. Faites de l'exercice régulièrement</h2>
          <p>
            L'activité physique modérée stimule la circulation et améliore les
            fonctions immunitaires.
          </p>

          <h2>4. Gérez votre stress</h2>
          <p>
            Le stress chronique affaiblit vos défenses naturelles. La
            méditation, la respiration profonde ou le yoga peuvent aider.
          </p>

          <h2>5. Utilisez des compléments si nécessaire</h2>
          <p>
            Dans certains cas, des compléments peuvent être utiles. Parlez-en à
            votre pharmacien pour choisir les bons produits.
          </p>

          <p>
            <strong>Conclusion :</strong> Adopter ces bonnes habitudes peut
            réellement faire la différence pour votre santé au quotidien.
          </p>
        </article>
      </div>
    </section>
  );
}
