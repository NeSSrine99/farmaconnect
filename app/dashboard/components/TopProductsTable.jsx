"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Doliprane 1000mg",
    category: "Pain Relief",
    popularity: 45,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Insulin Injection",
    category: "Diabetes",
    popularity: 32,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Vitamin C",
    category: "Supplements",
    popularity: 18,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Blood Pressure Kit",
    category: "Medical Device",
    popularity: 25,
    color: "bg-orange-500",
  },
];

export default function TopProductsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-5 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Top Medicines
        </h3>
        <button className="text-sm text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="grid grid-cols-12 items-center gap-4"
          >
            {/* Index */}
            <div className="col-span-1 text-sm text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Name */}
            <div className="col-span-4">
              <p className="text-sm font-medium text-gray-800">
                {product.name}
              </p>
              <p className="text-xs text-gray-400">
                {product.category}
              </p>
            </div>

            {/* Popularity Bar */}
            <div className="col-span-5">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${product.popularity}%` }}
                  transition={{ duration: 0.6 }}
                  className={`h-2 rounded-full ${product.color}`}
                />
              </div>
            </div>

            {/* Percentage */}
            <div className="col-span-2 text-right">
              <span className="text-sm font-medium text-gray-600">
                {product.popularity}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
