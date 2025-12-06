import React from 'react'
import styles from "../App.module.css";
function Services() {
  return (
   <section id="services" className="py-4 py-md-5 bg-white">
           <div className="container">
             <h3 className="fw-bold mb-4">Our Services</h3>
             <div className="row g-4">
               {[
                 {
                   title: "Website Development (React / WordPress / HTML)",
                   desc: "Mobile responsive websites built for conversions and SEO.",
                 },
                 {
                   title: "Search Engine Optimization (SEO)",
                   desc: "On-page, image tags, meta, local SEO and Google Business optimization.",
                 },
                 {
                   title: "Paid Ads (Google / Facebook /YouTube / Instagram)",
                   desc: "Campaign setup, creatives, targeting and management.",
                 },
                 {
                   title: "Social Media & Accounts Management",
                   desc: "Daily posting, content creation and analytics.",
                 },
                 {
                   title: "Poster & Thumbnail Design",
                   desc: "High-quality thumbnails, posters, and thumbnails for YouTube & social media.",
                 },
                 {
                   title: "Gallery & Portfolio",
                   desc: "Showcase of previous work (images, videos, case studies).",
                 },
               ].map((s, i) => (
                 <div className="col-md-4" key={i}>
                   <div className={`card h-100  shadow-sm ${styles.scard}`}>
                     <div className="card-body">
                       <h5 className="card-title">{s.title}</h5>
                       <p className="card-text">{s.desc}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
   
  )
}

export default Services