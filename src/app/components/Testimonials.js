"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback:
      "DigiAgency helped our brand grow tremendously! Highly recommended.",
    img: "/1.jpeg",
  },
  {
    name: "Michael Smith",
    feedback:
      "Amazing service and results. Our traffic doubled in just 3 months!",
    img: "/2.jpeg",
  },
  {
    name: "Sarah Lee",
    feedback:
      "Professional team, great results! Our engagement skyrocketed.",
    img: "/3.jpeg",
  },
];

export default function Testimonials({ theme }) {
  const [visible, setVisible] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-5 ${isDark ? "bg-dark text-white" : "bg-light"}`}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">
            <span className={isDark ? "text-white" : "text-dark"}>What Our </span>
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className={isDark ? "text-white-50" : "text-muted"}>
            Hear from our clients and see how we’ve transformed their businesses.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 testimonial-card-wrapper ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card h-100 p-4 shadow-sm testimonial-card position-relative">
                {/* Decorative Quote */}
                <span className="quote-icon">❝</span>

                {/* Image */}
                <div className="img-box mx-auto mb-3">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="img-fluid rounded-circle"
                  />
                </div>

                {/* Content */}
                <h5 className="fw-bold">{t.name}</h5>
                <p className="text-muted">{t.feedback}</p>

                {/* Star rating */}
                <div className="mt-2 text-warning">★★★★☆</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-card-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .testimonial-card-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gradient-text {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .testimonial-card {
          border-radius: 20px;
          background: #ffffff; /* card stays white even in dark mode */
          transition: transform 0.4s, box-shadow 0.4s;
          padding-top: 2rem;
          overflow: hidden;
        }
        .testimonial-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(0, 123, 255, 0.2);
        }

        .img-box {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-radius: 50%;
          border: 3px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(45deg, #6a11cb, #2575fc);
          transition: transform 0.5s;
        }
        .testimonial-card:hover .img-box {
          transform: rotate(10deg) scale(1.1);
        }
        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .quote-icon {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 3rem;
          color: rgba(0, 123, 255, 0.1);
          animation: pulse 3s infinite;
        }
      `}</style>
    </section>
  );
}
