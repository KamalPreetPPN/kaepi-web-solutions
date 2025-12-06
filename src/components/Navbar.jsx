
import React, { useState } from "react";
import styles from "../App.module.css";
import { FaWhatsapp } from "react-icons/fa";
import navStyles from "../styles/Navbar.module.css";
function Navbar() {
   const [active, setActive] = useState("about");
  
    const handleActive = (section) => {
      setActive(section);
    };
  return (
     <nav
            className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top ${styles.nav}`}
          >
            <div className="container">
              <a className={`navbar-brand fw-bold ${navStyles.logoa}`} href="#hero">
                <img
                  className={navStyles.logo}
                  src="/images/kaepi-web-solutions-logo.png"
                  alt=""
                />
              </a>
    
              <div className={navStyles.navMenu} id="navMenu">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {["about", "services", "gallery", "pricing", "contact"].map(
                    (item) => (
                      <li className="nav-item" key={item}>
                        <a
                          className={`nav-link ${navStyles.nlink} ${
                            active === item ? "active" : ""
                          }`}
                          href={`#${item}`}
                          onClick={() => handleActive(item)}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <button
                className={navStyles.wbtn}
                onClick={() => window.open("https://wa.me/917508650365", "_blank")}
              >
                Whatsapp
              </button>
              <button
                className={navStyles.wbtn2}
                onClick={() => window.open("https://wa.me/917508650365", "_blank")}
              >
                {" "}
                <FaWhatsapp />
              </button>
            </div>
          </nav>
  )
}

export default Navbar