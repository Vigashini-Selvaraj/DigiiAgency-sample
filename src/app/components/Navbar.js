"use client";
import { useContext, useState } from "react";
import { ThemeContext } from "../layout"; // adjust path if needed
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
  className="navbar navbar-expand-lg sticky-top shadow-sm py-3"
  style={{
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    zIndex: 9999, // high enough to stay on top
  }}
>

      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          DigiAgency
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                className="btn btn-sm btn-toggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          font-weight: 500;
          margin-right: 1rem;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #ffd700;
        }
        .btn-toggle {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 6px 16px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .btn-toggle:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </nav>
  );
}
