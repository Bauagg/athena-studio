"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { language } = useLanguage();
  const content =
    language === "id"
      ? {
        description:
          "IT Consultant & Software House yang berfokus pada solusi transformasi digital strategis.",
        menuTitle: "Menu",
        menuItems: [
          { label: "Beranda", href: "/#home" },
          { label: "Tentang Kami", href: "/#about-us" },
          { label: "Layanan", href: "/#services" },
          { label: "Pendekatan", href: "/#approach" },
          { label: "Mengapa Kami", href: "/#why-us" },
          { label: "Kontak", href: "/#contact" },
        ],
        infoTitle: "Informasi",
        privacy: "Privasi & Kebijakan",
        terms: "Syarat & Ketentuan",
        contactTitle: "Hubungi Kami",
        copyright: "© 2026 ATHENA STUDIO. Seluruh hak cipta dilindungi.",
      }
      : {
        description:
          "IT Consultant & Software House focused on strategic digital transformation solutions.",
        menuTitle: "Menu List",
        menuItems: [
          { label: "Home", href: "/#home" },
          { label: "About Us", href: "/#about-us" },
          { label: "Service", href: "/#services" },
          { label: "Approach", href: "/#approach" },
          { label: "Why Us", href: "/#why-us" },
          { label: "Contact", href: "/#contact" },
        ],
        infoTitle: "Information",
        privacy: "Privacy & Policy",
        terms: "Term & Condition",
        contactTitle: "Contact Us",
        copyright: "© 2026 ATHENA STUDIO. All right reserved.",
      };

  return (
    <footer className="bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-[1240px] px-4 py-10 lg:px-8 lg:py-16">
        <div className="space-y-8 lg:grid lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] lg:gap-12 lg:space-y-0">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <Image src={Logo} alt="Athena Logo" width={96} height={60} className="w-16 lg:w-24" />
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg lg:mt-5 lg:text-[28px]">
              {content.description}
            </p>
          </div>

          {/* Menu & Info - 2 columns on mobile/tablet */}
          <div className="flex justify-between gap-8 lg:contents">
            <div className="flex-1 text-left">
              <h4 className="mb-3 text-lg font-semibold text-slate-900 md:text-xl lg:mb-4 lg:text-2xl">
                {content.menuTitle}
              </h4>
              <ul className="space-y-2 text-base text-slate-800 md:text-lg lg:text-xl">
                {content.menuItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-slate-950">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 text-left">
              <h4 className="mb-3 text-lg font-semibold text-slate-900 md:text-xl lg:mb-4 lg:text-2xl">
                {content.infoTitle}
              </h4>
              <ul className="space-y-2 text-base text-slate-800 md:text-lg lg:text-xl">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:text-slate-950"
                  >
                    {content.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="transition hover:text-slate-950"
                  >
                    {content.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-slate-900 md:text-xl lg:mb-4 lg:text-2xl">
              {content.contactTitle}
            </h4>
            <ul className="space-y-3 text-base text-slate-800 md:text-lg lg:space-y-4 lg:text-xl">
              <li className="flex items-start gap-2 md:gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 md:mt-1" />
                athenaa.studioo@gmail.com
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 md:mt-1" />
                +62 857-3083-9962
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 md:mt-1" />
                Jakarta, Indonesia
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/athena-studio-company/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/athenaastudio.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                <Instagram size={20} />
              </a>
              <button className="rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
                <Facebook size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-300 pt-6 text-center text-sm text-slate-700 md:text-base lg:mt-12 lg:pt-7 lg:text-lg">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}
