"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/caluula1.jpg",
  "/images/white.jpeg",
  "/images/sunset.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, 7000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
}

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/images/caluula1.jpg",
//   "/images/white.jpeg",
//   "/images/sunset.jpeg",
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0); // 0: none, 1: right, -1: left
//   const [isMounted, setIsMounted] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     setIsMounted(true);
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
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
//     timeoutRef.current = setTimeout(nextSlide, 5000);

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [current, isMounted]);

//   if (!isMounted) {
//     return (
//       <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
//         <Image
//           src={images[0]}
//           alt="Slide 1"
//           fill
//           className="object-cover w-full h-full"
//           priority
//         />
//       </section>
//     );
//   }

//   // Variants for slide animation
//   const slideVariants = {
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

//   return (
//     <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={current}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <Image
//             src={images[current]}
//             alt={`Slide ${current + 1}`}
//             fill
//             className="object-cover w-full h-full"
//             priority={current === 0}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={32} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={32} />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > current ? 1 : -1);
//               setCurrent(index);
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === current ? "bg-white" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
