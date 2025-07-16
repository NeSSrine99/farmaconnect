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

  // إغلاق Dropdown التصنيفات عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategories(false);
      }
    }
    if (openCategories) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategories]);

  // تنفيذ البحث
  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
      setSearchTerm("");
    }
  };

  // تشغيل البحث عند Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="flex items-center justify-between gap-4 px-6 lg:px-10 py-4 shadow-md bg-white z-50">
      {/* زر التصنيفات */}
      <div className="relative">
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex items-center gap-2 text-primary text-lg font-semibold"
        >
          <RxHamburgerMenu />
          <span>Catégories</span>
          <FaAngleDown />
        </button>
        {openCategories && (
          <DropdownCategories
            ref={dropdownRef}
            className="absolute bg-white w-[200px] p-4 mt-2 shadow-lg z-50"
          />
        )}
      </div>

      {/* شريط البحث على الحاسوب */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden lg:w-[500px] w-[300px]">
        <input
          type="text"
          name="search"
          placeholder="Recherche des Produits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="px-3 py-2 flex-1 text-sm text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-400 p-3 flex items-center justify-center"
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* زر البحث للهاتف */}
      <div className="md:hidden">
        <button
          onClick={handleSearch}
          className="bg-gray-400 p-2 rounded-md flex items-center"
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* أزرار المستخدم والعربة */}
      <div className="flex items-center gap-2">
        {/* العربة */}
        <div className="relative">
          <Button onClick={() => setIsCartOpen(!isCartOpen)}>
            <CartIcon />
          </Button>
          {isCartOpen && (
            <div className="absolute top-12 right-0 bg-white z-50 shadow-lg">
              <ShoppingCart />
            </div>
          )}
        </div>

        {/* المستخدم */}
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
            <Button variant="tertiary">
              <FaUser size={20} />
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="secondary">
              <TiFlash size={22} />
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
  );
}
