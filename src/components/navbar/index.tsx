"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLanguage, type Language } from "@/components/language-provider";

const navItems = [
  { href: "/#home", key: "home" },
  { href: "/#about-us", key: "about" },
  { href: "/#services", key: "services" },
  { href: "/#approach", key: "approach" },
  { href: "/#why-us", key: "whyUs" },
  { href: "/#contact", key: "contact" },
] as const;

const dictionary = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    approach: "Approach",
    whyUs: "Why Us",
    contact: "Contact",
    bookConsultation: "Book a Consultation",
    languageEnglish: "English",
    languageIndonesian: "Indonesia",
  },
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    approach: "Pendekatan",
    whyUs: "Mengapa Kami",
    contact: "Kontak",
    bookConsultation: "Konsultasi",
    languageEnglish: "English",
    languageIndonesian: "Indonesia",
  },
} as const;

const languageOptions: Array<{ value: Language; label: string; flag: string }> = [
  { value: "id", label: "Indonesia", flag: "🇮🇩" },
  { value: "en", label: "English", flag: "🇺🇸" },
];

export default function Navbar() {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const t = dictionary[language];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenLanguage(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Athena Studio Logo"
            width={96}
            height={56}
            className="h-auto w-[84px] md:w-[96px]"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-base font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-slate-900">
                {t[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenLanguage((prev) => !prev)}
              className="flex items-center gap-2 text-lg text-slate-700 transition hover:text-slate-900"
            >
              <Globe size={20} />
              {language === "en" ? t.languageEnglish : t.languageIndonesian}
              <ChevronDown
                size={18}
                className={openLanguage ? "rotate-180 transition" : "transition"}
              />
            </button>

            {openLanguage && (
              <div className="animate-fade-in absolute right-0 top-full mt-3 w-[230px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="space-y-2">
                  {languageOptions.map((option) => {
                    const isActive = language === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setLanguage(option.value);
                          setOpenLanguage(false);
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-lg transition ${
                          isActive
                            ? "bg-slate-200 text-slate-900"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span>{option.flag}</span>
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button className="rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white transition hover:bg-slate-800">
            {t.bookConsultation}
          </button>
        </div>

        <button
          className="text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpenMobileMenu((prev) => !prev)}
        >
          {openMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {openMobileMenu && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium text-slate-700"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {t[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
            {t.bookConsultation}
          </button>
        </div>
      )}
    </nav>
  );
}
