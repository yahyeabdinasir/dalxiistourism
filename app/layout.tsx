// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsAppChat from "@/components/WhatsAppChat";
// import { ThemeProvider } from '@/ThemeProvider'
// import ThemeToggle from "@/components/ThemeToggle";

// // ✅ Self-hosted Yanone Kaffeesatz from /public/fonts
// const yanone = localFont({
//   src: [
//     {
//       path: "../public/fonts/YanoneKaffeesatz-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/YanoneKaffeesatz-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-yanone",
// });

// export const metadata: Metadata = {
//   title: "Dalxiis Tourism",
//   description: "Discover amazing destinations with Dalxiis Tourism",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning className={`${yanone.variable} font-sans`}>
//       <body suppressHydrationWarning>
//         <ThemeProvider>

//         <div className="min-h-screen relative bg-white">
//           <Navbar />
//             <ThemeToggle />
//       </div>
//       <div>
//           <main className="relative z-10">{children}</main>
//           <Footer />
//           <WhatsAppChat />
//         </div>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

// ✅ Self-hosted Yanone Kaffeesatz from /public/fonts
const yanone = localFont({
  src: [
    {
      path: "../public/fonts/YanoneKaffeesatz-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YanoneKaffeesatz-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-yanone",
});

export const metadata: Metadata = {
  title: "Dalxiis Tourism",
  description:
    " Discover amazing destinations with Dalxiis Tourism (kudalxiis dhulkaaga hooyo  ee Somalia iyo fudeediyaha safarkaaga ee  dalxiis tourism )",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${yanone.variable} ${yanone.className} font-sans antialiased`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen relative bg-background text-foreground">
            <Navbar />
            {/* Move ThemeToggle inside Navbar or keep it here based on your design */}
            <ThemeToggle />
            <main className="relative z-10">{children}</main>
            <Footer />
            <WhatsAppChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
