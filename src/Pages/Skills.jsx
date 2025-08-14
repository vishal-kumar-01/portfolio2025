import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const techRefs = useRef([]);
  const toolRefs = useRef([]);
  const softRefs = useRef([]);

  const [visibleTech, setVisibleTech] = useState([]);
  const [visibleTools, setVisibleTools] = useState([]);
  const [visibleSoft, setVisibleSoft] = useState([]);

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '🧠' },
    { name: 'Communication', icon: '💬' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Time Management', icon: '⏱️' },
    { name: 'Creativity', icon: '🎨' },
  ];

  // Single observer to handle all types reliably
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.dataset.index);
          const type = entry.target.dataset.type;
          if (entry.isIntersecting) {
            if (type === 'tech') {
              setVisibleTech(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            } else if (type === 'tool') {
              setVisibleTools(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            } else if (type === 'soft') {
              setVisibleSoft(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    [...techRefs.current, ...toolRefs.current, ...softRefs.current].forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      [...techRefs.current, ...toolRefs.current, ...softRefs.current].forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <p className="skills-para">
        I’m well-versed in a range of technologies and tools that I use to build clean, efficient, and scalable web applications. These skills reflect my commitment to writing quality code and delivering great user experiences.
      </p>

      <div className="skills-grid">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            ref={el => (techRefs.current[index] = el)}
            data-index={index}
            data-type="tech"
            className={`skill-card ${visibleTech[index] ? 'visible' : ''}`}
          >
            <img src={tech.icon} alt={tech.name} title={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title tools-title">Tools</h2>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            ref={el => (toolRefs.current[index] = el)}
            data-index={index}
            data-type="tool"
            className={`skill-card ${visibleTools[index] ? 'visible' : ''}`}
          >
            <img src={tool.icon} alt={tool.name} title={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title soft-title">Soft Skills</h2>
      <div className="skills-grid soft-grid">
        {softSkills.map((skill, index) => (
          <div
            key={skill.name}
            ref={el => (softRefs.current[index] = el)}
            data-index={index}
            data-type="soft"
            className={`skill-card soft ${visibleSoft[index] ? 'visible' : ''}`}
          >
            <div className="emoji">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
