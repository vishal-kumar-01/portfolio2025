import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Home = () => {
  const homeRef = useRef(null);
  const techRef = useRef(null);
  const hireBtnRef = useRef(null);
  const resumeBtnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    homeRef.current?.classList.add('fade-in-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show-tech');
        });
      },
      { threshold: 0.5 }
    );

    if (techRef.current) observer.observe(techRef.current);
    return () => techRef.current && observer.unobserve(techRef.current);
  }, []);

  const addClickEffect = (btnRef) => {
    btnRef.current?.classList.add('clicked');
    setTimeout(() => {
      btnRef.current?.classList.remove('clicked');
    }, 300);
  };

  const handleHireClick = () => {
    addClickEffect(hireBtnRef);
    navigate('/contact');
  };

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="home-content">
        <h1 className="main-heading">
          Hi, I'm <span className="highlight">Vishal Kumar</span>
        </h1>
        <h2 className="typing">
          Frontend Developer <span className="pipe">|</span> Full-Stack Web Developer – MERN
        </h2>

        <p className="intro">
          I’m a passionate <strong>Frontend Developer</strong> who loves crafting clean and responsive user interfaces using modern technologies like <strong>React</strong> and <strong>JavaScript</strong>.
        </p>

        <p className="intro">
          Currently, I’m exploring the <strong>backend world</strong> and learning <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> to become a complete <strong>Full Stack Developer</strong>.
        </p>

        <p className="intro tagline">
          My goal is to build fast, accessible, and scalable web applications that offer great user experiences and reliable performance.
        </p>

        <div className="tech-icons hidden-tech" ref={techRef}>
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express.js" />
          <SiReact title="React" />
          <SiNodedotjs title="Node.js" />
        </div>

        <div className="social-icons">
          <a href="https://github.com/vishal-kumar-01" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-a1228a36b/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className="home-buttons">
          <button
            ref={hireBtnRef}
            onClick={handleHireClick}
            className="btn hire"
          >
            Let’s Work Together
          </button>

          <a
            href="/Vishal-Resume.pdf"
            download
            ref={resumeBtnRef}
            onClick={() => addClickEffect(resumeBtnRef)}
            className="btn download"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;