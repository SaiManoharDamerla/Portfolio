import { useState, useEffect } from 'react';
import './components.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (totalScroll / height) * 100;
      setScrollProgress(scrollPercentage);

      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
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

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {['home', 'about', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScrollToSection(e, section)}
              className={activeSection === section ? 'active-nav-link' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
