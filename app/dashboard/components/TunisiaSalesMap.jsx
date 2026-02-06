// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl = "/maps/tunisia.json";

// const salesData = {
//   Tunis: 320,
//   Sfax: 210,
//   Sousse: 180,
//   Nabeul: 150,
//   Kairouan: 90,
// };

// const getColor = (value) => {
//   if (value > 250) return "#16a34a"; // high
//   if (value > 150) return "#4ade80"; // medium
//   if (value > 50) return "#93c5fd"; // low
//   return "#e5e7eb"; // no data
// };

// export default function TunisiaSalesMap() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4 }}
//       className="bg-white rounded-xl p-5 shadow-sm relative"
//     >
//       {/* Header */}
//       <h3 className="text-lg font-semibold text-gray-800 mb-1">
//         Sales by Governorate
//       </h3>
//       <p className="text-xs text-gray-400 mb-4">
//         Pharmacy orders across Tunisia
//       </p>

//       {/* Map */}
//       <div className="relative">
//         <ComposableMap
//           projection="geoMercator"
//           projectionConfig={{
//             center: [9.5, 34],
//             scale: 2500,
//           }}
//           className="w-full h-[260px]"
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const name = geo.properties.name;
//                 const value = salesData[name] || 0;

//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     onMouseEnter={(e) => {
//                       setHovered({
//                         name,
//                         value,
//                         x: e.clientX,
//                         y: e.clientY,
//                       });
//                     }}
//                     onMouseLeave={() => setHovered(null)}
//                     style={{
//                       default: {
//                         fill: getColor(value),
//                         outline: "none",
//                       },
//                       hover: {
//                         fill: "#15803d",
//                         outline: "none",
//                       },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>

//         {/* Tooltip */}
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 5 }}
//               className="fixed z-50 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none"
//               style={{
//                 top: hovered.y + 10,
//                 left: hovered.x + 10,
//               }}
//             >
//               <p className="font-medium">{hovered.name}</p>
//               <p>{hovered.value} Orders</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }
