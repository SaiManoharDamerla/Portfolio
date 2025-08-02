// src/pages/About.jsx
import './Pages.css';
import AboutContent from '../components/AboutContent';

export default function About() {
  return (
    <section id="about" className="page about-section">
      <h2 className="heading">About Me</h2>
      <div className="about-container">
        <img
          src="/src/pages/DSC_0475.JPG"
          alt="Sai Manohar"
          className="profile-photo"
        />
        <AboutContent />
      </div>
    </section>
  );
}