"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedNumber from "./ui/AnimatedNumber";
import Tooltip from "./ui/Tooltip";
import Skeleton from "./ui/Skeleton";

export default function StatCard({ title, value, trend, prefix }) {
  const [hovered, setHovered] = useState(false);
  const loading = false; // لاحقاً من API

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="relative bg-white p-4 rounded-xl shadow-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tooltip show={hovered} text={`Trend: ${trend}`} />

      <p className="text-sm text-gray-500">{title}</p>

      <div className="flex items-center justify-between mt-3">
        {loading ? (
          <Skeleton className="h-8 w-24" />
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">
            <AnimatedNumber value={value} prefix={prefix} />
          </h2>
        )}

        <span className="text-sm text-green-600 font-medium">
          {trend}
        </span>
      </div>
    </motion.div>
  );
}
