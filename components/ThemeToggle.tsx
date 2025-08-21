// 'use client'

// import React from 'react';
// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from './ThemeProvider';

// export default function ThemeToggle() {
//   const { theme, setTheme, isDark } = useTheme();
//   const [mounted, setMounted] = React.useState(false);

//   // Ensure we only render after component has mounted on client
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   // Don't render anything until component is mounted to avoid hydration mismatch
//   if (!mounted) {
//     return (
//       <button
//         className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//         aria-label="Toggle theme"
//       >
//         <Sun className="h-5 w-5 opacity-0" />
//       </button>
//     );
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className={`p-2 rounded-lg transition-colors duration-200 ${
//         isDark
//           ? 'text-gray-300 hover:text-white hover:bg-gray-700'
//           : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
//       }`}
//       aria-label="Toggle theme"
//     >
//       {theme === 'light' ? (
//         <Moon className="h-5 w-5" />
//       ) : (
//         <Sun className="h-5 w-5" />
//       )}
//     </button>
//   );
// }

// // "use client";

// // export default function ThemeToggle() {
// //   return null;
// // }

"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure we only render after component has mounted on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render anything until component is mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2">
        <Sun className="h-5 w-5 opacity-0" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDark
          ? "text-gray-300 hover:text-white hover:bg-gray-700"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
