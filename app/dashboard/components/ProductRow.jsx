"use client";

import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

export default function ProductRow({
  product,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Checkbox */}
      <td className="px-4 py-3">
        <input type="checkbox" />
      </td>

      {/* Product */}
      <td className="px-4 py-3 flex items-center gap-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-12 rounded-lg object-contain bg-gray-100"
        />
        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-xs text-gray-500">{product.brand}</p>
        </div>
      </td>

      {/* Price */}
      <td className="px-4 py-3 font-medium">
        {product.price}
      </td>

      {/* Stock */}
      <td className="px-4 py-3">
        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
          In Stock
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <select
          className="border rounded px-2 py-1 text-sm"
          defaultValue="Active"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <button
            onClick={() => onView(product)}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <FiEye />
          </button>

          <button
            onClick={() => onEdit(product)}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <FiEdit />
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="p-2 border rounded hover:bg-red-100 text-red-600"
          >
            <FiTrash2 />
          </button>
        </div>
      </td>
    </tr>
  );
}
