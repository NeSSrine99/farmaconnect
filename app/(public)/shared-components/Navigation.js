"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaAngleDown, FaSearch, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

import DropdownCategories from "./DropdownCategories";
import CartIcon from "./CartShoppingIcon";
import ShoppingCart from "./ShoppingCart";
import Button from "./Button";

export default function Navbar() {
  const [openCategories, setOpenCategories] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dropdownRef = useRef(null);
  const router = useRouter();
  const { isLoaded, isSignedIn, getToken } = useAuth();

  // ✅ Mount guard (حل Hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Fetch user (client only – آمن)
  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const fetchUser = async () => {
      try {
        const token = await getToken({ template: "backend" });
        if (!token) return;

        const res = await fetch("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) return;
        const data = await res.json();
        console.log("User data:", data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [isLoaded, isSignedIn, getToken]);

  // Close dropdown when clicking outside
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

  // Search handlers
  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;
    router.push(`/search?query=${encodeURIComponent(trimmed)}`);
    setSearchTerm("");
    setIsSearchOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <nav className="relative bg-white shadow-md sticky top-0 z-50 px-4 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setOpenCategories((p) => !p)}
              className="flex items-center gap-2 text-primary font-semibold hover:text-hoverButtonPrimary transition"
            >
              <RxHamburgerMenu />
              <span>Catégories</span>
              <FaAngleDown size={14} />
            </button>

            <AnimatePresence>
              {openCategories && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 shadow-lg rounded-lg bg-white"
                >
                  <DropdownCategories />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop search */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Rechercher des produits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-3 py-2 flex-1 text-sm text-gray-700 focus:outline-none"
            />
            <button onClick={handleSearch} className="bg-gray-400 p-3">
              <FaSearch className="text-white" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Mobile search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 bg-gray-100 rounded-md text-gray-700"
            >
              <FaSearch />
            </button>

            {/* Cart */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsCartOpen((p) => !p)}
                className="text-primary"
              >
                <CartIcon className="w-5 h-5" />
              </Button>

              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-14 right-0 bg-white z-50 shadow-lg rounded-md"
                  >
                    <ShoppingCart />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User (Client-only) */}
            {mounted && (
              <>
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
                  <SignInButton mode="modal" asChild>
                    <Button variant="outline" className="p-2">
                      <FaUser size={20} className="text-gray-500" />
                    </Button>
                  </SignInButton>
                </SignedOut>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-start justify-center pt-10 px-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-md rounded-lg shadow-md p-4 relative"
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
                  autoFocus
                  className="px-3 py-2 flex-1 text-sm text-gray-700 focus:outline-none"
                />
                <button onClick={handleSearch} className="bg-gray-400 p-3">
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
