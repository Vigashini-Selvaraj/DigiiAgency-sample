"use client";
import Image from "next/image";

export default function Hero({ theme }) {
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
                theme === "dark" ? "btn-outline-light" : "btn-outline-primary"
              }`}
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="mt-4 mt-lg-0 ms-lg-5 text-center">
          <Image
            src="/hero-illustration.jpg"
            alt="Hero Illustration"
            width={800}
            height={600}
            className="img-fluid"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}


