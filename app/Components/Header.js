"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbCategory, TbPhoneCall } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-2 px-4 relative">
      {/* Logo */}
      <a href="/" className="flex items-end">
        <Image
          src="FarmaconnectLogo.svg"
          alt="logo"
          className="mb-2 w-10 h-12"
          width={40}
          height={40}
        />

        <span className="text-center justify-center text-2xl font-normal font-['Poltawski_Nowy'] bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_#26ECF6_0deg,_#18959C_189deg,_#0D5356_360deg)] bg-cover bg-clip-text text-transparent">
          Farmaconnect
        </span>
      </a>

      {/* Hamburger Button */}
      <div className="flex lg:hidden absolute right-4 top-[18px] bg-white rounded text-primary shadow-md items-center justify-center w-10 h-10  hover:border-2  border-primary cursor-pointer">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu className="text-primary text-3xl p-1" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:items-end lg:gap-4 self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-snug">
        <Link
          href="/categories"
          className="flex items-center gap-2 hover:underline"
        >
          <TbCategory /> Catégories
        </Link>
        <Link href="/blog" className="flex items-center gap-2 hover:underline">
          <TbPhoneCall /> Blog
        </Link>
        <Link
          href="/consultation"
          className="flex items-center gap-2 hover:underline"
        >
          <IoChatbubblesOutline /> Consultation
        </Link>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[80px] right-2 p-2 py-4 flex bg-white flex-col items-start gap-2 rounded-b-xl shadow-defaultCard z-100 ">
          <Link
            href="/categories"
            className="flex items-center gap-2 hover:underline text-neutral-400 text-lg font-normal "
          >
            <TbCategory /> Catégories
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 hover:underline text-neutral-400 text-lg font-normal "
          >
            <TbPhoneCall /> Blog
          </Link>
          <Link
            href="/consultation"
            className="flex items-center gap-2 hover:underline text-neutral-400 text-lg font-normal "
          >
            <IoChatbubblesOutline /> Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
