"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Throttle function for scroll events
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Memoize navItems to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", href: "/" },
      { id: "destinations", label: "Destinations", href: "/destinations" },
      {
        id: "gallery",
        label: "Gallery",
        href: "/Images",
        subItems: [
          { id: "videos", label: "Videos", href: "/Images/videos" },
          { id: "photos", label: "Photos", href: "/Images/photos" },
        ],
      },
      {
        id: "about",
        label: "About",
        href: "/about",
        subItems: [
          {
            id: "why-travel",
            label: "about-us",
            href: "/about/about-us",
          },
          {
            id: "puntland",
            label: "About Puntland",
            href: "/about/about-puntland",
          },
          {
            id: "testmonial",
            label: "testmonial",
            href: "/about/testmonial",
          },
        ],
      },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
    []
  );

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }, 100), // Throttle to 100ms
    [lastScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Optimized click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
      setMobileOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Memoized active state checker
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const toggleMobileDropdown = useCallback((id: string) => {
    setMobileOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Memoized navbar classes - light mode only
  const navbarClasses = useMemo(() => {
    const baseClasses = "w-full z-50 transition-all duration-300 fixed top-0";
    const visibilityClasses = isVisible ? "translate-y-0" : "-translate-y-full";
    const themeClasses =
      "bg-white/95 backdrop-blur-sm border-b border-gray-200";

    return `${baseClasses} ${visibilityClasses} ${themeClasses}`;
  }, [isVisible]);

  return (
    <>
      <nav ref={menuRef} className={navbarClasses}>
        <div className="w-full mx-auto px-4 sm:px-14 lg:px-40">
          <div className="flex justify-around m-4 items-center mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/dalxiis2.png"
                  alt="Logo"
                  width={50}
                  height={75}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-700 hover:text-blue-800 hover:border-b-2 hover:border-blue-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                                isActive(sub.href)
                                  ? "text-blue-800 bg-blue-100"
                                  : "text-gray-700 hover:text-blue-800 hover:bg-gray-100"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Desktop */}
              <div className="flex items-center space-x-6 ml-6">
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/Dalxiistourism"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dalxiis_tourism/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    +252 907 797 695
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-blue-800 bg-blue-100"
                        : "text-gray-700 hover:text-blue-800 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      if (!item.subItems) {
                        setIsMenuOpen(false);
                        setMobileOpenDropdown(null);
                      }
                    }}
                  >
                    {item.label}
                  </Link>

                  {item.subItems && (
                    <div className="ml-4">
                      <button
                        onClick={() => toggleMobileDropdown(item.id)}
                        className="w-full text-left px-3 py-2 text-sm transition-colors duration-200 text-gray-600 hover:text-blue-800"
                      >
                        {mobileOpenDropdown === item.id ? "▼" : "▶"} Submenu
                      </button>

                      {mobileOpenDropdown === item.id && (
                        <div className="ml-4 space-y-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                                isActive(sub.href)
                                  ? "text-blue-800 bg-blue-100"
                                  : "text-gray-600 hover:text-blue-800 hover:bg-gray-100"
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    +252 907 797 695
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
