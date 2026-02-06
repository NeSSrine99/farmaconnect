"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HiX,
  HiChevronUp,
  HiChevronDown,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiHome,
  HiShoppingCart,
  HiClipboardList,
  HiCube,
  HiUsers,
} from "react-icons/hi";
import { useState, useEffect } from "react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: HiHome },
  { name: "Orders", href: "/dashboard/orders", icon: HiShoppingCart },
  {
    name: "Prescriptions",
    href: "/dashboard/prescriptions",
    icon: HiClipboardList,
    submenu: [{ name: "All Prescriptions", href: "/dashboard/prescriptions" }],
  },
  { name: "Products", href: "/dashboard/products", icon: HiCube },
  { name: "Staff", href: "/dashboard/staff", icon: HiUsers },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}) {
  const [openMenus, setOpenMenus] = useState({});
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (name) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <>
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen bg-white p-4 rounded-lg
          transition-all duration-300 shadow-lg z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          ${sidebarCollapsed && !isMobile ? "w-20" : "w-64"}
        `}
      >
        {/* Mobile close button */}
        {isMobile && (
          <button
            className="md:hidden mb-4 p-2 bg-gray-100 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>
        )}

        {/* Logo */}
        <Link
          href="/"
          className={`flex items-end mb-8 ${sidebarCollapsed ? "justify-center" : ""}`}
        >
          <Image
            src="/FarmaconnectLogo.svg"
            alt="logo"
            width={sidebarCollapsed ? 24 : 40}
            height={sidebarCollapsed ? 24 : 40}
            className={`transition-all duration-300 ${!sidebarCollapsed ? "mr-2 mb-2" : ""} md:w-10
             md:h-10`}
          />
          {!sidebarCollapsed && (
            <span className="text-2xl font-normal text-transparent bg-clip-text bg-[conic-gradient(from_180deg_at_50%_50%,#26ECF6_0deg,#18959C_189deg,#0D5356_360deg)] md:text-lg">
              Farmaconnect
            </span>
          )}
        </Link>

        {/* Menu */}
        <nav className="space-y-1">
          {menu.map((item) => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-hoverButtonPrimary hover:text-white cursor-pointer"
                onClick={() => item.submenu && toggleMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 w-full ${
                    sidebarCollapsed && !isMobile ? "justify-center" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />

                  {(!sidebarCollapsed || isMobile) && <span>{item.name}</span>}
                </Link>

                {/* Submenu arrow Desktop  */}
                {!sidebarCollapsed &&
                  !isMobile &&
                  item.submenu &&
                  (openMenus[item.name] ? <HiChevronUp /> : <HiChevronDown />)}
              </div>

              {/* Submenu */}
              {item.submenu &&
                openMenus[item.name] &&
                (!sidebarCollapsed || isMobile) && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        
      </aside>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
