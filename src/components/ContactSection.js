// components/ContactSection.js
import React from 'react';
import './ContactSection.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>Have a project or want to connect? Send a message or reach out via socials!</p>

        <form
          action="https://formspree.io/f/xjkypvzv"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://github.com/kalyan-www" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/g-kalyaan-chakravarty" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:gkalyanchakravarty@gmail.com"><FaEnvelope /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
