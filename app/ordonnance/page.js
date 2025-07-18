"use client";

import { useState } from "react";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/Input";

export default function OrdonnancePage() {
  const [formData, setFormData] = useState({
    nom: "",
    tel: "",
    adresse: "",
    cin: "",
    commentaire: "",
    ordonnance: null,
    carte: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demande envoyée. Nous vous contacterons sous peu.");
  };

  return (
    <div className="py-[100px] px-4 sm:px-[32px] lg:px-[120px] bg-gradient-to-br from-white via-blue-50 to-violet-100">
      <h1 className="text-2xl font-bold mb-20 text-primary">
        Demande de médicament sur ordonnance
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Colonne 1: Infos personnelles */}
        <div className="space-y-4">
          <FormInput
            name="nom"
            label="Nom complet (identique à la carte)"
            placeholder="Ex: Fatima Ben Salah"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <FormInput
            name="tel"
            label="Numéro de téléphone"
            type="tel"
            placeholder="Ex: +216 XX XXX XXX"
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <FormInput
            name="adresse"
            label="Adresse complète"
            placeholder="Ex: Rue de la santé, Tunis"
            value={formData.adresse}
            onChange={handleChange}
            required
          />
          <FormInput
            name="cin"
            label="Numéro de la carte d'identité (CIN)"
            placeholder="Ex: 01234567"
            value={formData.cin}
            onChange={handleChange}
            required
          />
          <FormInput
            name="commentaire"
            label="Commentaire (optionnel)"
            placeholder="Ajoutez un message si nécessaire"
            value={formData.commentaire}
            onChange={handleChange}
            type="textarea"
          />
        </div>

        {/* Colonne 2: Upload fichiers */}
        <div className="space-y-6">
          {/* Ordonnance */}
          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <label className="block font-medium mb-2 text-gray-700">
              📄 Ordonnance médicale{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="file"
              name="ordonnance"
              accept="image/*"
              onChange={handleChange}
              className="block mx-auto mt-2"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Format accepté : JPG, PNG, PDF
            </p>
          </div>

          {/* Carte d'identité */}
          <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <label className="block font-medium mb-2 text-gray-700">
              🆔 Carte d'identité nationale{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="file"
              name="carte"
              accept="image/*"
              onChange={handleChange}
              className="block mx-auto mt-2"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Nom identique à celui de l’ordonnance
            </p>
          </div>
        </div>

        <div className="md:col-span-2 mt-6">
          <Button type="submit" className="text-white px-6 py-2">
            Envoyer la demande
          </Button>
        </div>
      </form>
    </div>
  );
}
