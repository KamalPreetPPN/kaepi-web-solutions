import React from 'react'
import styles from "../App.module.css";
function Pricing() {
  return (
     <section id="pricing" className={`mt-3 py-5  ${styles.softbg}`}>
        <div className="container text-center">
          <h3 className="fw-bold">Pricing & Packages</h3>
          <p className={`lead ${styles.priceP}`}>
            Reasonable prices for small businesses and individual creators.
            Custom quotes available.
          </p>
          <div className="d-flex justify-content-center">
            <a href="#contact" className={`btn btn-dark me-2 ${styles.priceP}`}>
              Contact for Quote
            </a>
            <a
              href="tel:+917508650365"
              className={`btn btn-outline-dark ${styles.priceP}`}
            >
              Call Now: 7508650365
            </a>
          </div>
        </div>
      </section>
  )
}

export default Pricing