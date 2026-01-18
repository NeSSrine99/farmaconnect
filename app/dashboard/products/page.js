"use client";

import React, { useMemo, useState } from "react";
import { products as initialProducts } from "../../data/products";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import ProductFormModal from "../components/ProductFormModal";

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [currentId, setCurrentId] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const [toast, setToast] = useState({ visible: false, message: "" });

  const [confirmDelete, setConfirmDelete] = useState({
    visible: false,
    id: null,
  });

  const [form, setForm] = useState({
    brand: "",
    name: "",
    price: "",
    discount: 0,
    image: "",
    availability: "In Stock",
    description: "",
    category: "Medicine",
    rating: 0,
    reviews: 0,
    ingredients: "",
    usage: "",
    dosageForm: "",
    expiryDate: "",
    requiresPrescription: false,
    ageRestriction: "",
    sideEffects: "",
    warning: "",
    storage: "",
  });

  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, [products]);

  const filtered = useMemo(() => {
    let temp = [...products];
    if (filterCategory !== "All")
      temp = temp.filter((p) => p.category === filterCategory);

    if (search)
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );

    return temp;
  }, [products, search, filterCategory]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const openAdd = () => {
    setMode("add");
    setForm({
      brand: "",
      name: "",
      price: "",
      discount: 0,
      image: "",
      availability: "In Stock",
      description: "",
      category: "Medicine",
      rating: 0,
      reviews: 0,
      ingredients: "",
      usage: "",
      dosageForm: "",
      expiryDate: "",
      requiresPrescription: false,
      ageRestriction: "",
      sideEffects: "",
      warning: "",
      storage: "",
    });
    setOpen(true);
  };

  const openEdit = (product) => {
    setMode("edit");
    setCurrentId(product.id);
    setForm({
      ...product,
      ingredients: product.ingredients.join(","),
      sideEffects: product.sideEffects.join(","),
    });
    setOpen(true);
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2500);
  };

  const saveProduct = () => {
    if (!form.name || !form.price || !form.image) {
      showToast("Please fill name, price and image!");
      return;
    }

    if (mode === "add") {
      const newProduct = {
        id: products.length + 1,
        ...form,
        ingredients: form.ingredients.split(","),
        sideEffects: form.sideEffects.split(","),
        reviewsList: [],
      };
      setProducts([newProduct, ...products]);
      showToast("Product added successfully!");
    } else {
      const updated = products.map((p) =>
        p.id === currentId
          ? {
              ...form,
              ingredients: form.ingredients.split(","),
              sideEffects: form.sideEffects.split(","),
            }
          : p,
      );
      setProducts(updated);
      showToast("Product updated successfully!");
    }
    setOpen(false);
  };

  const deleteProduct = (id) => {
    setConfirmDelete({ visible: true, id });
  };

  const confirmDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== confirmDelete.id));
    setConfirmDelete({ visible: false, id: null });
    showToast("Product deleted successfully!");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <div className="flex gap-2">
          <input
            placeholder="Search products..."
            className="border p-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            onClick={openAdd}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="">
        {paginated.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onOpenDetails={openDetails}
            onEdit={openEdit}
            onDelete={deleteProduct}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          className="px-3 py-1 border rounded"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="px-3 py-1 border rounded">
          {page} / {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* Modal Details */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Confirm Delete */}
      {confirmDelete.visible && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this product?
            </p>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={() => setConfirmDelete({ visible: false, id: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={confirmDeleteProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      <ProductFormModal
        open={open}
        mode={mode}
        form={form}
        setForm={setForm}
        onClose={() => setOpen(false)}
        onSave={saveProduct}
      />

      {/* Toast */}
      {toast.visible && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          {toast.message}
        </div>
      )}
    </div>
  );
}
