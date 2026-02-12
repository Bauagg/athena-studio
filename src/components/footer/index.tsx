"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div>
            <Image src={Logo} alt="Athena Logo" width={80} height={80} />
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              IT Consultant & Software House focused on strategic digital
              transformation solutions.
            </p>
          </div>

          {/* Menu List */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Menu List</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Approach</li>
              <li>Why Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy & Policy</li>
              <li>Term & Condition</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                athenaa.studioo@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Jakarta, Indonesia
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <div className="p-2 bg-white rounded shadow hover:shadow-md transition cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="p-2 bg-white rounded shadow hover:shadow-md transition cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="p-2 bg-white rounded shadow hover:shadow-md transition cursor-pointer">
                <Facebook size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 ATHENA STUDIO. All right reserved.
        </div>
      </div>
    </footer>
  );
}
