"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ theme }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // skeleton duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="py-5 d-flex align-items-center"
      style={{
        minHeight: "100vh",
        transition: "all 0.3s ease",
        backgroundColor: theme === "dark" ? "#121212" : "#f8f9fa",
        color: theme === "dark" ? "#ffffff" : "#212529",
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        <div className="text-center text-lg-start flex-grow-1">
          {loading ? (
            <>
              <div className="skeleton skeleton-title mb-3"></div>
              <div className="skeleton skeleton-text mb-2"></div>
              <div className="skeleton skeleton-text mb-2"></div>
              <div className="skeleton skeleton-text mb-2"></div>
              <div className="d-flex gap-3 mt-3">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
            </>
          ) : (
            <>
              <h1 className="display-4 fw-bold mb-3">
                Grow Your Business With{" "}
                <span
                  className="gradient-text"
                  style={{ color: theme === "dark" ? "#ffffff" : undefined }}
                >
                  DigiAgency
                </span>
              </h1>
              <p
                className="lead mb-4"
                style={{ color: theme === "dark" ? "#e0e0e0" : "#6c757d" }}
              >
                🚀 We help your brand shine online. <br />
                📈 Increase traffic, engagement & revenue. <br />
                🌟 Professional solutions tailored for you.
              </p>
              <div>
                <a
                  href="#contact"
                  className={`btn btn-lg me-3 mb-2 ${
                    theme === "dark" ? "btn-outline-light" : "btn-primary"
                  }`}
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className={`btn btn-lg mb-2 ${
                    theme === "dark"
                      ? "btn-outline-light"
                      : "btn-outline-primary"
                  }`}
                >
                  Our Services
                </a>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 mt-lg-0 ms-lg-5 text-center">
          {loading ? (
            <div className="skeleton skeleton-image"></div>
          ) : (
            <Image
              src="/hero-illustration-removebg-preview.png"
              alt="Hero Illustration"
              width={800}
              height={600}
              className="img-fluid"
              priority
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .skeleton {
          background-color: #e0e0e0;
          border-radius: 6px;
          animation: pulse 1.5s infinite;
        }
        .skeleton-title {
          width: 70%;
          height: 40px;
          margin-bottom: 16px;
        }
        .skeleton-text {
          width: 100%;
          height: 20px;
          margin-bottom: 12px;
        }
        .skeleton-btn {
          width: 120px;
          height: 40px;
        }
        .skeleton-image {
          width: 800px;
          height: 600px;
          border-radius: 12px;
          margin: 0 auto;
        }
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}


