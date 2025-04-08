// components/SkillsSection.js
import React from 'react';
import './SkillsSection.css';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'AutoCAD', level: 95 },
  { name: 'CATIA', level: 90 },
  { name: 'SolidWorks', level: 88 },
];

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-bar"
              key={index}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span>{skill.name}</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: `${skill.level}%` }}>
                  <span className="bar-percent">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
