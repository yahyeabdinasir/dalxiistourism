

// "use client";

// import React, { useState, useEffect } from "react";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const ServicesSection: React.FC = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const services = [
//     "Historical and Natural Tours",
//     "Festivals Ceremonies Tour",
//     "",
//     "Package Tours",
//     "Cultural Tours",
//     "Holiday/Vacation Tour",
//     "",
//     "Adventure Tours",
    
//   ];

//   const images = [
//     "/images/wasiir.jpg",
//     // "/images/dawn.jpeg",
//     "/images/drivers.jpg",
//     "/images/luudo.jpg",
//     "/images/luudo.jpg",
//     "/images/luudo.jpg",
//     "/images/luudo.jpg",
//   ];

//   // Auto-change images every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8  ">
//       {/* Horizontal Layout with increased gap */}
//       <div className="flex flex-col lg:flex-row gap-10 ">
//         {" "}
//         {/* Increased gap from 6 to 10 */}
//         {/* Services List - Left Side */}
//         <div className="lg:w-2/5 flex flex-col">
//           {/* Added "Our Services" title for left section only */}
//           <h2 className="text-lg font-semibold text-gray-800 mb-6 pl-2">
//             Our Services
//           </h2>

//           <ul className="space-y-1 text-2xl flex-grow ">
//             {" "}
//             {/* Smaller text and reduced spacing */}
//             {services.map((service, index) => (
//               <li
//                 key={index}
//                 className="p-1 hover:bg-gray-50 rounded transition-colors"
//               >
//                 {service}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Image Card - Right Side */}
//         <div className="lg:w-3/5 relative group h-[480px]">
//           <div className="bg-white  shadow-lg overflow-hidden h-full  rounded-lg ">
//             <div className="relative h-full w-full">
//               <img
//                 src={images[currentImage]}
//                 alt="Tour service"
//                 className="w-full h-full object-cover transition-opacity duration-500"
//                 style={{ opacity: 1 }}
//               />
//               {/* Hover Navigation Arrows */}
//               <button
//                 onClick={prevImage}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                 aria-label="Previous image"
//               >
//                 <FiChevronLeft className="w-4 h-4 text-gray-800" />
//                 {/* Smaller arrows */}
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                 aria-label="Next image"
//               >
//                 <FiChevronRight className="w-4 h-4 text-gray-800" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;












// "use client";

// import React, { useState, useEffect } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { useTheme } from "@/components/ThemeProvider";

// const ServicesSection: React.FC = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const { isDark } = useTheme();

//   const services = [
//     "Historical and Natural Tours",
//     "Festivals Ceremonies Tour",
//     "Package Tours",
//     "Cultural Tours",
//     "Holiday/Vacation Tour",
//     "Adventure Tours",
//     "Wildlife Safaris",
//     "Desert Expeditions"
//   ];

//   const images = [
//     "/images/wasiir.jpg",
//     "/images/drivers.jpg",
//     "/images/luudo.jpg",
//     "/images/kismayo.jpg",
//     "/images/berbera.jpg",
//     "/images/garowe.png"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className={`max-w-5xl mx-auto px-4 py-12 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
//       {/* Main Title */}
//       <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-800"}`}>
//         Our Premium Tour Services
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Services List - Left Side */}
//         <div className="lg:w-2/5 flex flex-col">
//           <h3 className={`text-2xl font-semibold text-center mb-8 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
//             What We Offer
//           </h3>

//           <ul className="space-y-4 flex-grow">
//             {services.map((service, index) => (
//               <li
//                 key={index}
//                 className={`p-4 rounded-lg transition-all ${isDark ? 
//                   "hover:bg-gray-700 text-gray-300" : 
//                   "hover:bg-gray-100 text-gray-700"}`}
//               >
//                 <div className="flex items-center">
//                   <span className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
//                     •
//                   </span>
//                   <span className="text-xl">{service}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Image Card - Right Side */}
//         <div className="lg:w-3/5 relative group h-[480px]">
//           <div className={`shadow-xl overflow-hidden h-full rounded-xl ${isDark ? "border-gray-700" : "border-gray-200"}`}>
//             <div className="relative h-full w-full">
//               <img
//                 src={images[currentImage]}
//                 alt="Tour service"
//                 className="w-full h-full object-cover transition-opacity duration-500"
//                 style={{ opacity: 1 }}
//               />
              
//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevImage}
//                 className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg ${isDark ? 
//                   "bg-gray-700/80 text-white" : 
//                   "bg-white/90 text-gray-800"} transition-all`}
//                 aria-label="Previous image"
//               >
//                 <FiChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg ${isDark ? 
//                   "bg-gray-700/80 text-white" : 
//                   "bg-white/90 text-gray-800"} transition-all`}
//                 aria-label="Next image"
//               >
//                 <FiChevronRight className="w-6 h-6" />
//               </button>

//               {/* Image Indicator */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {images.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentImage(index)}
//                     className={`w-3 h-3 rounded-full ${currentImage === index ? 
//                       (isDark ? "bg-blue-400" : "bg-blue-600") : 
//                       (isDark ? "bg-gray-500" : "bg-gray-300")}`}
//                     aria-label={`Go to image ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;










"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider";

const ServicesSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { isDark } = useTheme();

  const services = [
    "Historical and Natural Tours",
    "Festivals Ceremonies Tour",
    "Package Tours",
    "Cultural Tours",
    "Holiday/Vacation Tour",
    "Adventure Tours",
    "Wildlife Safaris",
    "Desert Expeditions"
  ];

  const images = [
    "/images/wasiir.jpg",
    "/images/drivers.jpg",
    "/images/luudo.jpg",
    "/images/kismayo.jpg",
    "/images/berbera.jpg",
    "/images/garowe.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Main Title */}
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-800"}`}>
        Our Premium Tour Services
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Services List - Left Side */}
        <div className="lg:w-2/5">
          <h3 className={`text-2xl font-semibold mb-8 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            What We Offer
          </h3>

          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className={`transition-all ${isDark ? 
                  "hover:text-blue-400 text-gray-300" : 
                  "hover:text-blue-600 text-gray-700"}`}
              >
                <div className="flex items-center">
                  <span className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                    •
                  </span>
                  <span className="text-xl">{service}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Card - Right Side */}
        <div className="lg:w-3/5 relative group h-[480px]">
          <div className="overflow-hidden h-full rounded-xl">
            <div className="relative h-full w-full">
              <img
                src={images[currentImage]}
                alt="Tour service"
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: 1 }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 ${isDark ? 
                  "bg-gray-700/80 text-white" : 
                  "bg-white/90 text-gray-800"} transition-all shadow-lg`}
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 ${isDark ? 
                  "bg-gray-700/80 text-white" : 
                  "bg-white/90 text-gray-800"} transition-all shadow-lg`}
                aria-label="Next image"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full ${currentImage === index ? 
                      (isDark ? "bg-blue-400" : "bg-blue-600") : 
                      (isDark ? "bg-gray-500" : "bg-gray-300")}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;