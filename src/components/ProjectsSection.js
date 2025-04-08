// components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'QR-Based ATM System',
    description: 'A UPI-based ATM machine system where users scan a QR to withdraw cash. Built using React and Flask.',
    tech: ['React', 'Flask', 'UPI', 'QR Code'],
    link: 'https://github.com/kalyan-www/qr-atm-system',
  },
  {
    title: 'Billing Website for Xerox Shop',
    description: 'A web-based billing tool for Shree Venkatesh Xerox. Features printable invoice, dynamic total, and React UI.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/kalyan-www/xerox-billing-site',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built using React, hosted on GitHub Pages with animations and transitions.',
    tech: ['React', 'Framer Motion', 'GitHub Pages'],
    link: 'https://kalyan-www.github.io/kalyan-portfolio',
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">View on GitHub →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
