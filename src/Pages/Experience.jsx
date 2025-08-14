import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Intern – Web Developer',
    company: 'Netcoder – Technology',
    duration: 'May 2025 – Sep 2025',
    desc: 'Built responsive landing pages and reusable UI components using HTML, CSS, JavaScript, and React.',
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card fade-in">
            <h3 className="role">{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
