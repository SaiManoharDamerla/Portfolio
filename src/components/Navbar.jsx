// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './components.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (totalScroll / windowHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="nav-container">
        <a href="#home" className="brand" onClick={(e) => handleScrollToSection(e, 'home')}>
          Sai Manohar
        </a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>
            About
          </a>
          <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')}>
            Projects
          </a>
          <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')}>
            Skills
          </a>
          <a href="#certifications" onClick={(e) => handleScrollToSection(e, 'certifications')}>
            Certifications
          </a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')}>
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}