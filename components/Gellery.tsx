"use client";
import React, { useState, useEffect } from "react";
import { Filter, Play, Image } from "lucide-react";
import ImageCard from "./iImageCard";
import ImageModal from "./ImageModel";
// theme provider removed; default to light mode

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  tags: string[];
  type: "image" | "video";
  thumbnail?: string;
}

const galleryItems: GalleryItem[] = [
  // Images from public folder
  {
    id: 1,
    src: "/images/caluula1.jpg",
    title: "Caluula Beach",
    category: "Nature",
    location: "Caluula, Somalia",
    date: "March 2024",
    description:
      "Beautiful beach view of Caluula with pristine waters and golden sand.",
    tags: ["beach", "ocean", "nature"],
    type: "image",
  },
  {
    id: 2,
    src: "/images/eyl.jpg",
    title: "Eyl Coastline",
    category: "Nature",
    location: "Eyl, Somalia",
    date: "February 2024",
    description:
      "Stunning coastline view of Eyl with dramatic cliffs and turquoise waters.",
    tags: ["coastline", "cliffs", "nature"],
    type: "image",
  },
  {
    id: 3,
    src: "/images/Laas.jpg",
    title: "Laas Geel Rock Art",
    category: "Culture",
    location: "Laas Geel, Somalia",
    date: "January 2024",
    description: "Ancient rock art paintings dating back thousands of years.",
    tags: ["rock art", "ancient", "culture"],
    type: "image",
  },
  {
    id: 4,
    src: "/images/camelfor.jpg",
    title: "Camel Caravan",
    category: "Culture",
    location: "Somalia",
    date: "December 2023",
    description: "Traditional camel caravan crossing the desert landscape.",
    tags: ["camel", "desert", "traditional"],
    type: "image",
  },
  {
    id: 5,
    src: "/images/drivers.jpg",
    title: "Drivers",
    category: "People",
    location: "Somalia",
    date: "November 2023",
    description: "Professional drivers for your journey.",
    tags: ["drivers", "people", "transport"],
    type: "image",
  },
  {
    id: 6,
    src: "/images/luudo.jpg",
    title: "Luudo Beach",
    category: "Nature",
    location: "Luudo, Somalia",
    date: "October 2023",
    description: "Pristine beach with crystal clear waters and white sand.",
    tags: ["beach", "ocean", "pristine"],
    type: "image",
  },
  {
    id: 7,
    src: "/images/som.jpg",
    title: "saxare Market",
    category: "Culture",
    location: "Somalia",
    date: "September 2023",
    description: "Vibrant local market with traditional goods and crafts.",
    tags: ["market", "local", "traditional"],
    type: "image",
  },
  {
    id: 8,
    src: "/images/fish1.jpg",
    title: "Desert Sunset",
    category: "Nature",
    location: "Somalia",
    date: "August 2023",
    description: "Breathtaking sunset over the desert landscape.",
    tags: ["sunset", "desert", "landscape"],
    type: "image",
  },
  {
    id: 9,
    src: "/images/xabo1.jpg",
    title: "Morning Dawn",
    category: "Nature",
    location: "Somalia",
    date: "July 2023",
    description: "Early morning light breaking over the horizon.",
    tags: ["dawn", "morning", "light"],
    type: "image",
  },
  {
    id: 10,
    src: "/images/lamkasay.jpg",
    title: "Lamkasay View",
    category: "Nature",
    location: "Lamkasay, Somalia",
    date: "June 2023",
    description: "Panoramic view of the Lamkasay region.",
    tags: ["panorama", "view", "landscape"],
    type: "image",
  },
  {
    id: 11,
    src: "/images/muqdisho.jpg",
    title: "Ayl Village",
    category: "Culture",
    location: "Ayl, Somalia",
    date: "May 2023",
    description: "Traditional village life and architecture.",
    tags: ["village", "traditional", "architecture"],
    type: "image",
  },
  {
    id: 12,
    src: "/images/Laas.jpg",
    title: "Local Women",
    category: "People",
    location: "Somalia",
    date: "April 2023",
    description: "Local women in traditional attire.",
    tags: ["women", "traditional", "culture"],
    type: "image",
  },
 
];

const categories = ["All", "Nature", "Culture", "Adventure", "People"];

interface GalleryProps {
  defaultMediaType?: "all" | "images" | "videos";
}

const Gallery: React.FC<GalleryProps> = ({ defaultMediaType = "all" }) => {
  const isDark = false;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [mediaType, setMediaType] = useState<"all" | "images" | "videos">(
    defaultMediaType
  );

  useEffect(() => {
    let filtered = galleryItems;

    // Filter by media type
    if (mediaType !== "all") {
      filtered = filtered.filter((item) =>
        mediaType === "images" ? item.type === "image" : item.type === "video"
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [selectedCategory, mediaType]);

  const handleImageClick = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedItem(filteredItems[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedItem(filteredItems[selectedIndex + 1]);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedIndex(0);
  };

  // Get header text based on media type
  const getHeaderText = () => {
    switch (mediaType) {
      case "images":
        return "Photo Collection";
      case "videos":
        return "Video Collection";
      default:
        return "Gallery Collection";
    }
  };

  const getHeaderSubtext = () => {
    switch (mediaType) {
      case "images":
        return "Discover breathtaking moments from our photo collection";
      case "videos":
        return "Experience our adventures through stunning video content";
      default:
        return "Discover breathtaking moments from our adventures around the world";
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-slate-50 to-blue-50"
      }`}
    >
      {/* Header */}
      <div
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"
        } shadow-sm sticky top-0 z-40 border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1
              className={`text-4xl lg:text-5xl font-bold mb-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {getHeaderText()}
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-slate-600"
              }`}
            >
              {getHeaderSubtext()}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Media Type Filter - Only show when mediaType is "all" */}
        {defaultMediaType === "all" && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Media Type:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setMediaType("all")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    mediaType === "all"
                      ? "bg-blue-600 text-white shadow-lg"
                      : isDark
                      ? "bg-gray-700 text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400"
                      : "bg-white text-slate-600 border border-slate-300 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <Image className="w-4 h-4" />
                  All
                </button>
                <button
                  onClick={() => setMediaType("images")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    mediaType === "images"
                      ? "bg-blue-600 text-white shadow-lg"
                      : isDark
                      ? "bg-gray-700 text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400"
                      : "bg-white text-slate-600 border border-slate-300 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <Image className="w-4 h-4" />
                  Photos
                </button>
                <button
                  onClick={() => setMediaType("videos")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    mediaType === "videos"
                      ? "bg-blue-600 text-white shadow-lg"
                      : isDark
                      ? "bg-gray-700 text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400"
                      : "bg-white text-slate-600 border border-slate-300 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <Play className="w-4 h-4" />
                  Videos
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-slate-300"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>

            <div
              className={`${
                isFilterOpen ? "block" : "hidden"
              } lg:block w-full lg:w-auto`}
            >
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : isDark
                        ? "bg-gray-700 text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400 hover:shadow-md"
                        : "bg-white text-slate-600 border border-slate-300 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`text-sm ml-auto ${
                isDark ? "text-gray-400" : "text-slate-500"
              }`}
            >
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredItems.map((item, index) => (
              <ImageCard
                key={item.id}
                image={item}
                index={index}
                onClick={() => handleImageClick(item, index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-gray-300" : "text-slate-700"
              }`}
            >
              No items found
            </h3>
            <p className={isDark ? "text-gray-400" : "text-slate-500"}>
              Try adjusting your filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Image/Video Modal */}
      {selectedItem && (
        <ImageModal
          image={selectedItem}
          onClose={handleCloseModal}
          currentIndex={selectedIndex + 1}
          totalImages={filteredItems.length}
          onPrevious={selectedIndex > 0 ? handlePrevious : undefined}
          onNext={
            selectedIndex < filteredItems.length - 1 ? handleNext : undefined
          }
        />
      )}
    </div>
  );
};

export default Gallery;
