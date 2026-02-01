import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="gradient-text">Shahrukh Saiyad</span>
          </h1>
          <h2 className="hero-title">CS Undergrad | Software Engineer</h2>
          <p className="hero-description">
            An exceptionally creative individual pursuing BE in Computer Science, 
            seeking internship experience in software design. Passionate about 
            building innovative solutions and gaining professional experience.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Shahrukh-Saiyad441" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saiyad-shahrukh-9169a820b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:saiyadshahrukh4441@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+19296187422" aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
