// src/pages/Skills.jsx
import './Pages.css';

const skills = [
  { category: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Django', 'Spring Boot', 'Node.js'] },
  { category: 'DB', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Git'] },
  { category: 'Tools', items: ['VS Code', 'IntelliJ', 'Jira'] },
];

export default function Skills() {
  return (
    <section id="skills" className="page skills-page">
      <h2 className="heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skill-category-card">
            <h3 className="skill-category-title">{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}