// components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I’m <span>G. KALYAAN CHAKRAVARTY</span></h1>
        <h2>Aspiring Full-Stack Developer & Mechanical Engineer</h2>
        <p>I love building beautiful web experiences with design + code.</p>
        
        <div className="hero-buttons">
          <a href="/resume_kalyan.pdf" download className="btn">Download Resume</a>
          <a href="#projects" className="btn secondary">See My Work</a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
