"use client";

import { useContext } from "react";
import { ThemeContext } from "./layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Hero theme={darkMode ? "dark" : "light"} />
      <section id="services">
        <Services theme={darkMode ? "dark" : "light"} />
      </section>
      <section id="portfolio">
        <Portfolio theme={darkMode ? "dark" : "light"} />
      </section>
      <section>
        <Testimonials theme={darkMode ? "dark" : "light"} />
      </section>
    </>
  );
}

