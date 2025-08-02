// src/pages/Home.jsx
import './Pages.css';
import { useRef, useEffect } from 'react';

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current) {
        const offset = window.scrollY;
        homeRef.current.style.backgroundPositionY = offset * 0.5 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="page home-page" ref={homeRef}>
      <div className="home-content">
        <h1 className="main-heading">
          Hi, I'm <span className="highlight">Sai Manohar</span>
        </h1>
        <p className="main-subheading">CSE Undergraduate & Frontend Developer</p>
        <p className="main-intro">
          I build modern, responsive, and performant web applications. Let's create something great together.
        </p>
        <a href="#projects" className="cta-button" onClick={handleScrollToProjects}>
          View My Work
        </a>
      </div>
    </section>
  );
}