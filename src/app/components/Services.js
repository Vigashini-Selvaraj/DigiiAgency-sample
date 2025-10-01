"use client";
import { FaSearch, FaBullhorn, FaUsers, FaPalette } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Services({ theme }) {
  const [visible, setVisible] = useState(false);

  const services = [
    {
      title: "SEO",
      desc: "Improve your search engine rankings and visibility.",
      icon: <FaSearch size={40} className="service-icon" />,
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    },
    {
      title: "Paid Ads",
      desc: "Drive targeted traffic to your website efficiently.",
      icon: <FaBullhorn size={40} className="service-icon" />,
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    },
    {
      title: "Social Media",
      desc: "Engage your audience across all platforms.",
      icon: <FaUsers size={40} className="service-icon" />,
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    },
    {
      title: "Branding",
      desc: "Create a strong, recognizable brand identity.",
      icon: <FaPalette size={40} className="service-icon" />,
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-5 ${theme === "dark" ? "dark-bg-soft" : "light-bg"}`}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">
            <span style={{ color: theme === "dark" ? "#ffffff" : "#212529" }}>Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p style={{ color: theme === "dark" ? "#ffffff" : "#6c757d" }}>
            We provide innovative solutions to grow your business online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-3 service-card-wrapper ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card h-100 text-center p-4 shadow-sm service-card">
                <div
                  className="icon-wrapper mb-3"
                  style={{ background: service.gradient }}
                >
                  {service.icon}
                </div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Section background for dark/light */
        .dark-bg-soft {
          background-color: #1a1a1a; /* dark section bg */
        }
        .light-bg {
          background-color: #f8f9fa;
        }

        /* Card wrapper animation */
        .service-card-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .service-card-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card styling */
        .service-card {
          background: #ffffff; /* cards stay white */
          color: #212529;
          border-radius: 20px;
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(0, 123, 255, 0.2);
        }

        /* Icon styling */
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
          color: white;
          transition: transform 0.5s, box-shadow 0.5s;
        }
        .service-card:hover .icon-wrapper {
          transform: scale(1.2) rotate(10deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .service-icon {
          width: 40px;
          height: 40px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}


