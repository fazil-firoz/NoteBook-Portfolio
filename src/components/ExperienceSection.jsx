import { NbSection } from './NbSection'

const BULLETS = [
  'Designed and developed Hospital Management Systems (HMS) for clients across Dubai and India using ASP.NET Core, React, SQL, and PostgreSQL.',
  'Built and contributed to a CRM system for an overseas educational consultancy, streamlining student and application management processes.',
  'Built robust backend modules using C# and improved database performance through optimized SQL queries.',
  'Developed and integrated RESTful APIs to enable seamless communication between frontend and backend systems.',
  'Integrated third-party APIs to extend system functionality and ensure smooth external service communication.',
  'Resolved critical production issues and ensured high system availability and reliability.',
  'Performed unit testing and debugging to ensure application reliability, code quality, and smooth functionality across modules.',
]

const TECH_TAGS = ['ASP.NET Core', 'React.js', 'C#', 'PostgreSQL', 'SQL Server', 'REST APIs', 'CRM', 'HMS Systems']

export function ExperienceSection() {
  return (
    <NbSection id="experience" extraClass="nb-neat-section">
      <h2 className="section-heading">Professional Experience</h2>
      <span className="heading-gap" />

      <div className="exp-entry neat-card" style={{ '--d': '0.1s' }}>
        <div className="exp-header-row">
          <div className="exp-title-group">
            <h3 className="exp-company">Antas Technologies</h3>
            <span className="exp-location">📍 Kochi, Kerala, India</span>
          </div>
          <span className="exp-date-badge">● Present (1 Year+)</span>
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
