import React from "react";
import Button from "./ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const HomeSection3 = () => {
  return (
    <div className="py-[100px] lg:px-[120px] sm:px-[32px] px-4 ">
      <h2 className="text-2xl font-bold mb-20 text-sky-800 text-center">
        Catégories Populaires
      </h2>
      <div className="relative  ">
        <FaChevronRight
          className="absolute top-1/2 right-4 z-10"
          color="white"
        />
        <FaChevronLeft
          className="absolute top-1/2 left-4 ease-in-out hover:duration-300 z-10"
          color="white"
        />
        <img
          src="https://choudechic.com/cdn/shop/files/vetements-bebe-seconde-main-mode-confort.jpg?v=1740264638&width=3840"
          alt="image"
          className=" self-stretch h-96 w-full "
          height={400}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end sm:flex-row flex-col gap-2 w-full max-w-md">
          <div className="backdrop-blur-md p-4 rounded-md">
            <p className="self-stretch text-center justify-center text-cyan-50 text-base font-semibold  tracking-[2.56px] ">
              OFFRES SPECIALES
            </p>
            <h2 className="self-stretch text-center justify-center text-pink-600 text-4xl font-bold ">
              Produits Des Bébe
            </h2>
            <p className="self-stretch text-center justify-center text-cyan-50 text-base font-normal">
              JUSQU'A
            </p>
            <p className="self-stretch text-center justify-center text-cyan-50 text-4xl font-bold">
              {" "}
              50%
            </p>
            <p className="self-stretch text-center justify-center text-cyan-50 text-base font-normal">
              Du 16 au 30 Juilly
            </p>
          </div>
          <Link href="/venteflash">
            <Button variant="secondary" className="cursor-pointer">
              J'en profite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
