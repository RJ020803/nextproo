"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="bg-slate-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex items-center">
            
            <span className="text-slate-500 px-10">tuning</span>
          </h1>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center px-20">
          <li className="text-xs md:text-base text-slate-700 hover:underline">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-xs md:text-base text-slate-700 hover:underline">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-xs md:text-base text-slate-700 hover:underline">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-20 bg-neutral-900 p-8 flex flex-col justify-center items-center lg:hidden">
          <ul className="space-y-6">
            <li className="text-white text-lg">
              <Link href="/about" onClick={() => setMobileDrawerOpen(false)}>
                About
              </Link>
            </li>
            <li className="text-white text-lg">
              <Link href="/services" onClick={() => setMobileDrawerOpen(false)}>
                Services
              </Link>
            </li>
            <li className="text-white text-lg">
              <Link href="/contact" onClick={() => setMobileDrawerOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
