// "use client";

// import React from "react";

// type Theme = "light";

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
//   isDark: boolean;
// }

// const ThemeContext = React.createContext<ThemeContextType>({
//   theme: "light",
//   setTheme: () => {},
//   isDark: false,
// });

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   // No state, no effects: always light mode
//   const contextValue = React.useMemo(
//     () => ({ theme: "light" as const, setTheme: () => {}, isDark: false }),
//     []
//   );

//   return (
//     <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   // Always returns light theme context
//   return React.useContext(ThemeContext);
// }

"use client";

import React from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  isDark: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or prefer-color-scheme
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    // Update document class and localStorage
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const contextValue = React.useMemo(
    () => ({
      theme,
      setTheme,
      isDark: theme === "dark",
    }),
    [theme]
  );

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="hidden" suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
