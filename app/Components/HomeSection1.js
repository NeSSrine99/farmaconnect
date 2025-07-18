import React from "react";
import Rating from "./ui/Rating";
import { GrMapLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { LiaStarHalfAltSolid } from "react-icons/lia";

const HomeSection1 = () => {
  return (
    <div className="flex flex-wrap items-center  justify-between bg-[#E9FBFC] py-4">
      <div className="flex items-center gap-4">
        <GrMapLocation size={35} color="#1799A0" />
        <p className="max-w-[151px] font-medium text-[14px] ">
          Pharmacie installée en Normandie
        </p>
      </div>
      <div className="flex items-center gap-4">
        <MdOutlineHealthAndSafety size={35} color="#1799A0" />
        <p className="max-w-[151px] font-medium text-[14px] ">
          25 000 médicaments et produits de santé
        </p>
      </div>
      <div className="flex items-center gap-4">
        <TbTruckDelivery size={35} color="#1799A0" />
        <p className="max-w-[212px] font-medium text-[14px] ">
          Livraison et expédition en 24h en Nice{" "}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[14px]">4.9</p>
          <div className="flex items-center gap-1">
            <RiStarSFill color="yellow" />
            <RiStarSFill color="yellow" />
            <RiStarSFill color="yellow" />
            <RiStarSFill color="yellow" />
            <LiaStarHalfAltSolid color="yellow" />
          </div>
        </div>
        <p className="max-w-[151px] font-medium text-[14px] ">
          Moyenne de 4.9 sur 58098 avis{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeSection1;
