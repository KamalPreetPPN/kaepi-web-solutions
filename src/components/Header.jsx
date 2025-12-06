import React from 'react'
import styles from "../App.module.css";
import navStyles from "../styles/Navbar.module.css";
function Headerr({HERO_IMAGES}) {
  return (
    <header id="hero" className="bg-light">
            <div
              id="heroCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="6000"
              data-bs-pause="false"
            >
              <div className={`carousel-inner ${styles.cinner}`}>
                {HERO_IMAGES.map((img, idx) => (
                  <div
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    key={img.src}
                  >
                    <img
                      src={img.src}
                      className={`d-block w-100 ${styles.heroImg}`}
                      alt={img.alt}
                    />
    
                    <div
                      className={`carousel-caption d-none d-md-block text-start ${styles.heroCaption}`}
                    >
                      {/* Use h1 ONLY for first slide, h2 for others (SEO best practice) */}
                      {idx === 0 ? (
                        <h1 className={`display-6 fw-bold ${styles.text}`}>
                          {img.title}
                        </h1>
                      ) : (
                        <h2 className={`display-6 fw-bold ${styles.text}`}>
                          {img.title}
                        </h2>
                      )}
    
                      <p className="lead">{img.text}</p>
    
                      <a
                        href="#contact"
                        className={`btn text-white me-2 ${navStyles.btnn}`}
                      >
                        {img.btn1}
                      </a>
    
                      <a href="#services" className="btn btn-outline-light">
                        {img.btn2}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
    
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
    
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </header>
  )
}

export default Headerr