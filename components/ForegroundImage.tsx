// 'use client';

// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export default function ForegroundImage() {
//   const pathname = usePathname();
//   if (pathname === '/') return null;
//   return (
//     <div className="absolute inset-0 z-0 w-full h-[40vh] md:h-[50vh] overflow-hidden">
//       <Image
//         src="/images/forground.jpeg"
//         alt="Foreground"
//         fill
//         className="object-cover object-center"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/40" />
//     </div>
//   );
// } 