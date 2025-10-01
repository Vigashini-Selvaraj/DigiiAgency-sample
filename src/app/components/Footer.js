"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold" style={{ color: "#ffffff" }}>DigiAgency</h3>
            <p className="text-white mt-2">
              Helping brands grow online with innovative digital marketing solutions. Let’s create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-white">Contact Us</h5>
            <p className="text-white mb-1">Email: contact@digiagency.com</p>
            <p className="text-white mb-1">Phone: +91 12345 67890</p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3 gap-3">
              <a href="#" className="social-btn"><FaFacebookF /></a>
              <a href="#" className="social-btn"><FaTwitter /></a>
              <a href="#" className="social-btn"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-4 pt-3 border-top border-white text-white small">
          &copy; {new Date().getFullYear()} DigiAgency. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: #ffffff;
        }
        .footer-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #ffd700;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: rgba(255,255,255,0.2);
          color: #fff;
          border-radius: 50%;
          font-size: 16px;
          transition: transform 0.3s, background 0.3s;
        }
        .social-btn:hover {
          transform: scale(1.2);
          background: rgba(255,255,255,0.4);
        }
        .border-top {
          border-color: rgba(255,255,255,0.3) !important;
        }
      `}</style>
    </footer>
  );
}

