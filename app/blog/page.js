"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "5 conseils pour renforcer votre système immunitaire",
    excerpt:
      "Découvrez des habitudes simples et des produits recommandés pour booster naturellement vos défenses.",
    image: "/blog/immune.jpeg",
    date: "Juillet 18, 2025",
    author: "Dr. Lina B.",
    category: "Santé",
  },
  {
    id: 2,
    title: "Quelle crème solaire choisir cet été ?",
    excerpt:
      "Tout savoir sur les protections solaires adaptées à chaque type de peau.",
    image: "/blog/sunscreen.jpeg",
    date: "Juillet 12, 2025",
    author: "PharmaConnect",
    category: "Conseils",
  },
  {
    id: 3,
    title: "Comprendre les probiotiques et leurs bienfaits",
    excerpt:
      "Les probiotiques sont essentiels à votre flore intestinale. Apprenez quand et comment les utiliser.",
    image: "/blog/probiotics.jpeg",
    date: "Juillet 05, 2025",
    author: "Pharma Team",
    category: "Nutrition",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#f9fafb] py-[100px] px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-20">
          Articles de Blog
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">
                  {article.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-800">
                  {article.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{article.excerpt}</p>
                <div className="mt-4 flex justify-between text-xs text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                <Link
                  href={`/blog/${article.id}`}
                  className="mt-4 inline-block text-sm text-sky-700 font-medium hover:underline"
                >
                  Lire l'article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
