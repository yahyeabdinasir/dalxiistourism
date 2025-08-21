// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
// import { useTheme } from "@/components/ThemeProvider";
// import ThemeToggle from "./ThemeToggle";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
//     null
//   );
//   const { isDark } = useTheme();
//   const pathname = usePathname();
//   const menuRef = useRef<HTMLDivElement>(null);

//   const navItems = [
//     { id: "home", label: "Home", href: "/" },
//     { id: "destinations", label: "Destinations", href: "/destinations" },
//     {
//       id: "gallery",
//       label: "Gallery",
//       href: "/Images",
//       subItems: [
//         { id: "videos", label: "Videos", href: "/Images/videos" },
//         { id: "photos", label: "Photos", href: "/Images/photos" },
//       ],
//     },

//     {
//       id: "about",
//       label: "About",
//       href: "/about",
//       subItems: [
//         {
//           id: "why-travel",
//           label: "about-us",
//           href: "/about/about-us",
//         },
//         {
//           id: "puntland",
//           label: "About Puntland",
//           href: "/about/about-puntland",
//         },
//         {
//           id: "testmonial",
//           label: "testmonial",
//           href: "/about/testmonial",
//         },
//       ],
//     },
//     { id: "contact", label: "Contact", href: "/contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY <= 100) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//         setMobileOpenDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const isActive = (href: string) => {
//     if (href === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(href);
//   };

//   const toggleMobileDropdown = (id: string) => {
//     setMobileOpenDropdown(mobileOpenDropdown === id ? null : id);
//   };

//   return (
//     <>
//       <nav
//         ref={menuRef}
//         className={`w-full z-50 transition-all duration-400 ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         } fixed top-0 ${
//           isDark
//             ? "bg-gray-900 border-b border-gray-800"
//             : "bg-white backdrop-blur-sm"
//         }`}
//       >
//         <div className="w-full mx-auto px-4 sm:px-14 lg:px-40">
//           <div className="flex justify-around m-4 items-center mx-auto">
//             {/* Logo */}
//             <div className="">
//               <Link href="/" className="flex items-center">
//                 <Image
//                   src="/images/dalxiis2.png"
//                   alt="Logo"
//                   width={50}
//                   height={75}
//                   // className={`rounded-lg object-contain ${
//                   //   isDark ?"bg-gray-950" :
//                   // }`}
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-10">
//               <div className="flex items-baseline space-x-6">
//                 {navItems.map((item) => (
//                   <div key={item.id} className="relative group">
//                     <Link
//                       href={item.href}
//                       className={`px-3 py-2 text-sm font-medium  transition-colors duration-300 ${
//                         isActive(item.href)
//                           ? isDark
//                             ? "text-blue-400 border-b-2 border-blue-400"
//                             : "text-blue-800 border-b-2 border-blue-800"
//                           : isDark
//                           ? "text-gray-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-500"
//                           : "text-gray-700 hover:text-blue-800 hover:border-b-2 hover:border-blue-300"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                     {item.subItems && (
//                       <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                         <div className="py-1">
//                           {item.subItems.map((sub) => (
//                             <Link
//                               key={sub.id}
//                               href={sub.href}
//                               className={`block px-4 py-2 text-sm ${
//                                 isActive(sub.href)
//                                   ? isDark
//                                     ? "text-blue-400 bg-gray-700"
//                                     : "text-blue-800 bg-blue-100"
//                                   : isDark
//                                   ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
//                                   : "text-gray-700 hover:text-blue-800 hover:bg-gray-100"
//                               }`}
//                             >
//                               {sub.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Right Side - Desktop */}
//               <div className="flex items-center space-x-6 ml-6">
//                 {/* Social Icons */}
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-2 rounded-full transition-colors duration-200 ${
//                       isDark
//                         ? "text-gray-300 hover:text-white hover:bg-gray-800"
//                         : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                     }`}
//                   >
//                     <Facebook className="h-5 w-5" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-2 rounded-full transition-colors duration-200 ${
//                       isDark
//                         ? "text-gray-300 hover:text-white hover:bg-gray-800"
//                         : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                     }`}
//                   >
//                     <Instagram className="h-5 w-5" />
//                   </a>
//                 </div>

//                 {/* Phone Number */}
//                 <div
//                   className={`flex items-center space-x-2 ${
//                     isDark ? "text-blue-400" : "text-blue-800"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span className="text-sm font-medium">+252 907889655</span>
//                 </div>

//                 {/* Theme Toggle */}
//                 <ThemeToggle />
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center space-x-4">
//               <ThemeToggle />
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`p-2 rounded-lg transition-colors duration-200 ${
//                   isDark
//                     ? "text-gray-300 hover:text-white hover:bg-gray-800"
//                     : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                 }`}
//               >
//                 {isMenuOpen ? (
//                   <X className="h-5 w-5" />
//                 ) : (
//                   <Menu className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <div
//                 className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-200 ${
//                   isDark
//                     ? "bg-gray-900 border-gray-800"
//                     : "bg-white border-gray-200"
//                 }`}
//               >
//                 {navItems.map((item) =>
//                   item.subItems ? (
//                     <div key={item.id}>
//                       <button
//                         onClick={() => toggleMobileDropdown(item.id)}
//                         className={`flex justify-between items-center w-full px-3 py-2 text-base font-medium text-left transition-colors duration-200 ${
//                           isActive(item.href)
//                             ? isDark
//                               ? "text-blue-400 bg-gray-800"
//                               : "text-blue-800 bg-blue-50"
//                             : isDark
//                             ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
//                             : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
//                         }`}
//                       >
//                         {item.label}
//                         <svg
//                           className={`h-4 w-4 transition-transform ${
//                             mobileOpenDropdown === item.id ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       {mobileOpenDropdown === item.id && (
//                         <div className="pl-4">
//                           {item.subItems.map((sub) => (
//                             <Link
//                               key={sub.id}
//                               href={sub.href}
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setMobileOpenDropdown(null);
//                               }}
//                               className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
//                                 isActive(sub.href)
//                                   ? isDark
//                                     ? "text-blue-400 bg-gray-800"
//                                     : "text-blue-800 bg-blue-50"
//                                   : isDark
//                                   ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
//                                   : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
//                               }`}
//                             >
//                               {sub.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.id}
//                       href={item.href}
//                       onClick={() => {
//                         setIsMenuOpen(false);
//                         setMobileOpenDropdown(null);
//                       }}
//                       className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
//                         isActive(item.href)
//                           ? isDark
//                             ? "text-blue-400 bg-gray-800"
//                             : "text-blue-800 bg-blue-50"
//                           : isDark
//                           ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
//                           : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   )
//                 )}
//                 <div className="flex items-center justify-between px-3 py-2 border-t mt-2 pt-4">
//                   <div
//                     className={`flex items-center space-x-2 ${
//                       isDark ? "text-blue-400" : "text-blue-800"
//                     }`}
//                   >
//                     <Phone className="h-4 w-4" />
//                     <span className="text-sm font-medium">+252 907889655</span>
//                   </div>
//                   <div className="flex space-x-4">
//                     <a
//                       href="https://www.facebook.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-1 rounded-full ${
//                         isDark
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`}
//                     >
//                       <Facebook className="h-5 w-5" />
//                     </a>
//                     <a
//                       href="https://www.instagram.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-1 rounded-full ${
//                         isDark
//                           ? "text-gray-300 hover:text-white"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`}
//                     >
//                       <Instagram className="h-5 w-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import { useTheme } from "./ThemeProvider"; // ✅ Corrected import path
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const { isDark } = useTheme();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
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
          label: "why-travel-with-us",
          href: "/about/why-travel-with-us",
        },
        {
          id: "testmonial",
          label: "testmonial",
          href: "/about/testmonial",
        },
      ],
    },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const toggleMobileDropdown = (id: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === id ? null : id);
  };

  return (
    <>
      <nav
        ref={menuRef}
        className={`w-full z-50 transition-all duration-400 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 ${
          isDark
            ? "bg-gray-900 border-b border-gray-800"
            : "bg-white backdrop-blur-sm"
        }`}
      >
        {/* <div className="bg-red-500 p-2">
          <ThemeToggle />
        </div> */}

        <div className="w-full mx-auto px-4 sm:px-14 lg:px-40">
          <div className="flex justify-around m-4 items-center mx-auto">
            {/* Logo */}
            <div className="">
              <Link href="/" className="flex items-center">
                <Image
                  src={isDark ? "/images/dalxiis2.png" : "/images/dalxiis2.png"} // ✅ Optional: different logo for dark mode
                  alt="Logo"
                  width={50}
                  height={75}
                  priority
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
                      className={`px-3 py-2 text-sm font-medium  transition-colors duration-300 ${
                        isActive(item.href)
                          ? isDark
                            ? "text-blue-400 border-b-2 border-blue-400"
                            : "text-blue-800 border-b-2 border-blue-800"
                          : isDark
                          ? "text-gray-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-500"
                          : "text-gray-700 hover:text-blue-800 hover:border-b-2 hover:border-blue-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm ${
                                isActive(sub.href)
                                  ? isDark
                                    ? "text-blue-400 bg-gray-700"
                                    : "text-blue-800 bg-blue-100"
                                  : isDark
                                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
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
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>

                {/* Phone Number */}
                <div
                  className={`flex items-center space-x-2 ${
                    isDark ? "text-blue-400" : "text-blue-800"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+252 907889655</span>
                </div>

                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div
                className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-200 ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.id}>
                      <button
                        onClick={() => toggleMobileDropdown(item.id)}
                        className={`flex justify-between items-center w-full px-3 py-2 text-base font-medium text-left transition-colors duration-200 ${
                          isActive(item.href)
                            ? isDark
                              ? "text-blue-400 bg-gray-800"
                              : "text-blue-800 bg-blue-50"
                            : isDark
                            ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                            : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                        }`}
                        aria-expanded={mobileOpenDropdown === item.id}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            mobileOpenDropdown === item.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {mobileOpenDropdown === item.id && (
                        <div className="pl-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                              className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                                isActive(sub.href)
                                  ? isDark
                                    ? "text-blue-400 bg-gray-800"
                                    : "text-blue-800 bg-blue-50"
                                  : isDark
                                  ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                                  : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileOpenDropdown(null);
                      }}
                      className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                        isActive(item.href)
                          ? isDark
                            ? "text-blue-400 bg-gray-800"
                            : "text-blue-800 bg-blue-50"
                          : isDark
                          ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                          : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="flex items-center justify-between px-3 py-2 border-t mt-2 pt-4">
                  <div
                    className={`flex items-center space-x-2 ${
                      isDark ? "text-blue-400" : "text-blue-800"
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">+252 907889655</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1 rounded-full ${
                        isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1 rounded-full ${
                        isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
