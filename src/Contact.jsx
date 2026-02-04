import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vasni9s",
        "template_9mt18zf",
        form.current,
        "C26KXlDYuH_oYVFhf"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Form Card */}
        <div className="neon-card">
          <h3>Send a Message</h3>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>

        {/* Info Card with clickable inner cards */}
        <div className="neon-card info-card">
          <h3>Contact Info</h3>

          <a href="mailto:gopika2003@gmail.com" className="contact-inner-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-text">
              <span>Email</span>
              <p>gopika2003@gmail.com</p>
            </div>
          </a>

          <a href="https://github.com/gopika1610" target="_blank" rel="noopener noreferrer" className="contact-inner-card">
            <FaGithub className="contact-icon" />
            <div className="contact-text">
              <span>GitHub</span>
              <p>gopika1610</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/gopika1610" target="_blank" rel="noopener noreferrer" className="contact-inner-card">
            <FaLinkedin className="contact-icon" />
            <div className="contact-text">
              <span>LinkedIn</span>
              <p>gopika1610</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
