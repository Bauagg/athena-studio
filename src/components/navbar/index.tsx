"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { ChevronDown, Globe } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown saat klik luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Athena Logo" width={40} height={40} />
        </Link>

        {/* Menu Tengah */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-black transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
              <Globe size={18} />
              EN
              <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-fadeIn">
                <button
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Bahasa Indonesia
                </button>
              </div>
            )}
          </div>

          {/* Button */}
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Book a Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
