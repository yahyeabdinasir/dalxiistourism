"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// theme provider removed; default to light mode
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const isDark = false;
  const [mounted, setMounted] = React.useState(false);
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  if (!mounted) return null;

  return (
    <footer
      className={`transition-colors duration-200 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Social Media Banner */}
      <div className={`p-4 ${isDark ? "bg-gray-800" : "bg-blue-600"}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDark ? "text-gray-200" : "text-white"
            } hover:opacity-80 transition-colors text-sm sm:text-base`}
          >
            <FaFacebookF className="mr-2 text-lg" />
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDark ? "text-gray-200" : "text-white"
            } hover:opacity-80 transition-colors text-sm sm:text-base`}
          >
            <FaInstagram className="mr-2 text-lg" />
            <span>Instagram</span>
          </a>
          <a
            href="https://wa.me/252617889655"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDark ? "text-gray-200" : "text-white"
            } hover:opacity-80 transition-colors text-sm sm:text-base`}
          >
            <FaWhatsapp className="mr-2 text-lg" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Dalxiis <span>Tourism</span>
            </h3>
            <p
              className={`mb-6 leading-relaxed max-w-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover amazing destinations with Dalxiis Tourism
            </p>

            <div className="space-y-3">
              <div
                className={`flex items-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Phone
                  className={`h-5 w-5 mr-3 ${
                    isDark ? "text-orange-400" : "text-orange-600"
                  }`}
                />
                <span>+252 907889655</span>
              </div>
              <div
                className={`flex items-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Mail
                  className={`h-5 w-5 mr-3 ${
                    isDark ? "text-orange-400" : "text-orange-600"
                  }`}
                />
                <span>info@dalxiistourism.com</span>
              </div>
              <div
                className={`flex items-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <MapPin
                  className={`h-5 w-5 mr-3 ${
                    isDark ? "text-orange-400" : "text-orange-600"
                  }`}
                />
                <span>Garowe Puntland , Somalia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-semibold mb-5 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/destinations", label: "Destinations" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/Images/photos", label: "Images" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-orange-400"
                        : "text-gray-600 hover:text-orange-600"
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4
              className={`text-lg font-semibold mb-5 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  isDark
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } transition-colors`}
              >
                <FaFacebookF className="h-5 w-5" />
                <span>Facebook</span>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-orange-400" : "text-gray-600 hover:text-orange-600"} transition-colors`}
              >
                <FaTwitter className="h-5 w-5" />
                <span>Twitter</span>
              </a> */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  isDark
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } transition-colors`}
              >
                <FaInstagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/252617889655"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  isDark
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } transition-colors`}
              >
                <FaWhatsapp className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  isDark
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } transition-colors`}
              >
                <FaTiktok className="h-5 w-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t ${
            isDark ? "border-gray-700" : "border-gray-800"
          } pt-8 mt-12`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <span>{year ?? "----"}</span> Dalxiis Tourism. All rights
              reserved.
            </div>
            <div className="flex space-x-6">
              <ul className="flex space-x-6">
                <li className="text-gray-400 text-sm transition-colors">
                  Privacy Policy
                </li>
                <li className="text-gray-400 text-sm transition-colors">
                  Terms of Service
                </li>
                <li className="text-gray-400  text-sm transition-colors">
                  Sitemap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
