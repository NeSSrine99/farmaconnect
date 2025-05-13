"use client";

import { useState, useRef, useEffect } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { TiFlash } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser, FaChevronDown, FaAngleDown, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownCategories from "./DropdownCategories";
import Button from "./Button";
import ShoppingCart from "./ShoppingCart";
import CartIcon from "./CartShoppingIcon";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [openCategories, setOpenCategories] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ShowCart, setShowCart] = useState(false);

  const dropdownRef = useRef(null);

  // ✅ غلق القائمة إذا تم الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategories(false);
      }
    }

    if (openCategories) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategories]);

  return (
    <nav className="flex items-center justify-between self-stretch gap-2 px-8 lg:px-10">
      {/* Categories */}
      <div className="relative">
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex items-center gap-2 self-stretch justify-start text-primary text-xl leading-normal"
        >
          <RxHamburgerMenu />
          Catégories
          <FaAngleDown />
        </button>
        {openCategories && (
          <DropdownCategories
            ref={dropdownRef}
            className="absolute bg-white flex flex-col w-[200px] p-4 mt-2 shadow-defaultCard z-56"
          />
        )}
      </div>

      {/* Search Desktop */}
      <div className="items-center lg:w-[500px] justify-between hidden border-2 border-gray-400 rounded-lg md:flex">
        <input
          type="text"
          name="search"
          placeholder="Recherche des Produits.."
          className="justify-start px-2 text-base font-normal text-neutral-400"
        />
        <div className="p-[10px] bg-gray-400 rounded-r-md justify-end">
          <FaSearch className="text-white" />
        </div>
      </div>

      {/* Search Phone */}
      <div className="md:hidden p-2 bg-gray-400 rounded-md justify-end">
        <FaSearch className="text-white" />
      </div>

      {/* Buttons Desktop */}
      <div className="items-center hidden gap-2 md:flex">
        <div className="relative">
          <Button
            className="flex items-center gap-1"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <CartIcon onClick={() => setShowCart(!ShowCart)} />
            Panier <FaChevronDown />
          </Button>
          {isCartOpen && (
            <div className="absolute top-12 right-0 bg-white z-150">
              <ShoppingCart />
            </div>
          )}
        </div>

        {/* ✅ حالة تسجيل الدخول */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* ❌ حالة عدم تسجيل الدخول */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="tertiary" className="flex items-center gap-1">
              <FaUser /> Se connecter
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="secondary">
              <TiFlash size={22} />
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>

      {/* Buttons Phone */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="relative">
          <Button
            className="flex items-center gap-1"
            onClick={() => setIsCartOpen(!isCartOpen)}
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
        <div className="absolute top-[145px] right-16 bg-white z-150 md:hidden">
          <ShoppingCart />
        </div>
      )}
    </nav>
  );
}
