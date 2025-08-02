// src/pages/Certifications.jsx
import './Pages.css';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/c6591898-f138-4c8e-ab4c-a3472516d034/public_url',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    url: 'https://www.credly.com/badges/52e8f019-c945-4fc0-b91e-b56db9080af8/public_url',
  },
  {
    title: 'Salesforce Certified AI Associate',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=Hfdr5JbLyKHLBKmAcf3T+DYJibxaGNYLpNipvnd4m09wY4Nb5xyOO8JgrMMVwP2d',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="page certifications-page">
      <h2 className="heading">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="certification-card"
          >
            <h3 className="certification-title">{cert.title}</h3>
            <span className="view-link">View Credential &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}