"use client";

import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon,
  color,
  progress,
  bgcolor,
  prefix,
  trend,
  bgicon,
}) {
  // Map Tailwind colors for pharmacy theme
  const bgColors = {
    blue: "bg-red-100",
    green: "bg-orange-100",
    purple: "bg-green-100",
    yellow: "bg-purple-100",
  };

  const textColors = {
    blue: "text-red-500",
    green: "text-orange-500",
    purple: "text-green-500",
    yellow: "text-yellow-500",
  };

  const iconBgColors = {
    blue: "bg-red-700",
    green: "bg-orange-700",
    purple: "bg-green-700",
    yellow: "bg-purple-800",
  };

  const trendColors = {
    positive: "text-green-600",
    negative: "text-red-500",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 20px 25px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col items-start p-4 rounded-2xl ${bgColors[bgcolor] || "bg-gray-100"} shadow-md space-y-4` }
    >
      {/* Icon */}
      <div
        className={`text-xl ${textColors[color] || "text-gray-500"} flex items-center justify-center p-2 ${iconBgColors[bgicon] || "bg-gray-200"} rounded-full`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 ">
        <p className="text-gray-700 font-semibold text-md">{title}</p>
        <div className="flex flex-col items-start gap-2 ">
          <p className="text-2xl font-bold">
            {prefix ? `${prefix}${value}` : value}
          </p>
          {trend && (
            <span
              className={`${trend.startsWith("+") ? trendColors.positive : trendColors.negative} font-medium text-sm`}
            >
              {trend}
            </span>
          )}
        </div>

        {/* Progress bar */}
        {progress !== undefined && (
          <div className=" bg-gray-200  rounded-full overflow-hidden">
            <motion.div
              className={` rounded-full ${textColors[color] || "bg-gray-500"}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2 }}
            ></motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
