import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { LiaStarHalfAltSolid } from "react-icons/lia";

const HomeSection1 = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 px-4 py-6 bg-[#E9FBFC] rounded-xl shadow-sm">
      {/* Location */}
      <div className="flex items-center gap-4 max-w-xs">
        <GrMapLocation size={32} className="text-teal-600" />
        <p className="text-sm font-medium text-gray-800">
          Pharmacie installée en Normandie
        </p>
      </div>

      {/* Products */}
      <div className="flex items-center gap-4 max-w-xs">
        <MdOutlineHealthAndSafety size={32} className="text-teal-600" />
        <p className="text-sm font-medium text-gray-800">
          25 000 médicaments et produits de santé
        </p>
      </div>

      {/* Delivery */}
      <div className="flex items-center gap-4 max-w-xs">
        <TbTruckDelivery size={32} className="text-teal-600" />
        <p className="text-sm font-medium text-gray-800">
          Livraison et expédition en 24h en Nice
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-4 max-w-xs">
        <div className="flex flex-col items-center text-yellow-500">
          <span className="text-sm font-semibold text-gray-800">4.9</span>
          <div className="flex">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <LiaStarHalfAltSolid />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-800">
          Moyenne de 4.9 sur 58 098 avis
        </p>
      </div>
    </div>
  );
};

export default HomeSection1;
