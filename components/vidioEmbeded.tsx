// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const mediaItems = [
//   {
//     id: 13,
//     type: "video",
//     embed: (
//       <iframe
//         src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FDalxiistourism%2Fvideos%2F1536792994162937%2F&show_text=true&width=267&t=0"
//         width="100%"
//         height="100%"
//         style={{ border: 'none', overflow: 'hidden' }}
//         scrolling="no"
//         frameBorder="0"
//         allowFullScreen={true}
//         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//       ></iframe>
//     ),
//     title: "Beach Tour",
//     description: "Virtual tour of our beautiful coastal destinations."
//   },
//   {
//     id: 14,
//     type: "video",
//     embed: (
//       <iframe
//         src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FDalxiistourism%2Fvideos%2F1536792994162937%2F&show_text=true&width=267&t=0"
//         width="100%"
//         height="100%"
//         style={{ border: 'none', overflow: 'hidden' }}
//         scrolling="no"
//         frameBorder="0"
//         allowFullScreen={true}
//         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//       ></iframe>
//     ),
//     title: "Cultural Festival",
//     description: "Traditional cultural festival celebrations."
//   },
//   {
//     id: 15,
//     type: "image",
//     src: "/images/sunset.jpeg",
//     title: "Desert Adventure",
//     description: "Adventure through the vast desert landscapes."
//   }
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % mediaItems.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
//   };

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(nextSlide, 10000); // Longer duration for videos
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [current]);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8 }
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//       transition: { duration: 0.8 }
//     })
//   };

//   return (
//     <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
//       <AnimatePresence custom={direction} initial={false}>
//         <motion.div
//           key={mediaItems[current].id}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           className="absolute inset-0 w-full h-full flex items-center justify-center"
//         >
//           {mediaItems[current].type === 'video' ? (
//             <div className="w-full h-full">
//               {mediaItems[current].embed}
//             </div>
//           ) : (
//             <img
//               src={mediaItems[current].src}
//               alt={mediaItems[current].title}
//               className="w-full h-full object-cover"
//             />
//           )}

//           {/* Caption */}
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
//             <h2 className="text-2xl font-bold">{mediaItems[current].title}</h2>
//             <p className="mt-2">{mediaItems[current].description}</p>
//           </div>
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

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//         {mediaItems.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               setDirection(idx > current ? 1 : -1);
//               setCurrent(idx);
//             }}
//             className={`w-3 h-3 rounded-full transition-all ${
//               current === idx ? 'bg-white w-6' : 'bg-gray-500'
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
