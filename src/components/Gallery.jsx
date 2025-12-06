import React from 'react'

function Gallery() {
  return (
     <section id="gallery" className="py-4 py-md-4">
        <div className="container">
          <h3 className="fw-bold mb-4">Gallery & Work</h3>
          <div className="row g-3">
            {[
              {
                src: "/images/life-fitness-gym-website-samana.webp",
                alt: "Best Life Fitness Gym website development in Samana Patiala Punjab",
              },
              {
                src: "/images/website-development-samana.webp",
                alt: "Best business website development services Samana Patiala Punjab",
              },
              {
                src: "/images/google-ads-poster-thumbnail-design.webp",
                alt: "Google Ads poster and thumbnail design services Samana Patiala Punjab",
              },
              {
                src: "/images/digital-marketing-website-samana.webp",
                alt: "Professional digital marketing and SEO optimized website Samana Patiala Punjab",
              },
            ].map((img, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Gallery