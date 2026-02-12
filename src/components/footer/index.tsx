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
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Image src={Logo} alt="Athena Logo" width={96} height={60} />
            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-[28px]">
              {content.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900 md:text-2xl">
              {content.menuTitle}
            </h4>
            <ul className="space-y-2 text-base text-slate-800 md:text-xl">
              {content.menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-slate-950">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900 md:text-2xl">
              {content.infoTitle}
            </h4>
            <ul className="space-y-2 text-base text-slate-800 md:text-xl">
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

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900 md:text-2xl">
              {content.contactTitle}
            </h4>
            <ul className="space-y-4 text-base text-slate-800 md:text-xl">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0" />
                athenaa.studioo@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0" />
                +62 812-3456-7890
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                Jakarta, Indonesia
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <button className="rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
                <Linkedin size={20} />
              </button>
              <button className="rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
                <Instagram size={20} />
              </button>
              <button className="rounded-lg bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
                <Facebook size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-300 pt-7 text-center text-sm text-slate-700 md:text-lg">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}
