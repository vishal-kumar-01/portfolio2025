import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import gitvizzImg from '../assets/gitvizzImg.png';
import dice from '../assets/dice.png';
import tilt from '../assets/tilt.png';

const Projects = () => {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const projectList = [
    {
      title: 'Gitviz App',
      desc: `A modern and interactive React web app that lets you explore any GitHub user's profile, repositories, and stats in a clean and visual way.`,
      image: gitvizzImg,
      github: 'https://github.com/vishal-kumar-01/Git-Visilixer',
      live: 'https://gitvisilixer.netlify.app/',
    },
    {
      title: 'Dice Roller App',
      desc: 'Dice Roller App — A clean and responsive React app that lets you roll a virtual dice with smooth animation and dynamic image updates. Built with React hooks and deployed on Netlify.',
      image: dice, // 
      github: 'https://github.com/vishal-kumar-01/Dicd-Roller',
      live: 'https://dicerollerapp1.netlify.app/',
    },
      {
      title: '3D Tilt Card',
      desc: 'A modern, visually engaging card component with smooth 3D tilt effect that reacts to mouse movement.',
      image: tilt, // 
      github: 'https://github.com/vishal-kumar-01/3D-Tilt-Card',
      live: 'https://3d-tiltcard.netlify.app/',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => {
      cardsRef.current.forEach(card => card && observer.unobserve(card));
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <p className="projects-intro">
        I've recently worked on a variety of hands-on projects that showcase my ability to build real-world applications using modern technologies. From a professional portfolio to practical tools like a weather forecast app and a booking system, each project reflects my growth as a developer and my passion for clean, functional design.
      </p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            key={project.title}
            ref={el => (cardsRef.current[index] = el)}
            className={`project-card ${visibleCards[index] ? 'visible' : ''}`}
          >
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="project-image"
              loading="lazy"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
