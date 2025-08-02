// src/components/AboutContent.jsx
import './components.css';

export default function AboutContent() {
  return (
    <div className="about-details">
      <p>BTech in CSE at KL University (2026), CGPA: 9.15</p>
      <p>Passionate about frontend development, cloud technologies, and AI.</p>
      <div className="contact-info">
        <p>
          📞 Mobile:{' '}
          <a href="tel:+919010776261" className="info-link">
            +91 9010776261
          </a>
        </p>
        <p>
          📧 Email:{' '}
          <a href="mailto:damerla.vsrs.manohar@gmail.com" className="info-link">
            damerla.vsrs.manohar@gmail.com
          </a>
        </p>
        <p>
          💻 GitHub:{' '}
          <a
            href="https://github.com/SaiManoharDamerla"
            target="_blank"
            rel="noreferrer"
            className="info-link"
          >
            SaiManoharDamerla
          </a>
        </p>
        <p>
          🔗 LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/sai-manohar-damerla/"
            target="_blank"
            rel="noreferrer"
            className="info-link"
          >
            saimanohardamerla
          </a>
        </p>
      </div>
      <div className="resume-buttons">
        <a href="/Resume.pdf" download className="resume-btn">
          Download Resume
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn view-btn">
          View Resume
        </a>
      </div>
    </div>
  );
}