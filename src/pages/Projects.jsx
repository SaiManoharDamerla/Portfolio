// src/pages/Projects.jsx
import './Pages.css';
import ProjectCard from '../components/ProjectCard';

const projects = [
  // ... (project data remains the same)
  {
    id: 1,
    title: 'Ecommerce Microservices Platform',
    description: 'A scalable ecommerce platform built with a microservices architecture.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/SaiManoharDamerla/ecommerce-platform',
    liveUrl: 'https://ecommerce.saimanohar.dev',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'A comprehensive system for managing hospital operations, patient records, and appointments.',
    technologies: ['JSP', 'Java EE', 'MySQL'],
    githubUrl: 'https://github.com/SaiManoharDamerla/hospital-management',
    liveUrl: 'https://hospital.saimanohar.dev',
  },
  {
    id: 3,
    title: 'Online Exam Portal',
    description: 'A real-time online platform for conducting and managing exams with user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/SaiManoharDamerla/online-exam-portal',
    liveUrl: 'https://exams.saimanohar.dev',
  },
  {
    id: 4,
    title: 'Astrology System',
    description: 'A web-based system providing astrological insights and horoscopes based on user data.',
    technologies: ['HTML', 'CSS', 'Django', 'Python'],
    githubUrl: 'https://github.com/SaiManoharDamerla/astrology-system',
    liveUrl: 'https://astrology.saimanohar.dev',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page projects-section">
      <h2 className="heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}