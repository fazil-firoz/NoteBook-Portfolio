import { NbSection } from './NbSection'

const BULLETS = [
  'Designed and developed Hospital Management Systems (HMS) for clients across Dubai and India using ASP.NET Core, React, SQL Server, and PostgreSQL.',
  'Built and contributed to a CRM system for an overseas educational consultancy, streamlining student profiles and application tracking.',
  'Architected robust backend modules in C# and optimized complex SQL queries for peak database performance.',
  'Developed and integrated RESTful APIs to enable seamless, real-time communication between frontend React apps and backend services.',
  'Integrated third-party APIs and payment gateways to extend core system capabilities and external service communication.',
  'Diagnosed and resolved critical production issues, ensuring high application uptime, performance, and operational reliability.',
  'Performed thorough unit testing and debugging across modules to deliver clean, maintainable, and bug-free code.',
]

const TECH_TAGS = [
  'C#',
  'ASP.NET Core',
  'React.js',
  'PostgreSQL',
  'SQL Server',
  'RESTful APIs',
  'CRM System',
  'HMS Systems',
  'Git & SourceTree',
]

export function ExperienceSection() {
  return (
    <NbSection id="experience" extraClass="nb-neat-section">
      <h2 className="section-heading">Professional Experience</h2>
      <span className="heading-gap" />

      <div className="exp-entry neat-card notebook-paper-card note-cream" style={{ '--d': '0.1s' }}>
        {/* Scotch Tape on top center & paperclip icon */}
        <span className="card-tape-top" aria-hidden="true" />
        <span className="card-pin-icon" aria-hidden="true">📌</span>

        <div className="exp-header-row">
          <div className="exp-title-group">
            <h3 className="exp-company">
              <span className="paperclip-icon">📎</span> Antas Technologies
            </h3>
            <span className="exp-location">📍 Infopark, Kochi, Kerala, India</span>
          </div>
          <span className="exp-date-badge">● 2025 – Present (1+ Year)</span>
        </div>

        <span className="exp-role-title">
          Junior Software Engineer
        </span>

        {/* Tech tags */}
        <div className="exp-tags">
          {TECH_TAGS.map(tag => (
            <span key={tag} className="exp-tag">{tag}</span>
          ))}
        </div>

        <span className="exp-divider-neat" />

        <ul className="exp-bullets-neat">
          {BULLETS.map((b, i) => (
            <li key={i} className="exp-bullet-neat" style={{ '--d': `${0.2 + i * 0.08}s` }}>
              <span className="exp-bullet-icon">✦</span>
              <span className="exp-bullet-text">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </NbSection>
  )
}
