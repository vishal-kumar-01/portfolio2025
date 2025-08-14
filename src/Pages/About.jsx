import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const iconsRef = useRef(null);
  const textRef = useRef(null);

  const techIcons = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  ];

  const [index, setIndex] = useState(0);

  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (iconsRef.current) observer.observe(iconsRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (iconsRef.current) observer.unobserve(iconsRef.current);
    };
  }, []);

  // Tech icon carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % techIcons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [techIcons.length]);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-text hidden" ref={textRef}>
          Hello! I'm <span className="highlight">Vishal Kumar</span>, a <strong>Full Stack Web Developer</strong> focused on crafting modern, scalable, and responsive web solutions. With a strong grip on the <strong>MERN stack</strong>, I love bringing ideas to life — from elegant frontends with <strong>React</strong> to robust backends with <strong>Node.js</strong> and <strong>MongoDB</strong>.
        </p>

        <h3 className="sub-heading">Tech Stack</h3>
        <div className="tech-icons-carousel hidden" ref={iconsRef}>
          <img
            src={techIcons[index].src}
            alt={techIcons[index].alt}
            className="carousel-icon"
            title={techIcons[index].alt}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
