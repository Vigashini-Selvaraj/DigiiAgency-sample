"use client";

export default function Portfolio({ theme }) {
  const projects = [
    { title: "E-commerce Website", img: "/42.jpeg" },
    { title: "Brand Campaign", img: "/52.jpeg" },
    { title: "Social Media Strategy", img: "/62.jpeg" },
  ];

  return (
    <section className={`py-5 ${theme === "dark" ? "dark-bg" : "light-bg"}`}>
      <div className="container text-center mb-5">
        <h2 className="fw-bold section-title">
          <span style={{ color: theme === "dark" ? "#ffffff" : "#212529" }}>Our </span>
          <span className="gradient-text">Portfolio</span>
        </h2>
        <p style={{ color: theme === "dark" ? "#ffffff" : "#6c757d" }}>
          A showcase of our latest projects and creative strategies that helped businesses grow.
        </p>
      </div>

      <div className="row">
        {projects.map((project, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm portfolio-card"
              style={{
                backgroundColor: theme === "dark" ? "#1c1c1c" : "#ffffff",
                color: theme === "dark" ? "#ffffff" : "#212529",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 style={{ color: theme === "dark" ? "#ffffff" : "#212529" }} className="card-title text-center mt-3">
                  {project.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .portfolio-card {
          border-radius: 12px;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          overflow: hidden;
        }
        .portfolio-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .dark-bg {
          background-color: #121212;
        }
        .light-bg {
          background-color: #f8f9fa;
        }
      `}</style>
    </section>
  );
}


