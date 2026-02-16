function ProductForm({ form, setForm, onSave }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="space-y-8">

      {/* Section 1: Basic Info */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Basic Information
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <inputField name="name" label="Product Name" value={form.name} onChange={handleChange} />
          <inputField name="brand" label="Brand" value={form.brand} onChange={handleChange} />
          <inputField name="manufacturer" label="Manufacturer" value={form.manufacturer} onChange={handleChange} />
          <inputField name="category_id" label="Category ID" value={form.category_id} onChange={handleChange} />
        </div>
      </div>

      {/* Section 2: Pricing */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Pricing & Stock
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <inputField name="price" label="Price" type="number" value={form.price} onChange={handleChange} />
          <inputField name="discount" label="Discount %" type="number" value={form.discount} onChange={handleChange} />
          <inputField name="stock" label="Stock" type="number" value={form.stock} onChange={handleChange} />
        </div>

        <div className="flex gap-6 mt-4">
          <Checkbox name="isNew" label="New Product" checked={form.isNew} onChange={handleChange} />
          <Checkbox name="requiresPrescription" label="Requires Prescription" checked={form.requiresPrescription} onChange={handleChange} />
        </div>
      </div>

      {/* Section 3: Medical Info */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Medical Information
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <inputField name="dosageForm" label="Dosage Form" value={form.dosageForm} onChange={handleChange} />
          <inputField name="strength" label="Strength" value={form.strength} onChange={handleChange} />
          <inputField name="expiryDate" label="Expiry Date" type="date" value={form.expiryDate} onChange={handleChange} />
          <inputField name="batch_number" label="Batch Number" value={form.batch_number} onChange={handleChange} />
          <inputField name="barcode" label="Barcode" value={form.barcode} onChange={handleChange} />
          <inputField name="image" label="Image URL" value={form.image} onChange={handleChange} />
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Description
        </h4>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
          placeholder="Write product description..."
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-6">
        <button
          onClick={onSave}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          Save Product
        </button>
      </div>
    </div>
  );
}
