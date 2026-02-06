"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", orders: 400 },
  { month: "Feb", orders: 300 },
  { month: "Mar", orders: 500 },
  { month: "Apr", orders: 450 },
  { month: "May", orders: 600 },
];

export default function MonthlyOrdersChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Monthly Orders
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
