"use client";
import { useState, useEffect, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// Context to share theme globally
export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <html lang="en">
        <body style={{ margin: 0 }}>
          <Navbar /> {/* Sticky gradient navbar */}
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}



