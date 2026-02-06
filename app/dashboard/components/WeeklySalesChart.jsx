"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { day: "Mon", sales: 120 },
  { day: "Tue", sales: 210 },
  { day: "Wed", sales: 180 },
  { day: "Thu", sales: 260 },
  { day: "Fri", sales: 300 },
];

export default function WeeklySalesChart() {
  const loading = false;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-xl shadow-sm lg:max-w-120"
    >
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Weekly Sales
      </h3>

      {loading ? (
        <Skeleton className="h-62.5 w-full" />
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <ReTooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </motion.div>
  );
}
