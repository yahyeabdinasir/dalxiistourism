"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "./Gellery";

interface ImageModalProps {
  image: GalleryItem;
  onClose: () => void;
  currentIndex?: number;
  totalImages?: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image, 
  onClose, 
  currentIndex = 1, 
  totalImages = 1,
  onPrevious,
  onNext 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && onPrevious) {
        onPrevious();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleArrowKeys);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrevious, onNext]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex} of {totalImages}
        </div>

        {/* Image or Video */}
        <div className="w-full h-full flex items-center justify-center">
          {image.type === "video" ? (
            <video
              src={image.src}
              controls
              className="max-w-full max-h-full object-contain"
              poster={image.thumbnail}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                className="object-contain"
                quality={95}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
