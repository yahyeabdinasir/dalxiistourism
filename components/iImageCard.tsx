"use client";
import React from "react";
import { GalleryItem } from "./Gellery";
import { Play } from "lucide-react";
// theme provider removed; default to light mode

interface ImageCardProps {
  image: GalleryItem;
  index: number;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, onClick }) => {
  const isDark = false;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
      onClick={onClick}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Image or Video Thumbnail */}
      <div className="w-48 h-64 overflow-hidden relative">
        <img
          src={image.type === "video" && image.thumbnail ? image.thumbnail : image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />

        {/* Video Play Button Overlay */}
        {image.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-blue-600 fill-current" />
            </div>
          </div>
        )}

        {/* Media Type Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            image.type === "video"
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          }`}>
            {image.type === "video" ? "Video" : "Photo"}
          </span>
        </div>

        {/* Click to View Indicator */}
        <div className="absolute bottom-2 left-2">
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
            Click to view
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

