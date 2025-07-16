import { FaBolt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-white to-violet-100 py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4 flex items-center justify-center gap-3">
        <FaBolt className="text-yellow-500 animate-ping" />
        Vente Flash
      </h1>
      <p className="text-gray-700 text-lg max-w-xl mx-auto">
        Découvrez nos offres <strong>exceptionnelles</strong> pour une durée{" "}
        <span className="text-primary font-semibold">limitée</span>.
      </p>
    </section>
  );
}
