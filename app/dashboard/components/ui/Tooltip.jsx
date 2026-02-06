"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ show, text }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2
                     bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
