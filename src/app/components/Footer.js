"use client";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer({ theme }) {
  return (
    <footer
      className="footer py-5"
      style={{
        background:
          theme === "dark"
            ? "#121212" // Dark mode background
            : "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Default blue gradient
        color: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <h3 className="gradient-text fw-bold">DigiAgency</h3>
            <p className="mt-2">
              Helping brands grow online with innovative digital marketing solutions. Let’s create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">Email: contact@digiagency.com</p>
            <p className="mb-1">Phone: +91 12345 67890</p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3 gap-3">
              <a href="#" className="social-btn">FB</a>
              <a href="#" className="social-btn">TW</a>
              <a href="#" className="social-btn">IG</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top text-white small">
          &copy; {new Date().getFullYear()} DigiAgency. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #ffd700;
        }
        .social-btn {
          display: inline-block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          background: #fff;
          color: #6a11cb;
          border-radius: 50%;
          text-align: center;
          font-weight: bold;
          transition: transform 0.3s;
        }
        .social-btn:hover {
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}
