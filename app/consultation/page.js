"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre demande a été envoyée !");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-[#f9fafb] py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-8">
          <FaUserMd size={40} className="text-primary mx-auto mb-2" />
          <h1 className="text-3xl font-bold text-sky-900">
            Consultation & Conseils
          </h1>
          <p className="text-gray-600 mt-2">
            Remplissez le formulaire ci-dessous pour recevoir un avis
            professionnel de notre pharmacien.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sujet de la consultation
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="ex: Allergie, douleurs, supplémentation..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Décrivez votre besoin ou vos symptômes"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Button type="submit">Envoyer la demande</Button>
            <Link href="/ordonnance">
              <Button variant="third" className="flex flex-col items-end">
                Envoyer une ordonnance
                <FaArrowRightLong />
              </Button>
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            🔒 Vos données sont 100% confidentielles et sécurisées.
          </p>
        </form>
      </div>
    </section>
  );
}
