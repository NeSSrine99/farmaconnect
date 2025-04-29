import React from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomeSection3 = () => {
  return (
    <div className="relative">
      <FaChevronRight className="absolute top-1/2 right-4" color="white" />
      <FaChevronLeft
        className="absolute top-1/2 left-4 ease-in-out hover:duration-300"
        color="white"
      />
      <img
        src="https://choudechic.com/cdn/shop/files/vetements-bebe-seconde-main-mode-confort.jpg?v=1740264638&width=3840"
        alt="image"
        className=" self-stretch h-96 w-full "
        height={400}
      />
      <div className="absolute  bottom-32 right-32 backdrop-blur-md p-4 rounded-md">
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
      <Button variant="secondary" className="absolute bottom-8 right-4">
        J'en profite
      </Button>
    </div>
  );
};

export default HomeSection3;
