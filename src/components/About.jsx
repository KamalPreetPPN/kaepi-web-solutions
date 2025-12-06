import React from 'react'
import styles from "../App.module.css";
function About() {
  return (
    <section id="about" className="py-md-5 py-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="fw-bold">About Kaepi Web Solutions</h2>
                  <p className={`lead ${styles.aboutP}`}>
                    Kaepi Web Solutions (Samana, Patiala) offers affordable website
                    development, SEO, Google Business Profile ranking, social media
                    ads, poster & thumbnail design, and professional photo editing
                    services. We help local businesses improve visibility, attract
                    customers, and grow online.
                  </p>
                  <ul>
                    <li>Local business SEO focused on Samana, Patiala & Punjab</li>
                    <li>Fast, SEO-friendly websites</li>
                    <li>Creative poster/thumbnail design</li>
                    <li>Facebook/Instagram/YouTube ads</li>
                    <li>Quick delivery & affordable pricing</li>
                  </ul>
                  <p className="mb-0">
                    <strong>Contact:</strong>{" "}
                    <a href="tel:+917508650365">+91 75086 50365</a>
                  </p>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 text-center">
                  <img
                    src="/images/professional-website-solutions-samana.webp"
                    alt=" Kaepi Web Solutions - Professional Website Development and Digital Marketing Services in Samana, Punjab"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </section>
  )
}

export default About