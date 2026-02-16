"use client";

import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import ProductFormModal from "../components/ProductFormModal";

// Service functions using fetch
const API_URL = "https://farmaconnect-backend.onrender.com/api/products";

const getProducts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json(); // returns array or { data: [...] }
};

const createProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};

const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
};

const deleteProductAPI = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
    category_id: "",
    name: "",
    brand: "",
    manufacturer: "",
    image: "",
    price: "",
    discount: "",
    stock: "",
    availability: "in stock",
    isNew: false,
    requiresPrescription: false,
    dosageForm: "",
    strength: "",
    usage: "",
    expiryDate: "",
    barcode: "",
    batch_number: "",
    description: "",
  });

  // Fetch products from backend
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts();
      // Adjust if backend returns { data: [...] }
      setProducts(res.data || res);
    } catch (error) {
      console.error(error);
      showToast("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Categories for filter
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category?.name || "Uncategorized");
    return ["All", ...new Set(cats)];
  }, [products]);

  // Filtered products
  const filtered = useMemo(() => {
    let temp = [...products];
    if (filterCategory !== "All")
      temp = temp.filter((p) => p.category?.name === filterCategory);
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

  // Open Add Product Modal
  const openAdd = () => {
    setMode("add");
    setCurrentId(null);
    setForm({
      category_id: "",
      name: "",
      brand: "",
      manufacturer: "",
      image: "",
      price: "",
      discount: "",
      stock: "",
      availability: "in stock",
      isNew: false,
      requiresPrescription: false,
      dosageForm: "",
      strength: "",
      usage: "",
      expiryDate: "",
      barcode: "",
      batch_number: "",
      description: "",
    });
    setOpen(true);
  };

  // Open Edit Product Modal
  const openEdit = (product) => {
    setMode("edit");
    setCurrentId(product.id);
    setForm({
      ...product,
      category_id: product.category_id || "",
    });
    setOpen(true);
  };

  // Open Details Modal
  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  // Show Toast
  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2500);
  };

  // Save product (add or edit)
  const saveProduct = async () => {
    if (!form.name || !form.price) {
      showToast("Please fill required fields!");
      return;
    }

    try {
      if (mode === "add") {
        await createProduct(form);
        showToast("Product added successfully!");
      } else {
        await updateProduct(currentId, form);
        showToast("Product updated successfully!");
      }
      setOpen(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
      showToast("Error saving product");
    }
  };

  // Delete product
  const deleteProduct = (id) => {
    setConfirmDelete({ visible: true, id });
  };

  const confirmDeleteProduct = async () => {
    try {
      await deleteProductAPI(confirmDelete.id);
      showToast("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      showToast("Error deleting product");
    }
    setConfirmDelete({ visible: false, id: null });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex gap-2">
          <input
            placeholder="Search..."
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
              <option key={c}>{c}</option>
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

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <div>
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
      )}

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
          {page} / {totalPages || 1}
        </span>
        <button
          className="px-3 py-1 border rounded"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
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
    </div>
  );
}
