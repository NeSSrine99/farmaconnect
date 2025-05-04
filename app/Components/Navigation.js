"use client";

import { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { TiFlash } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser, FaChevronDown, FaAngleDown, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownCategories from "./DropdownCategories";
import Button from "./Button";
import ShoppingCart from "./ShoppingCart";
import CartIcon from "./CartShoppingIcon";

export default function Navbar() {
  const [openCategories, setOpenCategories] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ShowCart, setShowCart] = useState(false);

  return (
    <nav className="flex items-center justify-between self-stretch gap-2  px-8 lg:px-10">
      {/* Categories */}
      <div className="">
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex items-center gap-2 self-stretch justify-start text-primary text-xl  leading-normal "
        >
          <RxHamburgerMenu />
          Catégories
          <FaAngleDown />
        </button>
        {openCategories && (
          <DropdownCategories className="absolute bg-white  flex flex-col w-[200px]  p-4 mt-2  shadow-defaultCard z-56" />
        )}
      </div>

      {/* start  Search */}

      {/* Search parte  Desktop*/}

      <div className="items-center lg:w-[500px] justify-between hidden border-2 border-gray-400 rounded-lg md:flex">
        <input
          type="text"
          name="search"
          placeholder="Recherche des Produits.."
          className="justify-start px-2 text-base font-normal text-neutral-400"
        />
        <div className="p-[10px] bg-gray-400  rounded-r-md justify-end ">
          <FaSearch className="text-white" />
        </div>
      </div>

      {/* Search parte  phone*/}

      <div className="md:hidden p-2 bg-gray-400  rounded-md justify-end ">
        <FaSearch className="text-white" />
      </div>

      {/* End  Search */}

      {/* start  Button */}

      {/* botton parte  Desktop*/}

      <div className="items-center hidden gap-2 md:flex">
        <div className="relative">
          <Button
            className="flex items-center gap-1"
            onClick={() => setIsCartOpen(!isCartOpen)} // ✅ استخدم onClick
          >
            <CartIcon onClick={() => setShowCart(!ShowCart)} />
            Panier <FaChevronDown />
          </Button>
          {isCartOpen && (
            <div className="absolute top-12  right-0 bg-white  z-150">
              <ShoppingCart />
            </div>
          )}
        </div>

        <Button variant="tertiary" className="flex items-center gap-1 ">
          <FaUser /> Compte
        </Button>

        <Button variant="secondary">
          <TiFlash size={22} />
        </Button>
      </div>

      {/* botton  parte  Phone*/}

      <div className="flex items-center gap-2 md:hidden">
        <div className="relative">
          <Button
            className="flex items-center gap-1"
            onClick={() => setIsCartOpen(!isCartOpen)} // ✅ استخدم onClick
          >
            <CartIcon onClick={() => setShowCart(!ShowCart)} />
          </Button>
        </div>
        <Button
          className="flex items-center gap-2 md:hidden"
          variant="tertiary"
        >
          <FaUser />
        </Button>

        <Button variant="secondary">
          <TiFlash size={24} />
        </Button>
      </div>
      {isCartOpen && (
        <div className="absolute top-[145px] right-16 bg-white z-150 sm:hidden">
          <ShoppingCart />
        </div>
      )}

      {/* End  Button */}
    </nav>
  );
}
