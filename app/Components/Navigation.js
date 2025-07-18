"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaAngleDown, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiFlash } from "react-icons/ti";
import CartIcon from "./CartShoppingIcon";
import ShoppingCart from "./ShoppingCart";
import DropdownCategories from "./DropdownCategories";
import Button from "./Button";
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
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategories(false);
      }
    };
    if (openCategories) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategories]);

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="flex items-center justify-between gap-4 px-4 lg:px-10 py-4 shadow-md bg-white z-50 sticky top-0">
      {/* Sidebar categories button */}
      <div className="relative">
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex items-center gap-2 text-primary text-base font-semibold hover:text-hoverButtonPrimary transition"
        >
          <RxHamburgerMenu />
          <span>Catégories</span>
          <FaAngleDown size={14} />
        </button>

        {openCategories && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 z-50 bg-white w-[220px] p-4 shadow-lg rounded-lg animate-fade-in"
          >
            <DropdownCategories />
          </div>
        )}
      </div>

      {/* Search bar */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden w-[300px] lg:w-[500px]">
        <input
          type="text"
          name="search"
          placeholder="Rechercher des produits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="px-3 py-2 flex-1 text-sm text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-400 p-3 transition cursor-pointer"
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* Mobile search button */}
      <div className="md:hidden flex items-center">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="px-2 py-1 text-sm border border-gray-300 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-600 p-2 rounded-r-md text-white"
        >
          <FaSearch />
        </button>
      </div>

      {/* User and cart section */}
      <div className="flex items-center gap-3">
        {/* Shopping cart */}
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative  text-primary"
          >
            <CartIcon className="w-5 h-5 " />
          </Button>
          {isCartOpen && (
            <div className="absolute top-12 right-0 bg-white z-50 shadow-lg rounded-md animate-fade-in">
              <ShoppingCart />
            </div>
          )}
        </div>

        {/* User */}
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "40px",
                  height: "40px",
                },
                userButtonPopoverCard: {
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                },
              },
            }}
          />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" className="p-2">
              <FaUser size={20} className="text-gray-500" />
            </Button>
          </SignInButton>
        </SignedOut>
        <Button variant="secondary">
          <TiFlash />
        </Button>
      </div>
    </nav>
  );
}
