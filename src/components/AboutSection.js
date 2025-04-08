// components/AboutSection.js
import React from 'react';
import './AboutSection.css';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg'; // add your photo here

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src={profile} alt="Gopal Kalyan" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <strong>G. KALYAAN CHAKRAVARTY</strong> — a passionate developer with a background in Mechanical Engineering.
            I have hands-on experience in web development, design, and engineering tools like AutoCAD, CATIA, and SolidWorks.
          </p>
          <p>
            My goal is to combine creativity and logic to build useful and beautiful digital products.
            I love learning new technologies and working on real-world problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
