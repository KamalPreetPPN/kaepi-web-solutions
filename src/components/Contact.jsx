
import styles from "../App.module.css";
import navStyles from "../styles/Navbar.module.css";
import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = ` Hello, my name is *${formData.name}*.
 Contact Number: ${formData.phone}
 Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/7508650365?text=${encodedText}`, "_blank");
  };
  return (
   <section id="contact" className="py-0 pt-4 pt-md-5">
           <div className="container">
             <h3 className="fw-bold mb-4">Contact Us</h3>
             <div className="row">
               <div className="col-md-6">
                 <form onSubmit={handleSubmit}>
                  <div className="mb-3">
  <label className="form-label" htmlFor="name">Your name</label>
  <input
    className="form-control"
    type="text"
    id="name"
    name="name"
    placeholder="Full Name"
    value={formData.name}
    onChange={(e) =>
      setFormData({ ...formData, name: e.target.value })
    }
  />
</div>

<div className="mb-3">
  <label className="form-label" htmlFor="phone">Phone or WhatsApp</label>
  <input
    className="form-control"
    type="tel"
    id="phone"
    name="phone"
    placeholder="Phone or WhatsApp"
    value={formData.phone}
    onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
    }
  />
</div>

<div className="mb-3">
  <label className="form-label" htmlFor="message">Message</label>
  <textarea
    className="form-control"
    id="message"
    name="message"
    rows="2"
    placeholder="Describe your project..."
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    required
  ></textarea>
</div>

                   <button className={navStyles.wbtn} type="submit">
                     Send Whatsapp Message
                   </button>
                 </form>
               </div>
              
               <div className="col-md-6 ">
                 <iframe
                   className={`w-100 ${styles.map}`}
                   title="Kaepi Web Solutions, Location In Samana, patiala, punjab | Best Website & Advertisement Agency Samana"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.61263513888!2d76.2427496625558!3d30.16980697896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391032c853e9e177%3A0x7ba2c23c75036913!2sArai%20Majra%2C%20Punjab%20147101!5e1!3m2!1sen!2sin!4v1764939421416!5m2!1sen!2sin"
                   referrerPolicy="no-referrer-when-downgrade"
                   allowFullScreen=""
                   loading="lazy"
                 ></iframe>
               </div>
             </div>
           </div>
         </section>
   
  )
}

export default Contact