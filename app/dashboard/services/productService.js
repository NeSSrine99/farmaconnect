// app/dashboard/services/productService.js
const API_URL = "https://farmaconnect-backend.onrender.com/api/products";

export const getProducts = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
};
