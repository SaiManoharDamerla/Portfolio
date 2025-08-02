// src/components/ProjectCard.jsx
import './components.css'; // New CSS file for components

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-btn">
          GitHub
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-btn">
          Live Demo
        </a>
      </div>
    </div>
  );
}