import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} Kaepi Web Solutions, Samana, Patiala · All rights
          reserved.
        </p>
        <p>Software Engineer : Kamalpreet Singh  · Phone: +91 7508650365</p>

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/profile.php?id=61584568301907&sk=grid"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/kaepiwebsolutions/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Kamalpreet62444"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com/@kaepiwebsolutionssamana?si=mOvBWyuERZjMtqRZ"
            target="_blank"
            aria-label="Youtube"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
