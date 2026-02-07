// "use client";

// import Link from "next/link";
// import { MdOutlineAddShoppingCart } from "react-icons/md";
// import { FaRegEye } from "react-icons/fa";
// import Favorite from "./Favorite";
// import Button from "./Button";
// import Rating from "./Rating";
// import { useRouter } from "next/navigation";
// import { useCart } from "../../context/CartContext";
// import { motion, useAnimation } from "framer-motion";
// import { useRef, useState } from "react";
// import Toast from "./Toast";

// export default function Card({
//   id,
//   marque = "Marque",
//   nom = "Nom du produit",
//   prix = "19.99 TND",
//   discount = "",
//   image = "/cardImgs/CetafilEcran.jpeg",
//   nouveaux = "",
//   rupture = "",
//   reduction = null,
//   rating = 0,
//   reviews = 0,
// }) {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const controls = useAnimation();
//   const imageRef = useRef(null);
//   const [toastVisible, setToastVisible] = useState(false);

//   const handleAdd = async () => {
//     addToCart({ id, nom, prix, image, quantity: 1 });

//     setToastVisible(true);

//     const productImg = imageRef.current;
//     const cartIcon = document.getElementById("cart-icon");

//     if (productImg && cartIcon) {
//       const imgRect = productImg.getBoundingClientRect();
//       const cartRect = cartIcon.getBoundingClientRect();

//       const flyingImg = productImg.cloneNode(true);
//       flyingImg.style.position = "fixed";
//       flyingImg.style.left = `${imgRect.left}px`;
//       flyingImg.style.top = `${imgRect.top}px`;
//       flyingImg.style.width = `${imgRect.width}px`;
//       flyingImg.style.height = `${imgRect.height}px`;
//       flyingImg.style.transition = "all 0.8s ease-in-out";
//       flyingImg.style.zIndex = "1000";

//       document.body.appendChild(flyingImg);

//       setTimeout(() => {
//         flyingImg.style.left = `${cartRect.left + cartRect.width / 2}px`;
//         flyingImg.style.top = `${cartRect.top + cartRect.height / 2}px`;
//         flyingImg.style.width = "0px";
//         flyingImg.style.height = "0px";
//         flyingImg.style.opacity = "0";
//       }, 50);

//       setTimeout(() => {
//         document.body.removeChild(flyingImg);
//       }, 900);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         animate={controls}
//         whileHover={{ scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col cursor-pointer"
//       >
//         {/* Product image */}
//         <div className="relative h-40 bg-white flex items-center justify-center">
//           <img
//             ref={imageRef}
//             src={image}
//             alt={nom}
//             className="max-h-full max-w-full object-contain"
//           />

//           {reduction && (
//             <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
//               -{reduction}%
//             </div>
//           )}

//           <Favorite className="absolute top-2 right-2" />

//           <Link href={`/categories/${id}`}>
//             <Button
//               className="absolute flex items-center gap-2 bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-sm text-green-700 font-medium px-3 py-1 rounded-md hover:underline"
//               variant="ghost"
//             >
//               <FaRegEye size={14} />
//               Voir Plus
//             </Button>
//           </Link>
//         </div>

//         {/* Product details */}
//         <div className="p-3 flex flex-col flex-1 justify-between">
//           <div className="text-xs text-gray-500 mb-1">{marque}</div>
//           <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
//             {nom}
//           </h2>

//           <div className="flex justify-between items-center text-sm mt-2">
//             <div>
//               {discount && (
//                 <p className="text-gray-400 line-through">{discount}</p>
//               )}
//               <p className="text-green-700 font-bold">{prix}</p>
//             </div>
//             <div className="flex items-start text-gray-500">
//               <Rating value={rating} />
//               <p className="text-gray-500">({reviews})</p>
//             </div>
//           </div>

//           <div className="flex justify-between text-xs text-gray-500 mt-1">
//             <span className="text-green-600">{nouveaux}</span>
//             <span className="text-red-500">{rupture}</span>
//           </div>

//           <Button
//             onClick={handleAdd}
//             className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-sm"
//           >
//             <MdOutlineAddShoppingCart />
//             Ajouter
//           </Button>
//         </div>
//       </motion.div>

//       {/* Toast message */}
//       <Toast
//         message={`"${nom}" a été ajouté au panier`}
//         duration={3000}
//         visible={toastVisible}
//         onClose={() => setToastVisible(false)}
//       />
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Favorite from "./Favorite";
import Button from "./Button";
import Rating from "./Rating";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import Toast from "./Toast";

export default function Card({
  id,
  brand = "Brand",
  name = "Product Name", 
  price = "0.00 TND", 
  discount = 0, 
  image = "/cardImgs/Bepanthen.jpeg", 
  isNew = false,
  availability = "in stock", 
  rating = 0, 
  reviews = 0, 
}) {
  const { addToCart } = useCart();
  const router = useRouter();
  const controls = useAnimation();
  const imageRef = useRef(null);
  const [toastVisible, setToastVisible] = useState(false);

 
  const reduction =
    discount && price ? Math.round((discount / parseFloat(price)) * 100) : null;

  const nouveaux = isNew ? "New" : "";
  const rupture = availability !== "in stock" ? "Rupture" : "";

  const handleAdd = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    setToastVisible(true);

    // Animation for flying image to cart
    const productImg = imageRef.current;
    const cartIcon = document.getElementById("cart-icon");
    if (productImg && cartIcon) {
      const imgRect = productImg.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      const flyingImg = productImg.cloneNode(true);
      flyingImg.style.position = "fixed";
      flyingImg.style.left = `${imgRect.left}px`;
      flyingImg.style.top = `${imgRect.top}px`;
      flyingImg.style.width = `${imgRect.width}px`;
      flyingImg.style.height = `${imgRect.height}px`;
      flyingImg.style.transition = "all 0.8s ease-in-out";
      flyingImg.style.zIndex = "1000";

      document.body.appendChild(flyingImg);

      setTimeout(() => {
        flyingImg.style.left = `${cartRect.left + cartRect.width / 2}px`;
        flyingImg.style.top = `${cartRect.top + cartRect.height / 2}px`;
        flyingImg.style.width = "0px";
        flyingImg.style.height = "0px";
        flyingImg.style.opacity = "0";
      }, 50);

      setTimeout(() => {
        document.body.removeChild(flyingImg);
      }, 900);
    }
  };

  return (
    <>
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col cursor-pointer"
      >
        {/* Product image */}
        <div className="relative h-40 bg-white flex items-center justify-center">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/products/${image}`}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
          {reduction && (
            <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
              -{reduction}%
            </div>
          )}

          <div className="flex justify-between text-xs text-gray-500 absolute top-2 left-2 mt-1">
            <span className="text-green-600  bg-red-600  ">{nouveaux}</span>
            <span className="text-red-500">{rupture}</span>
          </div>

          <Favorite className="absolute top-2 right-2" />

          <Link href={`/categories/${id}`}>
            <Button
              className="absolute flex items-center gap-2 bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-sm text-green-700 font-medium px-3 py-1 rounded-md hover:underline"
              variant="ghost"
            >
              <FaRegEye size={14} />
              Voir Plus
            </Button>
          </Link>
        </div>

        {/* Product details */}
        <div className="p-3 flex flex-col flex-1 justify-between">
          <div className="text-xs text-gray-500 mb-1">{brand}</div>
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
            {name}
          </h2>

          <div className="flex justify-between items-center text-sm mt-2">
            <div>
              {discount ? (
                <p className="text-gray-400 line-through">{discount} TND</p>
              ) : null}
              <p className="text-green-700 font-bold">{price} TND</p>
            </div>
            <div className="flex items-start text-gray-500">
              <Rating value={rating} />
              <p className="text-gray-500">({reviews})</p>
            </div>
          </div>

          

          <Button
            onClick={handleAdd}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-sm"
          >
            <MdOutlineAddShoppingCart />
            Ajouter
          </Button>
        </div>
      </motion.div>

      {/* Toast message */}
      <Toast
        message={`"${name}" a été ajouté au panier`}
        duration={3000}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}
