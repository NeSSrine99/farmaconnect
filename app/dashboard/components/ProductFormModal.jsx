"use client";

import { FiX } from "react-icons/fi";

export default function ProductFormModal({ open, mode, form, setForm, onClose, onSave }) {
  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">
            {mode === "add" ? "Add Product" : "Edit Product"}
          </h2>
          <button onClick={onClose}>
            <FiX className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic Info */}
            <Input label="Brand" name="brand" value={form.brand} onChange={handleChange} />
            <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Input label="Price" name="price" type="number" value={form.price} onChange={handleChange} required />
            <Input label="Discount (%)" name="discount" type="number" value={form.discount} onChange={handleChange} />
            
            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="border p-2 rounded col-span-1"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border p-2 rounded col-span-1"
            >
              <option value="Medicine">Medicine</option>
              <option value="Vitamin">Vitamin</option>
              <option value="Supplement">Supplement</option>
            </select>

            <Input label="Rating" name="rating" type="number" value={form.rating} onChange={handleChange} />
            <Input label="Reviews" name="reviews" type="number" value={form.reviews} onChange={handleChange} />

            {/* Image */}
            <Input label="Image URL" name="image" value={form.image} onChange={handleChange} required className="md:col-span-2" />

            {/* Text Areas */}
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2 resize-none"
              rows="3"
            />

            <Input label="Ingredients (comma-separated)" name="ingredients" value={form.ingredients} onChange={handleChange} className="md:col-span-2" />
            
            <textarea
              name="usage"
              placeholder="Usage Instructions"
              value={form.usage}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2 resize-none"
              rows="3"
            />

            <Input label="Dosage Form" name="dosageForm" value={form.dosageForm} onChange={handleChange} />
            <Input label="Expiry Date" name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} />

            <Input label="Age Restriction" name="ageRestriction" value={form.ageRestriction} onChange={handleChange} />
            
            <div className="flex items-center gap-2 border p-2 rounded">
              <input
                type="checkbox"
                name="requiresPrescription"
                checked={form.requiresPrescription}
                onChange={handleChange}
                id="prescription"
              />
              <label htmlFor="prescription">Requires Prescription</label>
            </div>

            <textarea
              name="sideEffects"
              placeholder="Side Effects (comma-separated)"
              value={form.sideEffects}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2 resize-none"
              rows="3"
            />

            <textarea
              name="warning"
              placeholder="Warning"
              value={form.warning}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2 resize-none"
              rows="2"
            />

            <textarea
              name="storage"
              placeholder="Storage Instructions"
              value={form.storage}
              onChange={handleChange}
              className="border p-2 rounded md:col-span-2 resize-none"
              rows="2"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            onClick={onSave}
          >
            {mode === "add" ? "Add" : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small UI Helpers ---------- */

function Input({ label, name, type = "text", value, onChange, required = false, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border p-2 rounded"
        placeholder={label}
      />
    </div>
  );
}
