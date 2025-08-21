// 'use client'

// import React from 'react';
// import { Search, X, MapPin, Star } from 'lucide-react';
// import { useTheme } from './ThemeProvider';
// import Image from 'next/image';

// interface SearchModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const searchResults = [
//   {
//     id: 1,
//     title: 'Santorini, Greece',
//     type: 'Destination',
//     description: 'Beautiful Greek island with stunning sunsets',
//     rating: 4.9,
//     image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg'
//   },
//   {
//     id: 2,
//     title: 'Bali, Indonesia',
//     type: 'Destination',
//     description: 'Tropical paradise with temples and beaches',
//     rating: 4.8,
//     image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
//   },
//   {
//     id: 3,
//     title: 'Machu Picchu, Peru',
//     type: 'Destination',
//     description: 'Ancient Incan citadel in the Andes',
//     rating: 4.9,
//     image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg'
//   },
//   {
//     id: 4,
//     title: 'Tokyo, Japan',
//     type: 'Destination',
//     description: 'Modern metropolis with traditional culture',
//     rating: 4.7,
//     image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg'
//   },
//   {
//     id: 5,
//     title: 'Paris, France',
//     type: 'Destination',
//     description: 'City of love with iconic landmarks',
//     rating: 4.8,
//     image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
//   },
// ];

// export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
//   const { isDark } = useTheme();
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const [filteredResults, setFilteredResults] = React.useState(searchResults);

//   React.useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredResults(searchResults);
//     } else {
//       const filtered = searchResults.filter(result =>
//         result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         result.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredResults(filtered);
//     }
//   }, [searchQuery]);

//   React.useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
//       <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
//       <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl ${
//         isDark ? 'bg-gray-800' : 'bg-white'
//       }`}>
//         {/* Search Header */}
//         <div className={`flex items-center p-4 border-b ${
//           isDark ? 'border-gray-700' : 'border-gray-200'
//         }`}>
//           <Search className={`h-5 w-5 mr-3 ${
//             isDark ? 'text-gray-400' : 'text-gray-500'
//           }`} />
//           <input
//             type="text"
//             placeholder="Search destinations, experiences..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={`flex-1 bg-transparent outline-none text-lg ${
//               isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
//             }`}
//             autoFocus
//           />
//           <button
//             onClick={onClose}
//             className={`p-2 rounded-lg transition-colors ${
//               isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
//             }`}
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Search Results */}
//         <div className="max-h-96 overflow-y-auto">
//           {filteredResults.length > 0 ? (
//             <div className="p-2">
//               {filteredResults.map((result) => (
//                 <div
//                   key={result.id}
//                   className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
//                     isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
//                   }`}
//                   onClick={onClose}
//                 >
//                   <Image
//                     src={result.image}
//                     alt={result.title}
//                     width={48}
//                     height={48}
//                     className="rounded-lg object-cover mr-4"
//                   />
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className={`font-semibold ${
//                         isDark ? 'text-white' : 'text-gray-900'
//                       }`}>
//                         {result.title}
//                       </h3>
//                       <div className="flex items-center">
//                         <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
//                         <span className={`text-sm ${
//                           isDark ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {result.rating}
//                         </span>
//                       </div>
//                     </div>
//                     <p className={`text-sm ${
//                       isDark ? 'text-gray-400' : 'text-gray-600'
//                     }`}>
//                       {result.description}
//                     </p>
//                     <div className="flex items-center mt-1">
//                       <MapPin className={`h-3 w-3 mr-1 ${
//                         isDark ? 'text-gray-500' : 'text-gray-400'
//                       }`} />
//                       <span className={`text-xs ${
//                         isDark ? 'text-gray-500' : 'text-gray-400'
//                       }`}>
//                         {result.type}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className={`p-8 text-center ${
//               isDark ? 'text-gray-400' : 'text-gray-500'
//             }`}>
//               <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
//               <p>No results found for "{searchQuery}"</p>
//               <p className="text-sm mt-2">Try searching for destinations, experiences, or activities</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// } 