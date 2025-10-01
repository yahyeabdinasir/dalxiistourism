'use client'

import React, { useState } from "react";
import Image from "next/image";
// theme provider removed; default to light mode

const WhatsAppChat = () => {
  const isDark = false;
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi there! How can we help you plan your next adventure?");
    const phoneNumber = "+252 907 797 695";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Delay hiding the tooltip on mobile to allow users to interact with it
    setTimeout(() => setIsHovered(false), 3000);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div 
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group whatsapp-button"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </div>

      {/* Chat Tooltip - Shows on hover/touch */}
      {isHovered && (
        <div className={`fixed bottom-24 right-6 z-50 rounded-lg shadow-xl p-4 max-w-xs border whatsapp-tooltip ${
          isDark 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center mb-3">
            <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
              <Image 
                src="/images/dalxiis2.png" 
                alt="Dalxiis Tourism" 
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <h4 className={`font-semibold ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Dalxiis Tourism
              </h4>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <p className={`text-sm mb-3 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Hi there! How can we help you plan your next adventure?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Start Chat
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat; 