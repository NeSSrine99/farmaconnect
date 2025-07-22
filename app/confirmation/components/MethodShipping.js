import React from "react";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";

const methods = [
  {
    id: 1,
    name: "Livraison Standard",
    price: 8.0,
    duration: "1-2 jours",
    icon: <FaTruck className="text-gray-800" />,
  },
  {
    id: 2,
    name: "Livraison Économique",
    price: 2.0,
    duration: "3-5 jours",
    icon: <FaMoneyBillWave className="text-gray-800" />,
  },
];

export default function MethodShipping() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-10 text-primary text-start">
        Méthode de Livraison
      </h2>
      <div className="flex flex-wrap items-start  gap-4">
        {methods.map((method) => {
          return (
            <div
              key={method.id}
              className="max-w-[300px] flex flex-col items-center  border p-4 rounded"
            >
              <div className="flex  items-center gap-2 ">
                {method.icon}
                <p className="text-gray-400 text-[14px]">
                  <span className="text-black font-semibold">
                    ${method.price}{" "}
                  </span>
                  USPS priority with Tracking
                </p>
                <input type="radio" className=" accent-primary" />
              </div>
              <span className="text-gray-600 text-[14px]">
                ({method.duration})
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
