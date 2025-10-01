"use client";

import React, { useState, createContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark/light classes to body dynamically
  useEffect(() => {
    document.body.className = darkMode ? "dark-bg" : "light-bg";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}


