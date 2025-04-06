import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '10px' }}>G. KALYAAN CHAKRAVARTY</h1>
        <h3 style={{ color: '#555' }}>Engineering Student | Mechanical & Software Enthusiast</h3>
      </header>

      {/* About */}
      <section style={{ marginBottom: '30px' }}>
        <h2>About Me</h2>
        <p>
          I'm currently pursuing my Bachelor's degree in Engineering. I also hold a diploma in Mechanical Engineering and a Master Diploma in CAD.
          I am skilled in software and design tools and passionate about Software/Web/Game development and Quality Control Engineering.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Skills</h2>
        <ul>
          <li>Design: AutoCAD, CATIA, Creo, SolidWorks</li>
          <li>Programming: Java, Python</li>
          <li>Web Dev: React, HTML, CSS, JavaScript</li>
          <li>Other Tools: MS Office</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Projects</h2>
        <ul>
          <li>Billing Website for Shree Venkatesh Xerox</li>
          <li>QR-Based ATM UPI System</li>
          <li>Website using Node.js and Excel as DB</li>
        </ul>
      </section>

      {/* Resume */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Resume</h2>
        <a href="/resume_kalyan.pdf" target="_blank" rel="noopener noreferrer">
          📄 View My Resume
        </a>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:kalyan.chakravarty@mail.com">kalyan.chakravarty@mail.com</a></p>
        <p>GitHub: <a href="https://github.com/kalyan-www" target="_blank" rel="noopener noreferrer">github.com/kalyan-www</a></p>
      </section>
    </div>
  );
}

export default App;
