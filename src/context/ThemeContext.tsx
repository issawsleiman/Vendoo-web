import { createContext, useContext, useState } from "react";

interface Theme {
  // Whether dark mode is currently on or off
  isDark: boolean;

  // Function to toggle between light/dark
  setThemeToggle: () => void;
}

// Create the context with an initial null value (no provider yet)
const ThemeContext = createContext<Theme | null>(null);

// Create a provider component to wrap app and manage theme state
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // useState to store whether dark mode is active
  const [isDarkTheme, setDarkTheme] = useState(false);

  // function that flips the current theme value
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ isDark: isDarkTheme, setThemeToggle: toggleTheme }}
    >
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme anywhere
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
