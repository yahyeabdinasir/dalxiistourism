// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import OptimizedImage from "./OptimizedImage";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/images/caluula1.jpg",
//   "/images/white.jpeg",
//   "/images/sunset.jpeg",
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
//   const [isMounted, setIsMounted] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     if (!isMounted) return;

//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(nextSlide, 7000);
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [current, isMounted]);

//   // Animation variants
//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   // Show static image during SSR
//   if (!isMounted) {
//     return (
//       <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
//         <OptimizedImage
//           src={images[0]}
//           alt="Slide 1"
//           fill
//           className="object-cover w-full h-full"
//           priority={true}
//           quality={90}
//           sizes="100vw"
//         />
//       </section>
//     );
//   }

//   return (
//     <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
//       <AnimatePresence custom={direction} initial={false}>
//         <motion.div
//           key={current}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <OptimizedImage
//             src={images[current]}
//             alt={`Slide ${current + 1}`}
//             fill
//             className="object-cover w-full h-full"
//             priority={current === 0}
//             quality={90}
//             sizes="100vw"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={32} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={32} />
//       </button>
//     </section>
//   );
// }

"use client";

import React from "react";
import OptimizedImage from "./OptimizedImage";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <OptimizedImage
        src="/images/caluula1.jpg"
        alt="Caluula"
        fill
        className="object-cover w-full h-full"
        priority={true}
        quality={90}
        sizes="100vw"
      />

      {/* Optional: Add a dark overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </section>
  );
}
