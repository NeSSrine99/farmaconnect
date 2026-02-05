"use client";

import {
  HiMenu,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { useUser, UserButton } from "@clerk/nextjs";

export default function Header({
  toggleMobile,
  toggleCollapse,
  sidebarCollapsed,
}) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <header className="h-16 bg-white rounded-lg shadow m-2 animate-pulse" />
    );
  }

  const role = user?.publicMetadata?.role || "User";

  return (
    <header className="h-16 bg-white px-6 flex items-center justify-between rounded-lg shadow ">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile burger */}
        <button
          className="md:hidden p-2 bg-gray-100 rounded"
          onClick={toggleMobile}
        >
          <HiMenu className="w-6 h-6" />
        </button>

        {/* Desktop collapse */}
        <button
          className="hidden md:flex p-2 bg-gray-100 rounded"
          onClick={toggleCollapse}
        >
          {sidebarCollapsed ? (
            <HiChevronDoubleRight />
          ) : (
            <HiChevronDoubleLeft />
          )}
        </button>

        <span className="font-semibold text-gray-800">Dashboard</span>
      </div>

      {/* Right – User */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-800">
            {user.fullName}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {role}
          </p>
        </div>

        {/* Clerk avatar + menu */}
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-9 h-9",
              userButtonPopoverCard:
                "rounded-xl shadow-lg border",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
    </header>
  );
}
