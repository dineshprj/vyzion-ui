"use client";

import { NavbarData } from "@/layout/data/Navbar";
import styles from "./../style/Navbar.module.css";

import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white flex justify-between items-center py-2 px-3 lg:py-3 lg:px-24 shadow-sm">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 bg-linear-to-r from-fuchsia-500 via-purple-600 to-purple-500 relative flex items-center justify-center rounded-xl">
            <Zap className="absolute text-white fill-white p-1" />
          </div>

          <h3 className={`${styles.logo} text-xl`}>
            VYZION
          </h3>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex md:gap-3 lg:gap-8">
          {NavbarData.map((navmenu) => (
            <Link
              key={navmenu.id}
              href={navmenu.href}
              className={styles.menubar}
            >
              {navmenu.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5 items-center">
          <button className={styles.menubar}>
            Sign in
          </button>

          <button
            className="
            text-white
            px-4 py-1.5
            bg-linear-to-r
            from-fuchsia-500
            via-fuchsia-600
            to-purple-500
            rounded-xl
            hover:-translate-y-1
            transition-all
            hover:s
            duration-300hadow-xl
            hover:shadow-fuchsia-700/30
          "
          >
            Book a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 md:hidden
          transition-opacity duration-300
          ${
            mobileMenu
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Mobile Sidebar */}
      <nav
        className={`
          fixed top-0 right-0
          h-screen w-72
          bg-white shadow-2xl
          z-40 md:hidden

          flex flex-col
          pt-20 px-6 gap-6

          transition-transform duration-300 ease-in-out

          ${
            mobileMenu
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {NavbarData.map((navbar) => (
          <Link
            key={navbar.id}
            href={navbar.href}
            className={styles.mobilenav}
            onClick={() => setMobileMenu(false)}
          >
            {navbar.label}
          </Link>
        ))}

        <button className="
            px-4 py-2
            rounded-xl text-slate-700
               hover:scale-105 transition-all duration-900
            bg-black/3 hover:text-black cursor-pointer">
          Sign in
        </button>

        <button
          className="
          cursor-pointer
            text-white
            px-4 py-2
            rounded-xl
            hover:scale-105 transition-all duration-900
            bg-linear-to-r
            from-fuchsia-500
            via-fuchsia-600
            to-purple-500
          "
        >
          Book a call
        </button>
      </nav>
    </>
  );
}