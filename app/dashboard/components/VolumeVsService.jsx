"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", volume: 1200, service: 900 },
  { name: "Feb", volume: 1400, service: 1000 },
  { name: "Mar", volume: 1100, service: 850 },
  { name: "Apr", volume: 1600, service: 1200 },
  { name: "May", volume: 1500, service: 1100 },
];

export default function VolumeVsService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-5 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        Volume vs Service Level
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        Orders vs delivery capacity
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          <Bar dataKey="service" fill="#22c55e" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
