"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaAngleDown, FaSearch, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import DropdownCategories from "./DropdownCategories";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import CartIcon from "./CartShoppingIcon";
import { AnimatePresence, motion } from "framer-motion";
import ShoppingCart from "./ShoppingCart";
import Button from "./Button";

export default function Navbar() {
  const [openCategories, setOpenCategories] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      setIsSearchOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <nav className="relative bg-white shadow-md sticky top-0 z-50 px-4 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Dropdown catégories */}
          <div className="relative">
            <button
              onClick={() => setOpenCategories(!openCategories)}
              className="flex items-center gap-2 text-primary text-base font-semibold hover:text-hoverButtonPrimary transition"
            >
              <RxHamburgerMenu />
              <span>Catégories</span>
              <FaAngleDown size={14} />
            </button>

            <AnimatePresence>
              {openCategories && (
                <motion.div
                  ref={dropdownRef}
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute  z-100   shadow-lg rounded-lg"
                >
                  <DropdownCategories />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search desktop */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-full md:max-w-md">
            <input
              type="text"
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

          {/* Right side icons */}
          <div>
            <div className="flex items-center justify-between gap-3 w-full md:w-auto">
              {/* Mobile search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 bg-gray-100 rounded-md text-gray-700"
              >
                <FaSearch />
              </button>

              {/* Shopping Cart */}
              <div className="">
                <Button
                  variant="ghost"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className=" text-primary"
                >
                  <CartIcon className="sm:relative w-5 h-5" />
                </Button>
                <AnimatePresence>
                  {isCartOpen && (
                    <motion.div
                      key="cart"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-16 sm:right-20 right-4 bg-white z-50 shadow-lg rounded-md"
                    >
                      <ShoppingCart />
                    </motion.div>
                  )}
                </AnimatePresence>
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
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            key="mobile-search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 bg-opacity-30 backdrop-blur-sm z-[9999] flex items-start justify-center pt-10 px-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full rounded-lg shadow-md max-w-md mx-auto p-4 relative"
            >
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-2 right-2 text-gray-500"
              >
                <FaTimes />
              </button>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="px-3 py-2 flex-1 text-sm text-gray-700 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  className="bg-gray-400 p-3 transition cursor-pointer"
                >
                  <FaSearch className="text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
