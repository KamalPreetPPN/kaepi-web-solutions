import styles from "./App.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import navStyles from "./styles/Navbar.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";
import Headerr from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
const HERO_IMAGES = [
  {
    src: "/images/business-website-development-samana.webp",
    alt: "Website development Samana - Kaepi Web Solutions",
    title: "Professional Website Development",
    text: "Affordable business websites with SEO & fast delivery.",
    btn1: "Get Website",
    btn2: "See Pricing",
  },
  {
    src: "/images/social-media-marketing-facebook-instagram-ads.webp",
    alt: "Social media marketing Samana Patiala",
    title: "Grow Your Business With Social Ads",
    text: "Facebook, Instagram & Google Ads that bring customers.",
    btn1: "Start Ads",
    btn2: "View Services",
  },
  {
    src: "/images/seo-google-ranking-business-profile-samana.webp",
    alt: "SEO services Samana Patiala Punjab",
    title: "Rank Higher on Google",
    text: "Local SEO, Google Business Profile & Keywords setup.",
    btn1: "Book SEO",
    btn2: "Contact Us",
  },
  {
    src: "/images/poster-thumbnail-design-branding-services.webp",
    alt: "Thumbnail and poster design",
    title: "Posters & Thumbnail Designs",
    text: "Eye-catching, viral-style thumbnails to boost views.",
    btn1: "Order Now",
    btn2: "Portfolio",
  },
];

export default function App() {

  
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <Headerr HERO_IMAGES={HERO_IMAGES}></Headerr>
      <About></About>
      <Services></Services>
      <Gallery></Gallery>
      <Pricing></Pricing>
      <Contact></Contact>

      
      
      <section id="footer" className={` mt-5 ${styles.priceBox}`}>
        <Footer></Footer>
      </section>
    </div>
  );
}
